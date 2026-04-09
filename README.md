# Mini Paytm Clone – Guided Project

This project breaks down the process of building a **basic Paytm-like online payment application** into **18 mini assignments**.
By completing them sequentially, you will build a **full-stack payment system** with authentication, wallet balances, and money transfers.

The stack used in this project:

* **Backend:** Node.js, Express, MongoDB, Mongoose
* **Authentication:** JWT
* **Frontend:** React
* **Testing APIs:** Postman / Thunder Client

---

# Project Assignments

## Assignment 1 — Project Setup

**Goal:** Initialize the project and understand the codebase.

### Tasks

* Clone the starter repository
* Install dependencies
* Run the backend server
* Explore the project structure

### Expected Outcome

The backend server runs successfully on your machine.

---

# Backend Development

## Assignment 2 — Create the User Database Model

**Goal:** Store user information in MongoDB.

### Tasks

* Install and configure **Mongoose**
* Create a `User` schema with the following fields:

  * firstname
  * lastname
  * username/email
  * password

### Expected Outcome

Users can now be stored in MongoDB.

---

## Assignment 3 — Create a Clean Routing Structure

**Goal:** Organize the backend project properly.

### Tasks

Create folders:

```
/routes
/middleware
/db
```

Create route files:

```
routes/user.js
routes/account.js
```

### Expected Outcome

Backend structure is clean and modular.

---

## Assignment 4 — Setup Express Routing

**Goal:** Connect route files to the main server.

### Tasks

* Import routes inside `index.js`
* Use **Express Router**
* Test with a simple route such as:

```
/test
```

### Expected Outcome

API routes respond correctly.

---

## Assignment 5 — Add Essential Middleware

**Goal:** Prepare backend to handle real requests.

### Tasks

Install and configure:

* `cors`
* `express.json()` or `body-parser`
* `jsonwebtoken`

### Expected Outcome

The backend can accept JSON requests and support authentication tokens.

---

## Assignment 6 — Build Authentication Routes

**Goal:** Implement user signup and login.

### Tasks

Create routes:

```
POST /signup
POST /signin
```

### Features

* Register new users
* Validate login credentials
* Generate a JWT token

### Expected Outcome

Users can sign up and log in successfully.

---

## Assignment 7 — Create Authentication Middleware

**Goal:** Protect private routes.

### Tasks

Create middleware that:

* Reads JWT token from headers
* Verifies the token
* Attaches `userId` to the request

### Expected Outcome

Protected routes require authentication.

---

## Assignment 8 — Create User APIs

**Goal:** Allow users to fetch or update their profile.

### Tasks

Create endpoints:

```
GET /user
PUT /user
```

### Expected Outcome

Authenticated users can view and update their information.

---

# Banking System Logic

## Assignment 9 — Create Account Schema

**Goal:** Store wallet balances for users.

### Tasks

Create a Mongoose schema:

```
Account
- userId
- balance
```

### Expected Outcome

Each user has a wallet balance stored in the database.

---

## Assignment 10 — Implement Database Transactions

**Goal:** Ensure safe money transfers.

### Tasks

Use **MongoDB transactions** so that:

* Money is deducted from the sender
* Money is added to the receiver
* If any step fails → rollback

### Expected Outcome

Transfers happen safely without data inconsistency.

---

## Assignment 11 — Initialize Balance on Signup

**Goal:** Give new users starting money.

### Tasks

During signup:

* Create a corresponding `Account`
* Initialize with a default balance (example: ₹5000)

### Expected Outcome

Every new user automatically receives a wallet balance.

---

## Assignment 12 — Create Account Routes

**Goal:** Separate financial APIs from user APIs.

### Tasks

Create route file:

```
routes/account.js
```

Attach it to:

```
/api/v1/account
```

### Expected Outcome

Account-related APIs are organized separately.

---

## Assignment 13 — Create Balance & Transfer APIs

**Goal:** Implement core payment functionality.

### Tasks

Create endpoints:

```
GET /balance
POST /transfer
```

Transfer API should:

* Verify sender balance
* Deduct amount from sender
* Add amount to receiver
* Use MongoDB transactions

### Expected Outcome

Users can send money to other users.

---

## Assignment 14 — Backend Checkpoint

**Goal:** Test the entire backend.

### Test the following features:

* Signup
* Signin
* Get balance
* Transfer money

### Tools

* Postman
* Thunder Client

### Expected Outcome

Backend payment system works end-to-end.

---

# Frontend Development

## Assignment 15 — Setup React Routing

**Goal:** Navigate between pages.

### Tasks

Install **React Router** and create routes:

```
/signup
/signin
/dashboard
```

### Expected Outcome

Users can navigate between pages.

---

## Assignment 16 — Build Signup Page

**Goal:** Create the user registration UI.

### Tasks

Create a form with fields:

* firstname
* lastname
* username
* password

Send request to:

```
POST /signup
```

### Expected Outcome

Users can register through the frontend.

---

## Assignment 17 — Build Signin Page

**Goal:** Implement login functionality.

### Tasks

* Create login form
* Send request to `/signin`
* Store JWT token in `localStorage`

### Expected Outcome

Users can log in and stay authenticated.

---

## Assignment 18 — Build Dashboard Page

**Goal:** Create the main Paytm interface.

### Features

Display:

* User balance
* List of users
* Money transfer form

### Expected Outcome

Users can view their balance and send money.

---

# Final Result

After completing all assignments, you will have built a **mini Paytm clone** with:

* User authentication (JWT)
* Wallet balance system
* Secure money transfers
* MongoDB transactions
* React frontend
* Interactive dashboard

This project demonstrates the **core architecture behind modern payment applications**.

---

# Future Improvements

Possible features to extend the project:

* Transaction history
* Payment notifications
* UPI-like usernames
* QR code payments
* Admin dashboard
* Deployment with Docker & cloud services
