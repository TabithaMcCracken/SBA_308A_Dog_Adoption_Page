# Dog Adoption Page

Welcome to the Dog Adoption Page! This web application allows users to browse through random dog images, select their favorite breeds, and save them for later viewing. Additionally, users can retrieve their saved favorites from an API.

## Features

### 1. Random Dog Images
   - Upon loading the page, users are presented with a selection of random dog images.
   - Users can click on any image to add it to their list of favorites.

### 2. Breed Selection
   - Users can choose specific dog breeds from a dropdown menu.
   - Clicking on the "Get Breeds" button fetches images of the selected breed.

### 3. Favorites
   - Users can save their favorite dog images by clicking on them.
   - Duplicate favorites are automatically filtered out.
   - Clicking on the "Get My Favorites" button saves the favorites to an API.

### 4. API Integration
   - The application communicates with an external API to store and retrieve user favorites.
   - RapidAPI is used for API communication.

## Technologies Used

- HTML
- CSS
- JavaScript (ES6+)
- Fetch API

## Usage

1. **Random Dog Images**: Simply scroll through the page to view random dog images. Click on any image you like to add it to your favorites.

2. **Breed Selection**: Use the dropdown menu to select a specific dog breed. Click on the "Get Breeds" button to fetch images of the selected breed.

3. **Favorites**: Click on the images you like to add them to your favorites. Click on the "Get My Favorites" button to save your favorites to the API.

## API Details

The application interacts with the JSON Store API provided by RapidAPI. This API allows users to store and retrieve their favorite dog images.

## Setup

To run the Dog Adoption Page locally:

1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Enjoy browsing through random dog images and saving your favorites!

## Requirements

1. **Use of External API (20%)**: The Fetch API is used in the `functions.js` file to communicate with the CoinGecko API and retrieve cryptocurrency data.

2. **User Interaction with API (15%)**: User interaction with the API is implemented in the `script.js` file. The search feature allows users to interact with the API through GET requests to retrieve associated data.

3. **User Data Manipulation (15%)**: Data manipulation within the API is enabled through the use of POST requests in the `postFunctions.js` file. Users can save and delete favorite cryptocurrencies.

4. **Promises and async/await (15%)**: Promises and async/await syntax are used appropriately throughout the codebase, such as in the `functions.js` file when fetching data asynchronously from the API.

5. **Modular Code Organization (3%)**: The JavaScript code is organized into multiple module files (`functions.js`, `auxFunct.js`, `postFunctions.js`) and functions and data are imported/exported across files as necessary.

6. **JavaScript Event Loop Handling (5%)**: The program runs as expected without any undesired behavior caused by misunderstanding of the JavaScript event loop. Asynchronous operations are handled appropriately, ensuring API calls are processed in the correct order.

7. **Engaging User Experience (5%)**: The user experience is enhanced through HTML and CSS styling, providing an intuitive and visually appealing interface.

8. **Error Handling (10%)**: The program runs without errors. Non-functional components are commented out and blockers are explained in the codebase. (See postFunctions.js)

9. **Git Repository Management (5%)**: Frequent commits are made to the git repository, ensuring version control and collaboration.

10. **README File (2%)**: This README file provides a comprehensive description of the application, including setup instructions, features, and technologies used.

11. **Creativity and Presentation (5%)**: The application displays creativity and effort in its design, presentation, and user experience.


## Dependencies

- This project relies on the Fetch API for making HTTP requests.
- It also utilizes RapidAPI for interacting with the JSON Store API.

## Credits

- Dog images are fetched from [Dog CEO's Dog API](https://dog.ceo/dog-api/).
- The JSON Store API is provided by [RapidAPI](https://rapidapi.com/).
