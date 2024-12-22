// Arrays of possible words for the message
const adjectives = ["amazing", "incredible", "unbelievable", "strange", "funny"];
const nouns = ["cat", "tree", "pizza", "rocket", "robot"];
const verbs = ["jumps", "flies", "runs", "dances", "sings"];

// Get references to the button and message paragraph
const button = document.getElementById('generateBtn');
const message = document.getElementById('message');

// Function to generate a random message
function generateMessage() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];

    // Combine the pieces of data into a random sentence
    const randomMessage = `The ${randomAdjective} ${randomNoun} ${randomVerb} in the moonlight.`;

    // Display the message
    message.textContent = randomMessage;
}

// Attach event listener to the button
button.addEventListener('click', generateMessage);
