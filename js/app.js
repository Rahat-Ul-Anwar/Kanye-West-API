const loadQuote = () => {

    fetch('https://api.kanye.rest/')
        .then(res => res.json())
    .then(data =>displayQuote(data))
    
    
}

const displayQuote = (quote) => {

    const showQuote = document.getElementById('show-quote');
    showQuote.innerText = quote.quote;
    
    console.log(quote)
}


loadQuote(); 