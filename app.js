// Arrays of possible words for the message
const adjectives = ["amazing", "incredible", "unbelievable", "strange", "funny"];
const nouns = ["cat", "tree", "pizza", "rocket", "robot"];
const verbs = ["jumps", "flies", "runs", "dances", "sings"];

// Function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Variables to store the individual message components
let randomAdjective;
let randomNoun;
let randomVerb;

// Function to generate a random message
function generateMessage() {
    // Store each component in its respective variable
    randomAdjective = getRandomElement(adjectives);
    randomNoun = getRandomElement(nouns);
    randomVerb = getRandomElement(verbs);

    // Combine the components into a random sentence
    const randomMessage = `The ${randomAdjective} ${randomNoun} ${randomVerb} in the moonlight.`;

    // Display the message
    message.textContent = randomMessage;
}

// Get references to the button and message paragraph
const button = document.getElementById('generateBtn');
const message = document.getElementById('message');

// Attach event listener to the button
button.addEventListener('click', generateMessage);

