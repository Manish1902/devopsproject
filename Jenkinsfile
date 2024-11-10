pipeline {
    agent any

    environment {
        NODE_VERSION = 'NodeJS 20' // Specify Node version if needed
        BRANCH_NAME = "${env.GIT_BRANCH}"
        TOMCAT_HOME = 'C:\\Program Files\\Apache Software Foundation\\Tomcat 11.0_Tomcat11_Temp' // Update with your Tomcat installation path
    }

    tools {
        nodejs "${NODE_VERSION}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from Git
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node dependencies
                bat 'npm install'
            }
        }

        stage('Install Test Dependencies') {
            steps {
                // Install jest-junit for test reporting
                bat 'npm install --save-dev jest-junit'
            }
        }

        stage('Build') {
            steps {
                // Build the React project for production
                bat 'npm run build'
            }
        }

        stage('Package') {
            steps {
                // Package the built application into a .war file (optional)
                bat '''
                mkdir dist
                xcopy /s /e /i /y /q build dist
                cd dist
                jar -cvf myapp.war *
                '''
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the build folder to Tomcat
                bat '''
                xcopy /s /e /i /y /q build "%TOMCAT_HOME%\\webapps\\your-app"
                '''
            }
        }

        stage('Test') {
            steps {
                // Run tests with Jest and output results in JUnit format
                bat 'npm test -- --ci'
            }
            post {
                always {
                    junit 'test-results/junit.xml' // Replace with actual Jest output path
                }
            }
        }

        stage('Security Scan') {
            steps {
                // Placeholder for security testing
                echo 'Running security scans...'
                // Add actual security scan commands or API calls here
            }
        }
    }

    post {
        failure {
            echo 'Build failed!'
            mail to: 'your-email@example.com',
                 subject: "Jenkins Pipeline Failed: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                 body: "Something is wrong with ${env.JOB_NAME}. Please check console output."
        }
    }
}