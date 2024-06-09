const AFRAME = require('aframe');

const scene = document.querySelector('a-scene');

const trainingModel = document.createElement('a-entity');
trainingModel.setAttribute('gltf-model', 'odels/training.gltf');
trainingModel.setAttribute('scale', '0.5 0.5 0.5');
trainingModel.setAttribute('position', '0 0 -5');
scene.appendChild(trainingModel);

const trainingScript = document.createElement('script');
trainingScript.setAttribute('src', 'training-script.js');
scene.appendChild(trainingScript);
