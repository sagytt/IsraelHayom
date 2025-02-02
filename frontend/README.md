# My Project

This is a full-stack web application built using **Nest.js** for the backend and **Next.js** for the frontend.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Backend Setup (Nest.js)](#backend-setup-nestjs)
- [Frontend Setup (Next.js)](#frontend-setup-nextjs)
- [Scripts](#scripts)
- [License](#license)

## Technologies Used
- **Backend**: Nest.js, Mongoose (MongoDB)
- **Frontend**: Next.js, React, TailwindCSS
- **Package Managers**: npm/yarn
- **Linting & Formatting**: ESLint, Prettier
- **Testing**: Jest

## Installation

Clone the repository:
```sh
git clone https://github.com/sagytt/IsraelHayom.git
cd my-project
```

### Backend Setup (Nest.js)

1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Seed data to mongodb database:
   ```sh
   npm run seed
   ```
4. Start the development server:
   ```sh
   npm run start:dev
   ```
5. Build for production:
   ```sh
   npm run build
   ```
6. Run tests:
   ```sh
   npm run test
   ```

### Frontend Setup (Next.js)

1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Build for production:
   ```sh
   npm run build
   ```

## Scripts

### Backend (Nest.js)
- `npm run start` - Start the server
- `npm run start:dev` - Start in development mode
- `npm run build` - Build the application
- `npm run test` - Run tests

### Frontend (Next.js)
- `npm run dev` - Start Next.js in development mode
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## License
This project is licensed under the **UNLICENSED** license.

