pipeline{
    agent any
    //   environment{
    //     SONAR_HOME= tool 'sonarqube'
    //   }
    stages{
        stage('cloning the code from the github repo'){
            steps {
                git url: 'https://github.com/Gagan2021/jeni-landing-page-react-vite.git', branch: 'main'
                   
            }
        }
        stage('installing dependencies for the project'){
            steps{
                sh 'npm install'
            }
        }
        // stage('sonarqube testing started'){
        //     steps{
        //         withSonarQubeEnv('sonarqube'){
        //             sh '$SONAR_HOME/bin/sonarqube-scanner -Dsonar.projectName=space -Dsonar.projectKey=space'
        //         }
        //     }
        // }
        stage('building docker image for this project'){
            steps{
                sh 'docker build -t space .'
            }
        }
        stage('trivy checking image vulnerbilities'){
            steps{
                 sh 'trivy image space'
            }
           
        }
        stage('check for old running container to prevent conflict'){
            sh ''' 
                if docker ps -a --format '{{.Names}}' | grep -w "space-container"; then docker stop space-container || true docker rm space-container || true fi
            '''
        }
        stage('Running docker image'){
            steps{
                sh 'docker run -d -p 5001:5173 space'
            }
        }

    }
}