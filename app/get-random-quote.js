import { quotes } from "./quotes";

export default function getRandomQuoteByTheme(tag) {
    const matchingQuotes = quotes.filter((quote) => 
      quote.tags && quote.tags.includes(tag)
    );
    
    if (matchingQuotes.length === 0) {
      return null;
    }
    
    const randomIndex = Math.floor(Math.random() * matchingQuotes.length);
    const selectedQuote = matchingQuotes[randomIndex];
    
    return {
      text: selectedQuote.quote,
      author: selectedQuote.author
    };
  };