# Social Media Clone Project

## Overview
This project is a fully-responsive social media platform that replicates key functionalities of leading social networks. It provides users with features such as post feeds, friend management, and dynamic dark/light mode toggles.

## Features
- **Post Feeds:** Enables users to share and view posts.
- **Friend Management:** Allows users to connect with others.
- **Dynamic Themes:** Provides options for dark and light mode toggles.

## Technologies Used
- **Front-end:** React, Material UI, React-Redux
- **Back-end:** Node.js, Express.js, MongoDB Atlas
- **Security:** bcrypt, JSON Web Tokens

## API Endpoints

### Authentication
- **POST** `/auth/login`: Endpoint to log in a user.

### User-related Endpoints
- **GET** `/users/:id`: Retrieves user information.
- **GET** `/users/:id/friends`: Retrieves a user's friends.
- **PATCH** `/users/:id/:friendId`: Adds or removes a friend for a user.

### Posts-related Endpoints
- **GET** `/posts/`: Retrieves feed posts.
- **GET** `/posts/:userId`: Retrieves user-specific posts.
- **PATCH** `/posts/:id/like`: Likes a specific post.