const track = document.querySelector('.track')
const backBtn = document.getElementById('back')
const nextBtn = document.getElementById('next')

let currentIndex = 0
const imageWidth = 430 
const visibleImages = 3

const updateTrackPosition = () => {
	const offset = -currentIndex * imageWidth
	track.style.transform = `translateX(${offset}px)`
}

nextBtn.addEventListener('click', () => {
	if (currentIndex < track.children.length - visibleImages) {
		currentIndex++
		updateTrackPosition()
	}
})

backBtn.addEventListener('click', () => {
	if (currentIndex > 0) {
		currentIndex--
		updateTrackPosition()
	}
})
