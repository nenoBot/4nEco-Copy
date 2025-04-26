pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/your-repo.git'
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t test-app .'
            }
        }
        stage('Run') {
            steps {
                sh 'docker run -d -p 8080:80 test-app'
            }
        }
    }
}
