
# Task Management Dashboard

## Overview

The Task Management Dashboard is a React application designed to help users manage their tasks efficiently. It provides a user-friendly interface for adding, updating, and removing tasks. The application leverages Redux for state management and uses React Router for routing.

## Features

- **Task Management**: Add, update, and remove tasks.
- **Dashboard View**: View a list of tasks with options to modify or delete them.
- **Routing**: Navigate between the Dashboard and Login pages.
- **Redux**: Manage application state using Redux.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js and npm (Node Package Manager) installed. You can download and install them from [Node.js](https://nodejs.org/).

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/jimmyurl/task-management-dashboard.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd task-management-dashboard
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

### Running the Application

1. **Start the Development Server**

   ```bash
   npm start
   ```

   This command will start the development server and open the application in your default web browser at `http://localhost:3000`.

### Project Structure

- **`src/components/`**: Contains reusable React components such as `TaskList`, `TaskItem`, and `TaskForm`.
- **`src/pages/`**: Contains page components like `Dashboard` and `Login`.
- **`src/redux/`**: Contains Redux-related files:
  - **`actions/`**: Action creators for managing tasks.
  - **`reducers/`**: Reducer functions for updating the state.
  - **`store.js`**: Configures and creates the Redux store.
- **`src/styles/`**: Contains CSS styles for the application.

### Redux Setup

The application uses Redux for state management:

- **Actions**: Defined in `src/redux/actions/taskActions.js`.
- **Reducer**: Defined in `src/redux/reducers/taskReducer.js`.
- **Store**: Configured in `src/redux/store.js`.

### Routing

The application uses React Router for navigating between pages:

- **Dashboard**: `/` - The main page where tasks are managed.
- **Login**: `/login` - The login page (functionality to be implemented).

## Contributing

If you want to contribute to this project, please follow these steps:

1. **Fork the Repository**: Create your own fork of the repository.
2. **Create a Feature Branch**: Create a new branch for your feature or fix.
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Commit Your Changes**: Add and commit your changes.
   ```bash
   git add .
   git commit -m "Add your message here"
   ```
4. **Push to Your Fork**: Push your changes to your forked repository.
   ```bash
   git push origin feature/your-feature
   ```
5. **Create a Pull Request**: Open a pull request from your feature branch to the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please contact:

- **Your Name**: [jimmy.james365@gmail.com](mailto:jimmy.james365@gmail.com)

