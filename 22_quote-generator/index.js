const API = 'https://api.quotable.io/random'

const quote = document.getElementById('quote')
const author = document.getElementById('author')

async function getQuote() {
	const response = await fetch(API)
	const data = await response.json();
	quote.innerHTML = data.content
	author.innerHTML = data.author
}

getQuote(API)

function tweet() {
	window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML, 'Tweet Window', 'width=600', 'height=300')
}