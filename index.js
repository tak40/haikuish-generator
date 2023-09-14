const line1_5syllables = [
    "Code runs line by line,",
    "JavaScript in flow,",
    "Variables hold truth,",
    "Functions start to grow,",
    "Arrays store the lists,",
    "Loops spin round and round,",
    "Async code awaits,",
    "Objects all around,",
    "Events start the game,",
    "Promises to keep,"
];

const line2_7syllables = [
    "Console logs the journey's path,",
    "Callbacks in the deep stack trace,",
    "Errors pop, but we debug,",
    "Frameworks guide our every step,",
    "Nodes connect in server's song,",
    "With every click, events fire,",
    "DOM is changed, the page is new,",
    "From ES6, new paths emerge,",
    "APIs call data forth,",
    "Closure wraps its arms tight,"
];

const line3_5syllables = [
    "Endless code delight.",
    "Scripts all intertwine.",
    "Browsers light the way,",
    "Code’s dance is so fine.",
    "Web's vast tapestry,",
    "Testing code's true might,",
    "A bug meets its end,",
    "NPM shines bright,",
    "Linters keep us straight,",
    "Syntax colors life."
];

// Function to get a random item from an array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate a haiku
function generateHaiku() {
    const line1 = getRandomItem(line1_5syllables);
    const line2 = getRandomItem(line2_7syllables);
    const line3 = getRandomItem(line3_5syllables);

    return `${line1}\n${line2}\n${line3}`;
}

// Get button and display elements from the DOM
const generateBtn = document.getElementById('generateHaikuBtn');
const haikuDisplay = document.getElementById('haikuDisplay');

// Add click event listener to the button
generateBtn.addEventListener('click', function() {
    const haiku = generateHaiku();
    haikuDisplay.textContent = haiku;
});
