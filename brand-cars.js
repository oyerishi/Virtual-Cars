// brand-cars.js
const urlParams = new URLSearchParams(window.location.search);
const brandName = decodeURIComponent(urlParams.get('brand'));

const brandNameElement = document.getElementById('brand-name');
const carModelsContainer = document.querySelector('.car-models-container');

brandNameElement.textContent = brandName;

// Define an array of car models for each brand
const carModels = {
  Toyota: [
    { name: 'Camry', image: 'https://source.unsplash.com/600x400/?toyota+camry' },
    { name: 'Corolla', image: 'https://source.unsplash.com/600x400/?toyota+corolla' },
    { name: 'RAV4', image: 'https://source.unsplash.com/600x400/?toyota+rav4' },
    { name: 'Highlander', image: 'https://source.unsplash.com/600x400/?toyota+highlander' },
    { name: 'Tacoma', image: 'https://source.unsplash.com/600x400/?toyota+tacoma' }
  ],
  Honda: [
    { name: 'Civic', image: 'https://source.unsplash.com/600x400/?honda+civic' },
    { name: 'Accord', image: 'https://source.unsplash.com/600x400/?honda+accord' },
    { name: 'CR-V', image: 'https://source.unsplash.com/600x400/?honda+cr-v' },
    { name: 'Pilot', image: 'https://source.unsplash.com/600x400/?honda+pilot' },
    { name: 'Odyssey', image: 'https://source.unsplash.com/600x400/?honda+odyssey' }
  ],
  Ford: [
    { name: 'Mustang', image: 'https://source.unsplash.com/600x400/?ford+mustang' },
    { name: 'F-150', image: 'https://source.unsplash.com/600x400/?ford+f-150' },
    { name: 'Explorer', image: 'https://source.unsplash.com/600x400/?ford+explorer' },
    { name: 'Escape', image: 'https://source.unsplash.com/600x400/?ford+escape' },
    { name: 'Ranger', image: 'https://source.unsplash.com/600x400/?ford+ranger' }
  ]
  // Add more car brands and models as needed
};

// Create and append car model elements to the container
for (const model of carModels[brandName]) {
  const carModelElement = document.createElement('div');
  carModelElement.className = 'car-model';
  carModelElement.innerHTML = `
    <img src="${model.image}" alt="${model.name}">
    <h3>${model.name}</h3>
  `;
  carModelElement.addEventListener('click', () => {
    showCarModelDetails(model.name);
  });
  carModelsContainer.appendChild(carModelElement);
}