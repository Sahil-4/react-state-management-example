# React State Management Example App

This is a simple React application demonstrating state management using the `useState` hook. The app fetches user data from an external API, allows users to filter the data based on different subscription plans, and displays the filtered results.

## Getting Started

### Prerequisites

1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
2. You know about React JS
3. You know how to make API calls
4. How to create simple components and pass props

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Sahil-4/react-state-management-example.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-state-management-example
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

To run the app locally, use the following command:

```bash
npm run dev
```

This will start the development server. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Build for Production

To build the app for production, use:

```bash
npm run build
```

## Project Structure

- **src/**: Contains the source code for the React app.
  - **Components/**: Reusable React components.
  - **API/index.js**: Functions for fetching data from an external API.
  - **App.jsx**: Main component orchestrating state and rendering other components.
  - **Navbar.jsx**: Navigation bar component.
  - **List.jsx**: Component for displaying a list of user profiles.
  - **Profile.jsx**: Component for an individual user profile.
- **style.css**: Global styles for the application.
- **index.html**: HTML file serving as the entry point for the app.
- **package.json**: Project metadata and dependencies.
- **README.md**: Project documentation.

## Technologies Used

- React
- Vite (for development)
- ESLint (for linting)

## Acknowledgments

This project is a simple example for educational purposes. Feel free to use it as a starting point for your own projects and explore further enhancements and concepts related to React state management.
