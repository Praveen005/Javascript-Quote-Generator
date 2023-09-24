//Variables
const nextQuote= document.querySelector('.newQuoteBtn');
const quoteText= document.querySelector('.blockquote-text');
const speakerName= document.querySelector('.speaker-name');
const newQuoteBtn= document.querySelector('.newQuoteBtn');
const tweetBtn= document.querySelector('.tweetBtn');
const whatsAppShareBtn= document.querySelector('.whatsAppShareBtn');
const downloadBtn= document.querySelector('.downloadBtn');
const copyBtn= document.querySelector('.copy');
const textCopiedInfo= document.querySelector('.textCopiedInfo');
const themeBtn= document.querySelector('.themeBtn');

//Generate new quote
nextQuote.onclick = function(){
    const randomIndex= Math.floor(Math.random()*quotes.length);
    console.log(randomIndex, quotes[randomIndex].author);
    quoteText.innerText = '"' + quotes[randomIndex].quote + '"';
    speakerName.innerText = '-' + quotes[randomIndex].author;
}

// Tweet
function tweetQuote(){
    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText.innerText +'\n' + speakerName.innerText)}`;
    // const xUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} ${speakerName.innerText}`;

    window.open(xUrl, "_blank");
}
tweetBtn.addEventListener('click', tweetQuote);

//Share on whatsapp
function whatsAppShare(){
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(quoteText.innerText +'\n' + speakerName.innerText)}`;
    window.open(whatsappUrl, "_blank");
}
whatsAppShareBtn.addEventListener('click', whatsAppShare);

//Copy the quote
function copyQuote(){
    textCopiedInfo.style.opacity= 1;

    setTimeout(() => {
        textCopiedInfo.style.opacity= 0;
    },1300);

    const textToCopy= quoteText.innerText  + speakerName.innerText;
    navigator.clipboard.writeText(textToCopy);    
}
copyBtn.addEventListener('click', copyQuote);


//Change the theme
let isDarkTheme = true;
themeBtn.addEventListener('click', () => {
    const bgImg = document.querySelector('.bg-img');

    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        // Apply dark theme
        document.body.style.background = 'rgb(10, 12, 14)';
        bgImg.style.display = 'none';
        themeBtn.innerHTML = '<i class="fas fa-sun"></i> Light'; // sun icon for the light theme
        themeBtn.style.background = '#fff';
        themeBtn.style.color = 'rgb(30, 48, 80)';
    } else {
        // Apply light theme
        document.body.style.background = 'transparent'; // Reset to default background
        bgImg.style.display = 'block';
        themeBtn.innerHTML = '<i class="fas fa-moon"></i> Dark'; // moon icon for the dark theme
        themeBtn.style.background = '';
        themeBtn.style.color = '';
    }
});


/*
The Math.floor() function in JavaScript is used to round a number down to the nearest integer that is less than or equal to the original number. 

*/