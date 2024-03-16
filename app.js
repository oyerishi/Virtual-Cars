// app.js
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function showCarModels(brand) {
  const carModelsContainer = document.getElementById('car-models-container');
  carModelsContainer.innerHTML = ''; // Clear previous car models

  // Define an array of car models with images for each brand
  const carModels = {
    toyota: [
      { name: 'Camry', image: 'https://source.unsplash.com/600x400/?toyota+camry', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
      { name: 'Corolla', image: 'https://source.unsplash.com/600x400/?toyota+corolla', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
      { name: 'RAV4', image: 'https://source.unsplash.com/600x400/?toyota+rav4', features: ['Feature 1', 'Feature 2', 'Feature 3'] }
    ],
    honda: [
      { name: 'Civic', image: 'https://source.unsplash.com/600x400/?honda+civic', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
      { name: 'Accord', image: 'https://source.unsplash.com/600x400/?honda+accord', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
      { name: 'CR-V', image: 'https://source.unsplash.com/600x400/?honda+cr-v', features: ['Feature 1', 'Feature 2', 'Feature 3'] }
    ],
    ford: [
      { name: 'Mustang', image: 'https://source.unsplash.com/600x400/?ford+mustang', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
      { name: 'F-150', image: 'https://source.unsplash.com/600x400/?ford+f-150', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
      { name: 'Explorer', image: 'https://source.unsplash.com/600x400/?ford+explorer', features: ['Feature 1', 'Feature 2', 'Feature 3'] }
    ]
   
  };
  for (const model of carModels[brand]) {
    const carModelElement = document.createElement('div');
    carModelElement.className = 'car-model';
    carModelElement.innerHTML = `
      <h3>${model.name}</h3>
      <img src="${model.image}" alt="${model.name}" onclick="showCarModelDetails('${model.name}', '${model.features.join(',')}')">
      <!-- Replace with your 3D model rendering code or embed a 3D viewer -->
    `;
    carModelsContainer.appendChild(carModelElement);
  }
}

function showCarModelDetails(name) {
  switch (name) {
    case 'Porsche GT3':
      window.location.href = 'porsche-gt3.html';
      break;
    // We will add more models in the future
    default:
      break;
  }
}