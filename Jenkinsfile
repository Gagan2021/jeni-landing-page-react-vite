pipeline {

    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/Gagan2021/jeni-landing-page-react-vite.git',
                    branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Stop Old Container (Safe)') {
            steps {
                sh '''
                echo "Stopping old container (if exists)..."
                if docker ps -a --format '{{.Names}}' | grep -w "space-container"; then
                    docker stop space-container || true
                    docker rm space-container || true
                fi
                '''
            }
        }

        stage('Build Versioned Docker Image') {
            steps {
                sh '''
                echo "Building new Docker image..."
                docker build -t space:${BUILD_NUMBER} .

                echo "Tagging new image as latest..."
                docker tag space:${BUILD_NUMBER} space:latest
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                echo "Running new container..."
                docker run -d \
                    --name space-container \
                    -p 5001:5173 \
                    space:latest
                '''
            }
        }

        stage('Clean ONLY Dangling Images') {
            steps {
                sh '''
                echo "Cleaning unused dangling images..."
                docker image prune -f
                '''
            }
        }

    }

    post {

        success {
            emailext(
                subject: "SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
Boss,
Pipeline SUCCESSFULLY deploy ho gaya. 🚀

New Image: space:${BUILD_NUMBER}
Running Container: space-container
URL: http://<YOUR-SERVER-IP>:5001

All old unused images cleaned safely.
                """,
                to: "chaudharygagan661@gmail.com"
            )
        }

        failure {
            emailext(
                subject: "FAILURE: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
Boss,
Pipeline FAIL ho gaya ❌  

Check Jenkins logs for details.

Job: ${env.JOB_NAME}
Build: ${env.BUILD_NUMBER}
                """,
                to: "chaudharygagan661@gmail.com"
            )
        }
    }
}
