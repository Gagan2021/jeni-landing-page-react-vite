pipeline {
    agent any

    environment {
        IMAGE_NAME = "myapp:latest"
        TRIVY_CONTAINER = "trivy-temp"
        REPORT_FILE = "trivy-report.html"
    }

    stages {
        stage('checkout'){
            steps{
                git url: 'https://github.com/Gagan2021/jeni-landing-page-react-vite.git', branch: 'main'
            }
        }
      

        stage('Build Image with docker') {
            steps {
                sh '''
                 docker stop $IMAGE_NAME || true
                    docker rm $IMAGE_NAME || true
                    docker rmi $IMAGE_NAME || true
                    echo "[*] Building image using docker..."
                    docker build -t $IMAGE_NAME .
                '''
            }
        }

        stage('Run Trivy Scan') {
            steps {
                sh '''
                    echo "[*] Pulling Trivy image..."
                    docker pull aquasec/trivy:latest

                    echo "[*] Running Trivy container..."
                    docker run --name $TRIVY_CONTAINER \
                        -v /var/run/docker/docker.sock:/var/run/docker/docker.sock \
                        aquasec/trivy image --format template --template "@contrib/html.tpl" -o /root/report/$REPORT_FILE $IMAGE_NAME
                '''
            }
        }

        stage('Archive Report') {
            steps {
                echo "Archiving Trivy report to Jenkins..."
                archiveArtifacts artifacts: REPORT_FILE, allowEmptyArchive: false
            }
        }
    }

  
}
