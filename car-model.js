// car-model.js
const urlParams = new URLSearchParams(window.location.search);
const carModelName = decodeURIComponent(urlParams.get('name'));

const carModelNameElement = document.getElementById('car-model-name');
const carModelFeaturesElement = document.getElementById('car-model-features');
const view3DModelButton = document.getElementById('view-3d-model');

// Fetch car model details from the server
fetch('/api/cars')
  .then(response => response.json())
  .then(data => {
    const carBrands = Object.keys(data);
    let carModelDetails;

    // Find the car model details in the fetched data
    for (const brand of carBrands) {
      const carModels = data[brand];
      carModelDetails = carModels.find(model => model.name === carModelName);
      if (carModelDetails) break;
    }

    if (carModelDetails) {
      carModelNameElement.textContent = carModelDetails.name;

      // Clear previous features
      carModelFeaturesElement.innerHTML = '';

      carModelDetails.features.forEach(feature => {
        const featureElement = document.createElement('li');
        featureElement.textContent = feature;
        carModelFeaturesElement.appendChild(featureElement);
      });
    } else {
      console.error('Car model details not found');
    }
  })
  .catch(error => {
    console.error('Error fetching car data:', error);
  });

view3DModelButton.addEventListener('click', () => {
  // Show the 3D model container
  const modelContainer = document.getElementById('3d-model-container');
  modelContainer.style.display = 'block';

  // Call the animate function from 3d-model.js
  animate();
});