const { quotes } = require("./quotes");


function getQuote() {
    const roll = getRandomIntInclusive(0, quotes.length);
    const quote = quotes[roll];
    if (!quote[1]) {
        quote[1] = "Unknown"
    }
    return quote
}

module.exports = getQuote;
module.exports.getQuote = getQuote;
module.exports.quotes = quotes;


function getRandomIntInclusive (min, max) {
    return Math.floor(Math.random() * max);
}