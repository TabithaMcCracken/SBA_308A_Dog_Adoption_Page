const count = 8;

document.addEventListener("DOMContentLoaded", function () {
  const dogImagesRow = document.getElementById("dogImages");
  const breedSelect = document.getElementById("breedSelect");
  const getBreedImagesBtn = document.getElementById("getBreedImagesBtn");


  fetchDogImages(count);

  function fetchDogImages(count) {
    for (let i = 0; i < count; i++) {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
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

  // Event listener for Get Images button
  getBreedImagesBtn.addEventListener("click", async function () {
    const selectedBreed = breedSelect.value;
    console.log("Breed Selected: ", selectedBreed);
    if (!selectedBreed || selectedBreed === "Select a breed") {
      console.log("Nothing selected");
      alert('Please select a breed!');
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
    const images = data.message.slice(0, count); // Limit to 8 images

    // Clear existing images
    dogImagesRow.innerHTML = '';

    // Create and append cards for each image
    images.forEach(imageUrl => {
      createDogCard(imageUrl);
    });
  } catch (error) {
    console.error(`Error fetching images for ${breed}:`, error);
  }
}

});
