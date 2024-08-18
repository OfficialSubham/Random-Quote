getQuote();

async function getQuote() {
    let mainNum = randomNumGenerator();

    let quote = await fetch(`https://dummyjson.com/quotes/${mainNum}`);
    let quoteData = await quote.json();

    console.log(quoteData);
    document.querySelector(".js-quote")
        .innerText = quoteData.quote
    document.querySelector(".js-writer")
        .innerText = quoteData.author
}

function randomNumGenerator() {
    let randomNum1 = Math.round(Math.random() * 100);
    let randomNum2 = Math.round(Math.random() * 100);
        
    if(randomNum1 * randomNum2 <= 1454){
        let mainNum = randomNum1 * randomNum2;
        return mainNum;
    }
    else{
        let mainNum = randomNumGenerator();
        return mainNum
    }

}