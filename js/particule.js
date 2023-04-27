// Initialize Three.js
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the particles
var particles = new THREE.Group();
var sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
var cubeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
var tetrahedronGeometry = new THREE.TetrahedronGeometry(0.1);
for (var i = 0; i < 1000; i++) {
  var particle;
  var rand = Math.random();
  if (rand < 0.33) {
    particle = new THREE.Mesh(sphereGeometry, new THREE.MeshLambertMaterial({ color: 0xff0000 }));
  } else if (rand < 0.67) {
    particle = new THREE.Mesh(cubeGeometry, new THREE.MeshLambertMaterial({ color: 0x00ff00 }));
  } else {
    particle = new THREE.Mesh(tetrahedronGeometry, new THREE.MeshLambertMaterial({ color: 0x0000ff }));
  }
  particle.position.x = (Math.random() - 0.5) * 10;
  particle.position.y = (Math.random() - 0.5) * 10;
  particle.position.z = (Math.random() - 0.5) * 10;
  particle.velocity = new THREE.Vector3((Math.random() - 0.5) / 10, (Math.random() - 0.5) / 10, (Math.random() - 0.5) / 10);
  particles.add(particle);
}
scene.add(particles);

// Add lighting
var pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(0, 0, 0);
scene.add(pointLight);

// Rotate the camera
var clock = new THREE.Clock();
function rotateCamera() {
  var elapsedTime = clock.getElapsedTime();
  camera.position.x = 5 * Math.sin(elapsedTime / 5);
  camera.position.y = 2.5 * Math.sin(elapsedTime / 5);
  camera.position.z = 5 * Math.cos(elapsedTime / 5);
  camera.lookAt(scene.position);
}

// Render the scene
function render() {
  requestAnimationFrame(render);
  particles.children.forEach(function (particle) {
    particle.position.add(particle.velocity);
    if (particle.position.x < -10) {
      particle.position.x = 10;
    } else if (particle.position.x > 10) {
      particle.position.x = -10;
    }
    if (particle.position.y < -10) {
      particle.position.y = 10;
    } else if (particle.position.y > 10) {
      particle.position.y = -10;
    }
    if (particle.position.z < -10) {
      particle.position.z = 10;
    } else if (particle.position.z > 10) {
      particle.position.z = -10;
    }
  });
  rotateCamera();
  renderer.render(scene, camera);
}
render();
