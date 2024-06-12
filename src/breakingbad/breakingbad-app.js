


const fetchQuote = async() => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/5');
    const data = await res.json();
    console.log(data[0]);
    return data[0];
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = ( element ) => {
    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    element.innerHTML = '...Loading';

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton);   
    }

    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = '...Loading';
        const quote = await fetchQuote();
        renderQuote(quote);
        // fetchQuote()
        //     .then((data) => renderQuote(data));
    });
    
    fetchQuote()
    .then((data) => renderQuote(data));
    
    // setTimeout(async() => {
    //     const datoReturned = await fetchQuote();
    //     element.innerHTML = 'Información Encontrada';
    // }, 1000);
}