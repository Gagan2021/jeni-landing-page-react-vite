pipeline {
    agent any

    stages {
        stage('checkout'){
            steps{
                git url: 'https://github.com/Gagan2021/jeni-landing-page-react-vite.git', branch: 'main'
                sh 'docker images'
            }
        }
      
      


        stage('Build Image with docker') {
            steps {
                sh '''
                 
                    echo "[*] Building image using docker..."
                    docker build -t tester .
                '''
            }
        }

        stage('run docker image'){
            sh "docker run -d -p5173:5173 tester"
        }

      

      
    }

  
}
