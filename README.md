# Recipe Book Application

This is a full-stack JavaScript application that provides information about recipes. The project consists of two separate applications:

- **Backend**: A Node.js application built with Express/Nest.js and TypeScript
- **Frontend**: A React application built with TypeScript and Next.js

## Project Structure

- `/backend` - Backend application
- `/frontend` - Frontend application

## Getting Started

### Running the Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`

4. Start the development server:
   ```bash
   npm run dev
   ```

The backend server will start on port 3001.

### Running the Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`

4. Start the development server:
   ```bash
   npm run dev
   ```

The frontend application will start on port 3000.

## Development

Both applications can be run simultaneously. The frontend will communicate with the backend through the configured API endpoints.

## Environment Variables

Each application has its own `.env` file for configuration. Please refer to the individual README files in each directory for specific environment variable requirements.

## Code Quality

This project uses ESLint and Prettier for code formatting and quality control. Make sure to run the linting commands before submitting any code:

```bash
npm run lint
```

## Documentation

Please refer to the individual README files in the backend and frontend directories for specific setup and development instructions.
