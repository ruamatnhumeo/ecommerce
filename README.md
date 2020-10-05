# MERN Ecommcerce

### Technologies

-   React, Redux
-   Nodejs, Express
-   MongoDB

### Features

-   Auth: Login, Register, Reset password when forget
-   Cart: Add, Delete, Checkout
-   Product: Show Category, Product detail,...
-   Search

### Installation

-   Need to create your own DB (MongoDB) and config them.
-   Make sure you set an env var for mongo_URI, sendgrid_key and the jwtSecret on deployment

```bash
#Clone project
git clone <URL>

#Go to project folder
cd ecommerce

#Install dependencies
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000

```

### Todos (next phase)

-   Adding responsive, reset CSS
-   Remove boostrap
-   Finish filter
-   Make code cleaner
-   Complete & Optimize UI

### Lessons (for me)

-   Plan code base & use UML diagram
-   Setup dependencies carefully before coding
-   Do not use UI library if it's unnecessary
-   Plan code for component with more details and flows
