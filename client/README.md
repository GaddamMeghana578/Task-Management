# TASK MANAGEMENT APP

_MERN Stack Project_

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You are going to need **Node.js**, **MongoDB** and **npm** or **yarn** installed on your machine.
**Note**: You can either install **MongoDB** locally on your machine or use **MongoDB Atlas**
Make sure you are using the latest version of node.

### Installing

How to properly install and configure this repository to work on your machine.

Cloning the repository

```
git clone ...
```

## Starting the repository on your machine

You will need to run client & server seperately, ports are already configured, make sure you don't conflict them if you change anything.

If you are not using **MongoDBAtlas** then do the below:

Start Mongo server in your project directory on a new terminal

```
cd Task-Management
```

```
Task-Management /mongod
```

On mac book you need to run

```
Task-Management /sudo mongod
```

## Enter Server directory on a new terminal

```
cd Task-Management/server
```

Install the packages on the server

```
Task-Management/server/npm install
```

OR

```
Task-Management/server/yarn install
```

Run the server

```
Task-Management/server/npm start
```

OR

```
Task-Management/server/yarn start
```

## Enter Client directory on a new terminal

```
cd Task-Management/client
```

Install the packages on the client

```
Task-Management/client/npm install
```

OR

```
Task-Management/client/yarn install

```

Run the application on the client

```
Task-Management/client/npm start
```

OR

```
Task-Management/client/yarn start
```

Now you can see that **localhost:3000** automatically opens up on your browser and you can use the app

## Built With

- [MongoDB](https://www.mongodb.com/) - No SQL Database
- [Express](https://expressjs.com/) - Node.js web application framework
- [React](https://reactjs.org/) - Frontend/client javascript library
- [Node](https://nodejs.org/en/) - Backend/server framework

## Project Description

It is a task management application which provides a way to track and monitor tasks as well add new tasks and edit the existing ones. As a user you can enter the tasks and keep a track on your work.

## Authors

- **Meghana Gaddam** - _Task-Management project work_ - [LearnMERN](https://github.com/GaddamMeghana578/Task-Management)
