# Accommodation Booking React Project

This project is a React-based web application that provides a platform for listing and booking accommodations. It includes features such as property listing, image galleries, booking interfaces, and host information displays.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)

## Features

- Responsive design for various screen sizes
- Property listing with detailed information
- Image gallery with multiple views
- Booking interface with date picker
- Host information display
- Amenities list
- Review system (placeholder)

## Technologies Used

- React.js
- Vite (for build tooling)
- React Router (for routing)
- Axios (for API requests)
- Lucide React (for icons)
- Styled Components (for styling)
- Font Awesome (for additional icons)

## Setup

To set up this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/accommodation-booking-react.git
   ```

2. Navigate to the project directory:
   ```
   cd accommodation-booking-react
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `config.json` file in the root directory with the following content:
   ```json
   {
     "hotelBasePath": "/hotel"
   }
   ```

## Running the Application

To run the application in development mode:

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and visit `http://localhost:5173` (or the port specified by Vite).

To build the application for production:

1. Run the build command:
   ```
   npm run build
   ```

2. The built files will be in the `dist` directory, which you can then deploy to your hosting service.

## Project Structure

- `src/`: Source files
  - `components/`: React components
  - `App.jsx`: Main application component
  - `main.jsx`: Entry point of the application
- `public/`: Public assets
- `vite.config.js`: Vite configuration
- `package.json`: Project dependencies and scripts
