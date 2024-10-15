# Pulse - A Real-time Chat App

## Overview

Pulse is a real-time chat application built using Next.js, Typescript, React.js, Socket.io, Kafka, Redis, stream adapters, Supabase for user data storage, NextAuth for secure authentication, and Prisma ORM. It is designed to be scalable and fault-tolerant, with a focus on high performance and low latency.
## Demo

<video width="100%" controls>
  <source src="/assets/demo_insta.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>

## Architecture

The application is divided into three main components: the frontend, the backend, and the message queue.
[Architecture Diagram](https://www.mermaidchart.com/raw/d9544c30-9303-4825-b748-deef21a44442?theme=light&version=v0.1&format=svg)

### Frontend

The frontend is built using React.js and Next.js. It is responsible for rendering the user interface and handling user input. The frontend communicates with the backend using REST API endpoints.

### Backend

The backend is built using Node.js and Next.js. It is responsible for handling requests from the frontend, authenticating users, and storing data in Supabase. The backend communicates with the message queue using Kafka producers and consumers.

### Message Queue

The message queue is built using Kafka and Redis. Kafka is used for message persistence and Redis is used for message caching. The message queue is responsible for handling message delivery between users.

## Features

### Authentication

NextAuth is used for secure authentication and easy login and signup. Users can login with their Google account or signup with their email address.

### Real-time Chat

The application uses Socket.io to establish a real-time connection between users. When a user sends a message, the message is sent to the message queue, which then delivers the message to the recipient's Socket.io connection.

### User Data Storage

Supabase is used to store user data. The backend uses Prisma ORM to interact with the Supabase database.

### Scalability

The application is designed to be scalable. The frontend and backend are stateless, allowing them to be easily scaled up or down. The message queue is designed to handle high volumes of messages, and can be scaled up or down as needed.

## API Endpoints

The application has the following API endpoints:

### Authentication

* `POST /auth/login`: Login with email and password.
* `POST /auth/signup`: Signup with email and password.
* `POST /auth/google`: Login with Google account.
* `GET /auth/session`: Get the current user session.
* `POST /auth/logout`: Logout the current user.

### Real-time Chat

* `POST /messages`: Send a message to the message queue.
* `GET /messages`: Get all messages from the message queue.
* `GET /messages/:id`: Get a specific message from the message queue.

### User Data Storage

* `POST /users`: Create a new user.
* `GET /users`: Get all users.
* `GET /users/:id`: Get a specific user.
* `PUT /users/:id`: Update a specific user.
* `DELETE /users/:id`: Delete a specific user.

## Kafka Topics

The application uses the following Kafka topics:

* `chat.messages`: All messages sent to the message queue.
* `chat.users`: All users created or updated.
