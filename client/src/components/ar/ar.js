const AR = require('aframe');

const scene = document.querySelector('a-scene');

const model = document.createElement('a-entity');
model.setAttribute('gltf-model', 'odels/tesla.gltf');
model.setAttribute('scale', '0.5 0.5 0.5');
model.setAttribute('position', '0 0 -5');
scene.appendChild(model);
