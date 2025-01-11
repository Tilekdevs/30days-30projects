const fromSelectMoney = document.getElementById('fromSelectMoney')
const toSelectMoney = document.getElementById('toSelectMoney')
const reverseBtn = document.getElementById('reverseMoney')
const fromAmount = document.getElementById('fromAmount')
const toAmount = document.getElementById('toAmount')

const date = new Date()
const year = String(date.getFullYear()).padStart(2, '0')
const month = String(date.getMonth() + 1).padStart(2, '0')
const day = String(date.getDay()).padStart(2, '0')
const hour = String(date.getHours()).padStart(2, '0')

const dateString = `${year}-${month}-${day}`
const hourString = hour

const url = `https://cdn.jsdelivr.net/gh/ismartcoding/currency-api/${dateString}/${hourString}.json`

let quotes = {}

fetch(url)
	.then(response => {
		if (!response.ok) {
			console.log('База не отвечает...')
		}
		return response.json()
	})
	.then(data => {
		quotes = data.quotes

		if (data && data.quotes) {
			Object.keys(quotes).forEach((key, value) => {
				const optionFrom = document.createElement('option')
				const optionTo = document.createElement('option')

				optionFrom.value = key
				optionFrom.textContent = key
				fromSelectMoney.appendChild(optionFrom)

				optionTo.value = key
				optionTo.textContent = key
				toSelectMoney.appendChild(optionTo)
			})
			fromSelectMoney.value = 'USD'
			toSelectMoney.value = 'EUR'
			convert()
		} else {
			console.log('Error DB died...')
		}
	})
	.catch((error) => console.error('Ошибка при загрузке данных:', error));	

function convert() {
	const fromCurrency = fromSelectMoney.value
	const toCurrency = toSelectMoney.value
	const fromRate = quotes[fromCurrency]
	const toRate = quotes[toCurrency]

	const amountValue = parseFloat(fromAmount.value) || 0
	const convertedValue = (amountValue * toRate) / fromRate

	toAmount.value = convertedValue.toFixed(2)
}

function reverseConvert() {
	const fromCurrency = fromSelectMoney.value
	const toCurrency = toSelectMoney.value
	const fromRate = quotes[fromCurrency]
	const toRate = quotes[toCurrency]

	const amountInputValue = parseFloat(toAmount.value) || 0
	const convertedValue = (amountInputValue * fromRate) / toRate

	fromAmount.value = convertedValue.toFixed(2)
}

fromAmount.addEventListener('input', convert)
toAmount.addEventListener('input', reverseConvert)
fromSelectMoney.addEventListener('change', convert)
toSelectMoney.addEventListener('change', convert)

reverseBtn.addEventListener('click', () => {
	const temp = fromSelectMoney.value
	fromSelectMoney.value = toSelectMoney.value
	toSelectMoney.value = temp

	convert()
})