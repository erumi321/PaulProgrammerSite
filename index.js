const getNewQuote = async () =>
{
    //api for quotes
    var url="https://type.fit/api/quotes";    

    // fetch the data from api
    const response=await fetch(url);

    const allQuotes = await response.json();

    const date = new Date();

    const indx = (date.getDate() * date.getMonth() * date.getFullYear()) % allQuotes.length;

    const quote=allQuotes[indx].text;

    const text=document.getElementById("paul-text");

    text.innerHTML=quote;
}

getNewQuote();