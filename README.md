# Expense Tracker

An intuitive web application for tracking your daily expenses. Built using React and Firebase, this app allows users to add, view, and delete items, while also calculating the total cost of the items.

## Features

- **Add Items**: Users can add new items with a name and price.
- **View Items**: The list of items is fetched from Firebase and displayed in real-time.
- **Delete Items**: Users can remove items from the list.
- **Calculate Total**: The app automatically calculates the total cost of the items.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hasanul-banna-himel/expense-tracker.git
   cd expense-tracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your Firebase project and copy the configuration settings.
   - Replace the Firebase configuration in the `firebase.js` file with your project's config.

4. **Start the application**:
   ```bash
   npm start
   ```

## Usage

- **Adding Items**: Enter the name and price of the item in the input fields and click 'Add'.
- **Viewing Items**: The items will be displayed in a list below the input form.
- **Deleting Items**: Click the 'X' button next to an item to remove it from the list.
- **Total Calculation**: The total cost of the items is displayed at the bottom.

## Code Overview

- **Home.js**: The main component that handles the UI and logic for the Expense Tracker.
- **firebase.js**: Firebase configuration and initialization.
- **App.css**: Basic styling for the application.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Firebase Firestore**: NoSQL database for storing items.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Additional Information

- **Responsive Design**: The application is designed to be responsive and works well on both desktop and mobile devices.
- **Real-time Updates**: Leveraging Firebase's real-time capabilities, any changes to the items are instantly reflected in the UI.
- **Security Rules**: Ensure to set appropriate security rules in Firebase Firestore to protect your data.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

Special thanks to the creators of the tools and libraries used in this project.
```
