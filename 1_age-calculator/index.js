document.getElementById('submit').addEventListener('click', () => {
	const dateInput = document.getElementById('dataInput').value
	const result = document.getElementById('result')

	const birthdate = new Date(dateInput)
	const today = new Date()

	if(!dateInput) {
		result.textContent = 'Введите дату'
		return
	}

	if(birthdate > today) {
		result.textContent = 'Некорректная дата'
		return
	}

	let years = today.getFullYear() - birthdate.getFullYear()
	let month = today.getMonth() - birthdate.getMonth()
	let days = today.getDate() - birthdate.getDate()

	if(days < 0) {
		month--
		const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
		days += lastMonth.getDate()
	}

	if(month < 0) {
		years--
		month += 12
	}
	result.textContent = `${years} лет ${month} месяцев ${days} дни`
})