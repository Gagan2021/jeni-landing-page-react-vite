pipeline{
    agent any
    stages{
        stage('cloning the code from the github repo'){
            steps{
                sh 'git clone https://github.com/Gagan2021/space-project.git'
            }
        }
        stage('installing dependencies for the project'){
            steps{
                sh 'npm install'
            }
        }
        stage('running this project on host server'){
            steps{
                sh 'npm run dev'
            }
        }
    }
}