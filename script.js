// Array of motivational quotes
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. – William James"
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Display random quote on the webpage
function displayRandomQuote() {
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = getRandomQuote();
}

// Call the function on page load
window.onload = function() {
    displayRandomQuote();
};

// Optional: Button to change the quote when clicked
document.getElementById("new-quote-button").addEventListener("click", displayRandomQuote);
