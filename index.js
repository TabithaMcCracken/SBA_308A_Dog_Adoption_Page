const count = 6;
let favorites = [];
let retrievedFavoritesData = null;

document.addEventListener("DOMContentLoaded", function () {
 const dogImagesRow = document.getElementById("dogImages");
 const breedSelect = document.getElementById("breedSelect");
 const getBreedsBtn = document.getElementById("getBreedsBtn");


 fetchDogImages(count);
 // Get dog images
 function fetchDogImages(count) {
   for (let i = 0; i < count; i++) {
     fetch("https://dog.ceo/api/breeds/image/random")
       .then((response) => response.json())
       .then((data) => {
         const imageUrl = data.message;
         createDogCard(imageUrl);
       })
       .catch((error) => console.error("Error fetching dog images:", error));
   }
 }

 function createDogCard(imageUrl) {
   const card = document.createElement("div");
   card.classList.add("dog-card", "col-md-3", "mb-3");


   const imageContainer = document.createElement("div");
   imageContainer.classList.add("image-container");


   const image = document.createElement("img");
   image.src = imageUrl;
   image.classList.add("img-fluid", "rounded");
   imageContainer.appendChild(image);


   card.appendChild(imageContainer);


   dogImagesRow.appendChild(card);


   dogImagesRow.addEventListener("click", function (event) {
     const target = event.target;
     // Check if the click target is an image
     if (target.tagName === "IMG") {
       const imageUrl = target.src;


       // Check if the image is already in favorites
       const isDuplicate = favorites.some((fav) => fav.imageUrl === imageUrl);
       if (!isDuplicate) {
         favorites.push(imageUrl); // Add the image to favorites
       } else {
         console.log("Image already in favorites:", imageUrl);
       }
     }
   });
 }


 // Populate breeds dropdown
 fetch("https://dog.ceo/api/breeds/list/all")
   .then((response) => response.json())
   .then((data) => {
     const breeds = data.message;
     for (const breed in breeds) {
       const option = document.createElement("option");
       option.value = breed;
       option.textContent = breed;
       breedSelect.appendChild(option);
     }
   })
   .catch((error) => console.error("Error fetching breeds:", error));


 // Event listener for Get Breeds button
 getBreedsBtn.addEventListener("click", async function () {
   const selectedBreed = breedSelect.value;
   console.log("Breed Selected: ", selectedBreed);
   if (!selectedBreed || selectedBreed === "Select a breed") {
     console.log("Nothing selected");
     alert("Please select a breed!");
     return;
   }


   await fetchBreedImages(selectedBreed);
 });


 // Function to fetch images for a specific breed
 async function fetchBreedImages(breed) {
   try {
     const apiUrl = `https://dog.ceo/api/breed/${breed}/images`;
     const response = await fetch(apiUrl);
     const data = await response.json();
     console.log("API Response: ", data.message);
     const images = data.message.slice(0, count); // Limit images


     // Clear existing images
     dogImagesRow.innerHTML = "";


     // Create and append cards for each image
     images.forEach((imageUrl) => {
       createDogCard(imageUrl);
     });
   } catch (error) {
     console.error(`Error fetching images for ${breed}:`, error);
   }
 }


 function removeDuplicateFavorites() {
   favorites = favorites.filter((value, index, self) => {
     return self.indexOf(value) === index;
   });
 }


 // Function to send favorites to API
 async function sendFavoritesToAPI() {
   const url = "https://json-store.p.rapidapi.com/";
   const options = {
     method: "PUT",
     headers: {
       "content-type": "application/json",
       "X-RapidAPI-Key": "cc1995ebfbmshf6c9f82537bbda9p1e8ac5jsn618ca0946a38",
       "X-RapidAPI-Host": "json-store.p.rapidapi.com",
     },
     body: JSON.stringify({
       name: "DogFavorites",
       document: { favorites }, // Send the favorites array as the document
     }),
   };


   try {
     const response = await fetch(url, options);
     if (response.ok) {
       alert("Your favorites were saved successfully!");
     }
     const result = await response.text();
     console.log('Response status:', response.status); // Print response status- looks good
     console.log('Response:', result); // Print response body- looks good
     const id = result.id;
     return id;

   } catch (error) {
     console.error(error);
     alert("Failed to send favorites. Please try again later.");
     return null;
   }
 }


 // Function to retrieve data from API
 async function getDataFromAPI(id) {
   const url = `https://json-store.p.rapidapi.com/${id}`;
   const options = {
     method: "GET",
     headers: {
       "X-RapidAPI-Key": "cc1995ebfbmshf6c9f82537bbda9p1e8ac5jsn618ca0946a38",
       "X-RapidAPI-Host": "json-store.p.rapidapi.com",
     },
   };


   try {
     const response = await fetch(url, options);
     if (!response.ok) {
       throw new Error("Failed to retrieve data from API");
     }
     const result = await response.text();
     console.log("Retrieved Data: ", result);
     retrievedFavoritesData = result; // Put data in a variable
     return result; // Return the retrieved data
   } catch (error) {
     console.error(error);
     return null; // Return null in case of error
   }
 }


 // Event listener for Get My Favorites button
 const favoritesBtn = document.getElementById("favoritesBtn");
 favoritesBtn.addEventListener("click", async function () {
   // Remove duplicates from favorites
   removeDuplicateFavorites();
   console.log("Favorites:", favorites);


   // Send favorites to API
   const id = await sendFavoritesToAPI();

    // The next step is to get data from the API and show the pics of each dog that was saved to the API
   //Retrieve data from the API using the ID
  //  if (id) {
  //    await getDataFromAPI(id);
  //  } else {
  //    console.log("Failed to send favorites to API. Skipping data retrieval.");
  //  }
 });
});



