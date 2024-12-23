const scriptURL =
	'https://script.google.com/macros/s/AKfycbxwFhexX5SI3FAj-mhurvKs4K4k7nQttUzYqXDGUL4MdLzm2kEZavJwafUQwCv0RN3rNw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
	e.preventDefault()

	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		.then(response => {
			console.log('Success!', response)
			setTimeout(() => {
				if (response.ok) {
					const span = document.querySelector('span')
					span.style.display = 'block'
				}
			}, 5000)
			form.reset()
		})
		.catch(error => console.error('Error!', error.message))
})
