pipeline{
    agent any
    stages{
        stage('cloning the code from the github repo'){
            steps {
                git branch: 'main',
                    url: 'https://github.com/Gagan2021/jeni-landing-page-react-vite.git'
            }
        }
        stage('installing dependencies for the project'){
            steps{
                sh 'npm install'
            }
        }
        stage('building docker image for this project'){
            steps{
                sh 'docker build -t space .'
            }
        }
        stage('trivy checking image vulnerbilities'){
            sh 'trivy image space'
        }
        stage('Running docker image'){
            steps{
                sh 'docker run -d -p 5001:5173 space'
            }
        }

    }
}