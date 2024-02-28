

// let apiQuotes = [];

//  Show ne quote




function newQuote() {
    //  Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote)
}


// // Get Quotes from API

// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes'

//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         //  Catch error (In production you cast an alert with the error message)
//     }


// }


// //  On load

// getQuotes();

// get quotes from local quotes.js
newQuote();