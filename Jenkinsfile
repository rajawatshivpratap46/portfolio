pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/rajawatshivpratap46/portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t 12shiv123/my-portfolio:latest .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push 12shiv123/my-portfolio:latest'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop portfolio || true
                docker rm portfolio || true
                docker run -d -p 3000:3000 --name portfolio 12shiv123/my-portfolio
                '''
            }
        }
    }
}