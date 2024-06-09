# Firebase Chat Application

## Overview
Welcome to the Firebase Chat Application project! This project focuses on setting up a development environment, organizing a basic folder structure, defining API endpoints and data models, and testing endpoints with Postman.
By the end of this project, you'll have a fully functioning backend setup using Firebase Functions and Firestore, along with a streamlined development workflow.

![Project Banner](https://firebasestorage.googleapis.com/v0/b/radicalx-development.appspot.com/o/Quests%2FIntroToGenAI%2FVolume.png?alt=media&token=8562b237-27c3-4c1f-88c6-f4ccaff6cbc0)

## Getting Started

### Prerequisites
- Node.js
- Firebase CLI
- Visual Studio Code with recommended extensions

### Installation
  
   Download and install Node.js from [nodejs.org](https://nodejs.org/).
**Install Firebase CLI**: 
   npm install -g firebase-tools
   
**Set Up Visual Studio Code**:
Install the following recommended extensions:
Prettier - Code formatter
ESLint
Firebase snippets

project-root
│
├── functions
│   ├── api
│   │   └── addMessage.js
│   ├── services
│   ├── helpers
│   ├── models
│   ├── .eslintrc.js
│   ├── .gitignore
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── .firebaserc
├── .gitignore
├── firebase.json
├── firestore.indexes.json
└── firestore.rules


**1. Setting Up Development Environment**
Follow the steps outlined above to set up Node.js, Firebase CLI, and Visual Studio Code with the necessary extensions to streamline your development process.

**2. Basic Folder Structure**
Enhance your Firebase project folder structure and configuration for efficient development. Organize folders for Cloud Functions, API, services, helpers, and models to streamline backend development. Set up the public folder for frontend assets, and configure key files like firebase.json and .firebaserc.

**3. API Endpoint and Data Model Definition**
Configure Firestore in test mode to handle chat messages. Design a simple data model for chat sessions and messages. Initialize Firebase Functions and create a basic API endpoint to manage chat messages.


**4. Endpoint Testing with Postman**
Test your Firebase Functions endpoint with Postman. Set up a new request in Postman to add chat messages to your Firebase API. Configure the request type, URL, headers, and JSON body. Analyze the response to ensure successful message addition.

**Acknowledgments**
Inspired by the RadicalX Development team.
**Contact**
For any issues, please reach out to dagmawi.negatu@gmail.com.




