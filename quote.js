fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((jsonResponse) => {
    // Get the quote block element from the DOM
    const quoteBlock = document.querySelector(".quote-block");
    
    // Update the content of the quote text and author elements with the fetched data
    const quoteText = quoteBlock.querySelector(".quote-text");
    const quoteAuthor = quoteBlock.querySelector(".quote-author");
    quoteText.textContent = jsonResponse.content;
    quoteAuthor.textContent = "- " + jsonResponse.author;
  });