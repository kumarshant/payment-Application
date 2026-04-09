💸 Payment Application 

This project is a step-by-step build of a simple Paytm-like payment app. The idea is to gradually create a full-stack application where users can sign up, log in, check their balance, and send money to others.

It uses Node.js, Express, MongoDB (with Mongoose) on the backend, JWT for authentication, and a React frontend. APIs can be tested using tools like Postman.

🧩 What’s included

The project starts with basic setup and slowly builds up:

Creating user and account models in MongoDB
Setting up a clean backend structure with routes and middleware
Implementing authentication (signup/signin using JWT)
Protecting routes with middleware
Managing user data (view/update profile)
💰 Payment functionality

Once the basics are ready, the core payment logic is added:

Each user gets a wallet balance
New users start with some default money
Users can check their balance
Money transfer between users is implemented
MongoDB transactions are used to make transfers safe and consistent
🖥️ Frontend

On the frontend side, a simple React app is built with:

Signup and login pages
Routing between pages
A dashboard showing balance and users
A form to send money
✅ Final result

By the end, you have a working mini payment app where users can:

Create an account and log in
See their wallet balance
Send money to other users