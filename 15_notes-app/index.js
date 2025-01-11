const notesContainer = document.querySelector('.notes-container')
const createBtn = document.querySelector('.btn')
let notes = document.querySelector(".input-box")

function showNotes() {
	notesContainer.innerHTML = localStorage.getItem('notes')
}
showNotes()

function updateStorage() {
	localStorage.setItem('notes', notesContainer.innerHTML)
}

notesContainer.addEventListener('click', (e) => {
	if(e.target.classList.contains('delete-btn')) {
		e.target.parentElement.remove()
		updateStorage()
	}
})

createBtn.addEventListener('click', () => {
	let inputBox = document.createElement('div')
	let noteContent = document.createElement('p')
	let deleteNote = document.createElement('button')

	noteContent.className = 'note-content'
	noteContent.setAttribute('contenteditable', 'true')
	noteContent.textContent = 'Новая заметка...'
	
	deleteNote.textContent = 'delete'
	deleteNote.className = 'delete-btn'
	
	inputBox.className = 'note'
	inputBox.appendChild(noteContent)
	inputBox.appendChild(deleteNote)

	notesContainer.appendChild(inputBox)
	updateStorage()
})

