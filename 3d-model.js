// 3d-model.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const modelContainer = document.getElementById('3d-model-container');
modelContainer.appendChild(renderer.domElement);

// Load the 3D model
const loader = new THREE.GLTFLoader();
loader.load('E:\hackuem_pro\Gajju_project\cars\10-Car.gltf', (gltf) => {
  const model = gltf.scene;
  scene.add(model);
});

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}