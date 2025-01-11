const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const message = document.getElementById('message')

form.addEventListener('submit', (e) => {
	e.preventDefault()

	validateInput()
})

const setError = (element, message) => {
	const inputControl = element.parentElement
	const errorDisplay = inputControl.querySelector('.error')

	errorDisplay.innerText = message
	inputControl.classList.add('error')
	inputControl.classList.remove('success')
}

const setSuccess = (element) => {
	const inputControl = element.parentElement
	const errorDisplay = inputControl.querySelector('.error')

	errorDisplay.innerText = ''
	inputControl.classList.add('success')
	inputControl.classList.remove('error')
}

const validateEmail = email => {
	const rgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return rgx.test(String(email).toLowerCase())
}

const validateInput = () => {
	let isValid = true

	const usernameValue = username.value.trim()
	const emailValue = email.value.trim()
	const passwordValue = password.value.trim() 
	const password2Value = password2.value.trim() 

	if(usernameValue === '') {
		setError(username, 'Username is required')
	} else {
		setSuccess(username)
	}

	if(emailValue === '') {
		setError(email, 'Email is required')
	} else if(!validateEmail(emailValue)) {
		setError(email, 'Provide a valid email address')
	} else {
		setSuccess(email)
	}

	if(passwordValue === '') {
		setError(password, 'Password is required')
	} else if(passwordValue.length < 8) {
		setError(password, 'Password must be at least 8 characters')
	} else {
		setSuccess(password)
	}

	if(password2Value === '') {
		setError(password2, 'Password confirmation is required')
	} else if(password2Value !== passwordValue) {
		setError(password2, "Passwords don't match")
	} else {
		setSuccess(password2)
	}4

	if(isValid) {
		message.innerText = 'Signed'
	}
}
