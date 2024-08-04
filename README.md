# Express-TypeScript-MongoDB Starter Template

This is a starter template for creating a Node.js and Express application using TypeScript and MongoDB. It includes basic setup and structure for building a scalable and maintainable application.

## Project Structure

```go
├── nodemon.json
├── package.json
├── package-lock.json
├── src
│   ├── index.ts
│   ├── models
│   │   └── User.ts
│   └── server.ts
└── tsconfig.json
```

## Getting Started

**Prerequisites**

- Node.js installed
- Yarn or npm installed

### 1. Installation

```bash
git clone https://github.com/mhdZhHan/express-typescript-starter
cd express-typescript-starter
```

### 2. Install dependencies:

```bash
yarn install
# or
npm install
```

### 3. Create a `.env` file in the root directory with your database URL and secret key:

```env
DATABASE_URL="<your-database-url>"
SECRET_KEY="hello_world!"
```

## Running the Project

### Development

To run the project in development mode with live reloading:

```bash
yarn dev
# or
npm run dev
```

### Production

To build and run the project in production mode:

```bash
yarn build
yarn start
# or
npm run build
npm start
```

## Database Connection

The `src/server.ts` file contains the logic for connecting to a MongoDB database using Mongoose. It reads the database URL and server port from environment variables.
