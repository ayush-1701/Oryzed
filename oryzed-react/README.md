# Oryzed React Project

## Overview
This project is a React application for Oryzed, an AI-powered legal research platform. The application provides users with features such as legal research insights, career opportunities, and contact information.

## Project Structure
The project is organized into the following directories and files:

- **public/**: Contains static files.
  - **index.html**: The main HTML file where the React app is rendered.
  - **favicon.ico**: The favicon for the application.

- **src/**: Contains the source code for the React application.
  - **components/**: Contains React components for different sections of the application.
    - **About.jsx**: Displays information about the Oryzed platform.
    - **Careers.jsx**: Outlines career opportunities at Oryzed.
    - **Contact.jsx**: Provides contact information and a form for inquiries.
    - **Features.jsx**: Highlights the key features of the Oryzed platform.
    - **Header.jsx**: Contains the navigation bar and logo.
    - **Home.jsx**: Serves as the landing page for the application.
    - **SearchBar.jsx**: Includes a search input and button for searching legal topics.
  - **styles/**: Contains CSS styles specific to each component.
    - **About.css**
    - **Careers.css**
    - **Contact.css**
    - **Features.css**
    - **Header.css**
    - **Home.css**
    - **SearchBar.css**
  - **App.jsx**: The main application component that renders the Header and the main content based on the current route.
  - **index.js**: The entry point of the React application.
  - **index.css**: Contains global CSS styles for the application.

- **package.json**: Configuration file for npm, listing dependencies and scripts for the project.

- **.gitignore**: Specifies files and directories to be ignored by Git.

## Getting Started
To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd oryzed-react
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.