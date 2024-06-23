// VARIABLES

let btn = document.querySelector('#new-quote');
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{
    quote: `"Success is not final, failure is not fatal: It is the 
    courage to continue that counts."`,
    person: ` Winston Churchill`
}, {
    quote: `"The best way to predict the future is to create it."`,
    person: ` Peter Drucker`
}, {
    quote: `"Don't watch the clock; do what it does. Keep going."`,
    person: ` Sam Levenson`
}, {
    quote: `"The secret of getting ahead is getting started."`,
    person: `  Mark Twain`
}, {
    quote: `It does not matter how slowly you go as long as you do not stop."`,
    person: ` Confucius`
}, {
    quote: `"Your time is limited, so don't waste it living someone else's life."`,
    person: ` Steve Jobs`
}, {
    quote: `"You miss 100% of the shots you don't take."`,
    person: ` Wayne Gretzky`
}, {
    quote: `"Whether you think you can or you think you can't, you're right."`,
    person: ` Henry Ford`
}, {
    quote: `"The only limit to our realization of tomorrow is our doubts of today."`,
    person: ` Franklin D. Roosevelt`
}, {
    quote: `"Believe you can and you're halfway there."`,
    person: ` Theodore Roosevelt`
}];


btn.addEventListener("click", function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})