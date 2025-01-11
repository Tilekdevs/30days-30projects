const passwordBox = document.getElementById('password')
const lengthPassword = 8;

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
const lowerCase = "qwertyuiopasdfghjklzxcvbnm"
const number = '0123456789'
const symbol = "!#$%&()*+,-./:;<=>?@[]^_`{|}~"

const allChars = upperCase + lowerCase + number + symbol

function createPassword() {
	let password = ""
	password += upperCase[Math.floor(Math.random() * upperCase.length)]
	password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
	password += number[Math.floor(Math.random() * number.length)]
	password += symbol[Math.floor(Math.random() * symbol.length)]

	while(lengthPassword > password.length) {
		password += allChars[Math.floor(Math.random() * symbol.length)]
	}
	passwordBox.value = password
}

function copyPassword() {
	passwordBox.select()
	document.execCommand('copy')
}