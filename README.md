# Dog Adoption Page

Welcome to the Dog Adoption Page! This web application allows users to browse through random dog images, select their favorite breeds, and save them for later viewing.

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
   - The application communicates with 2 external API to get dog images, store user favorites and retrieve user favorites.

## Technologies Used

- JavaScript (ES6+)
- HTML
- CSS
- Fetch API

## Usage

1. **Random Dog Images**: Simply scroll through the page to view random dog images. Click on any image you like to add it to your favorites.

2. **Breed Selection**: Use the dropdown menu to select a specific dog breed. Click on the "Get Breeds" button to fetch images of the selected breed.

3. **Favorites**: Click on the images you like to add them to your favorites. Click on the "Get My Favorites" button to save your favorites to the API.

## Setup

To run the Dog Adoption Page locally:

1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Enjoy browsing through random dog images and saving your favorites!

## Project Requirements

1. **Use of External API (20%)**: The Fetch API is used to communicate with the The Dog API to get images of dogs for the landing page and for select breeds.

2. **User Interaction with API (15%)**: Users interact with the API by selecting a breed that they want to see more pictures of and the program fetches the breed images from the API.

3. **User Data Manipulation (15%)**: Users can selecte their favorite images and have their list saved to the API.

4. **Promises and async/await (15%)**: Promises and async/await syntax are used appropriately throughout the codebase.

5. **Modular Code Organization (3%)**: This feature is not completed in this project.

6. **JavaScript Event Loop Handling (5%)**: The program runs as expected without any undesired behavior caused by misunderstanding of the JavaScript event loop.

7. **Engaging User Experience (5%)**: An engaging user experience is created through HTML and CSS styling.

8. **Error Handling (10%)**: The program runs without errors. Future improvements and non-functiioning components are commented out and blockers are explained in the codebase.

9. **Git Repository Management (5%)**: Commits were made frequently to the git repository.

10. **README File (2%)**: This README file provides a thorough description of the application and it's uses.

11. **Creativity and Presentation (5%)**: The level of effort is displayed in the overall creativity, presentation and use experience.


## Dependencies

- This project relies on the Fetch API for making HTTP requests.
- This project utilizes 2 API's mentioned below.

## Credits

- Dog images are fetched from [Dog CEO's Dog API](https://dog.ceo/dog-api/)
- The JSON Store API is provided by [RapidAPI JSON Store](https://rapidapi.com/apikite/api/json-store/)
- Fonts provided by [Google Fonts](https://fonts.google.com/)
- Color Palette Provided by [Coolors](https://coolors.co/)
