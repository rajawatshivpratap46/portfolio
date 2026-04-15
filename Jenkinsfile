pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/rajawatshivpratap46/portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t 12shiv123/my-portfolio:latest .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                credentialsId: 'dockerhub',
                usernameVariable: 'DOCKER_USER',
                passwordVariable: 'DOCKER_PASS')]) {

                bat 'docker login -u %DOCKER_USER% -p %DOCKER_PASS%'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                bat 'docker push 12shiv123/my-portfolio:latest'
            }
        }

    }
}