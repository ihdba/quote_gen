

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');



// let apiQuotes = [];


//  Loading Spinner Show 
function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// Remove Loading Spinner
function removeLoadingSpinner() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}


//  Show the quote
function newQuote() {
    showLoadingSpinner();
    //  Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    // Check if author field is empty and replace with default value
    if (!quote.author){
        quote.author = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Check quote length to set dynamically right css style
    if (quote.text.length > 50){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    // Set the quote, Hide the Loader
    removeLoadingSpinner();
    
    quoteText.textContent = quote.text;

    // Set focus on "New Quote" button so bypressing Enter we get new quote as well
    newQuoteBtn.focus();
}




// Get Quotes from API

async function getQuotes() {
    showLoadingSpinner();
    const apiUrl = 'https://type.fit/api/quotes'

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
        throw new Error('oops');
    } catch (error) {
        //  Catch error (In production you cast an alert with the error message)
        console.log(error)
        getQuotes(); // use recursive to display newquote instead of displaing error
    }


}






// Tweet quote

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listener
// If getting from local quote json file
// newQuoteBtn.addEventListener('click', newQuote);
// For getting quotes form API
newQuoteBtn.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click', tweetQuote);

// On Load get quotes from local quotes.js

//newQuote();




// //  On load get from API

//getQuotes();

