const tf = require('@tensorflow/tfjs');

const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
model.add(tf.layers.dense({ units: 1 }));
model.compile({ optimizer: tf.optimizers.adam(), loss: 'eanSquaredError' });

const trainingData = [
  { x: 1, y: 2 },
  { x: 2, y: 4 },
  { x: 3, y: 6 },
  //...
];

model.fit(trainingData, { epochs: 100 });

const inputData = [4];
const output = model.predict(inputData);
console.log(`Predicted value => ${output}`);
