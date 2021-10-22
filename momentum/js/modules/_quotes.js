import { lang } from './_translate.js';

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuoteBtn = document.querySelector('.change-quote');

async function getQuotes() {
  const quotes = './../../quotes.json';
  const res = await fetch(quotes);
  const data = await res.json();

  return data;
}

const quotes = await getQuotes();

const setQuote = () => {
  let randomQuoteNum = Math.floor(Math.random() * (10 - 0));
  quote.textContent = `"${quotes[lang][randomQuoteNum].text}"`;
  author.textContent = quotes[lang][randomQuoteNum].author;
};

setQuote();

changeQuoteBtn.addEventListener('click', setQuote);
