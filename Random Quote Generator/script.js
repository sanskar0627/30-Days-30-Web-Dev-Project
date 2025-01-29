const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis"
];

const quoteText = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.style.opacity = 0;  
    setTimeout(() => {
        quoteText.textContent = quotes[randomIndex];
        quoteText.style.opacity = 1;
    }, 300);
});
