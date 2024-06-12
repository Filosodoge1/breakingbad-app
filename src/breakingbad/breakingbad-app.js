


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
    setTimeout(async() => {
        const datoReturned = await fetchQuote();
        element.innerHTML = 'Información Encontrada';
    }, 1000);
}