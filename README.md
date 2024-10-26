# Image Stock App

Welcome to the Image Stock App! 🎉 This project allows you to upload images to Firebase, view your uploaded images, and ensure that only logged-in users can upload. Let’s get you set up and ready to start uploading!

## 🚀 Getting Started

This project was built using **Create React App** and incorporates several technologies:

- **Zustand** for state management (the one truth component).
- **Tailwind CSS** for styling.
- **Firebase** for the database, authentication, and hosting.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- A Firebase project set up in the [Firebase Console](https://console.firebase.google.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lolaakinrinsola/ImageStock.git
   cd imageStock

### Install the dependencies

2. Clone the repository:
   ```bash
   npm install

### Set up Firebase
3. Create a firebase project
    ```bash
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id

### Running the App
4. To start the app in development mode, run:
    ```bash
    npm start


Now open **http://localhost:3000** in your browser. You’ll see the app, and any changes you make will automatically reload!

### Set up Firebase

1. **Create a Firebase project.**
2. **Enable Firebase Authentication (email/password).**
3. **Set up Cloud Storage for your images.**
4. **Configure your Firebase settings in the app.**

## 🎨 Styling with Tailwind CSS

Tailwind CSS is used throughout the app for styling. Feel free to customize the styles in the `tailwind.config.js` file to match your design preferences!

## 🛠️ Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Launches the test runner.
- **`npm run build`**: Builds the app for production.
- **`npm run eject`**: Ejects the configuration if you need more control (use with caution!).

## 📚 Learn More

To dive deeper into the technologies used:

- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)

If you have any questions or need help, feel free to reach out!

Happy coding! 😊

