# Polaris-quote-engine
This is merely intended to make my life easier, providing me with a centralised quote location.

It's not intended for anyone else to use, but feel free if you really want to, I guess.

# "Docs"
If you could call them that.

This module exports a function. Run it to get a random quote.
This function also has a method `getQuote`. I don't know why you'd want to use this, but you can.
This function also has a property of `quotes` which is the array of quotes.

### Example
```JS
const quoteEngine = require("polaris-quote-engine");
const aQuote = quoteEngine();

const anotherQuote = quoteEngine.getQuote(); // Does the same as above. 

const quoteList = quoteEngine.quotes // Woot. An array of all quotes.

```

### What is a quote?
A quote as provided by this module is an array.
The first element will be the quote text, and the second the author.
#### Example
```JSON
[
"Well done is better than well said.",
 "Benjamin Franklin"
]
```