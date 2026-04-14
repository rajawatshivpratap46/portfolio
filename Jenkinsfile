pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t 12shiv123/my-portfolio:latest .'
            }
        }

        stage('Docker Login') {
            steps {
                bat 'docker login -u 12shiv123 -p 180804'
            }
        }

        stage('Push Docker Image') {
            steps {
                bat 'docker push 12shiv123/my-portfolio:latest'
            }
        }

        stage('Deploy Container') {
            steps {
                bat '''
                docker stop portfolio || echo container not running
                docker rm portfolio || echo container not exist
                docker run -d -p 3000:3000 --name portfolio 12shiv123/my-portfolio
                '''
            }
        }
    }
}