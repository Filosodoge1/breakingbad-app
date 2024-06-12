


const fetchQuote = async() => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/5');
    const data = await res.json();
    console.log(data);
    return data;
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

    const renderQuote = (data, c1, c2) => {
        quoteLabel.innerHTML = `${data[c1].quote} / ${data[c2].quote}`;
        authoLabel.innerHTML = `${data[c1].author} / ${data[c2].author}`;
        element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton);   
    }

    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = '...Loading';
        // const quote = await fetchQuote();
        // renderQuote(quote);
        fetchQuote()
            .then((data) => renderQuote(data,0,1));
    });
    
    fetchQuote()
    .then((data) => renderQuote(data, 0, 1));
    
    // setTimeout(async() => {
    //     const datoReturned = await fetchQuote();
    //     element.innerHTML = 'Información Encontrada';
    // }, 1000);
}