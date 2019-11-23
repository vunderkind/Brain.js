const brain = require('brain.js');

const network = new brain.NeuralNetwork({hiddenLayers: [3]});

const trainingData = [
    {input: [0,0,0], output: [0]},
    {input: [0,0,1], output: [0]},
    {input: [0,1,1], output: [0]},
    {input: [1,0,1], output: [1]},
    {input: [1,1,1], output: [1]}
];

network.train(trainingData, {
    log: (error) => console.log(error),
    logPeriod: 100
});

const result = network.run([1,0,0]);

console.log(`Prob: ${result}`)