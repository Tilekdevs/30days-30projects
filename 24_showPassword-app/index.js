let eyeIcon = document.getElementById('eyeIcon')
let password = document.getElementById('password')

eyeIcon.onclick = function() {
	password.type = password.type === 'password' ? 'text' : 'password';
	eyeIcon.classList.toggle('fa-eye');
	eyeIcon.classList.toggle('fa-eye-slash');
};