const questions = [
	{
		question: "Самое большое животное?",
		answer: [
			{ text: "Кит", correct: true },
			{ text: "Акула", correct: false },
			{ text: "Носорог", correct: false },
			{ text: "Жираф", correct: false },
		],
	},
	{
		question: "Какая игра больше весит?",
		answer: [
			{ text: "Red Dead Redemption 2", correct: false },
			{ text: "Call of duty: cold war", correct: false },
			{ text: "Microsoft flying simulator", correct: true },
			{ text: "Call of Duty: Black Ops 3", correct: false },
		],
	},
	{
		question: "Самая большая пустыня",
		answer: [
			{ text: "Сахара", correct: true },
			{ text: "Калахари", correct: false },
			{ text: "Носорог", correct: false },
			{ text: "Гоби", correct: false },
		],
	},
	{
		question: "Самая длинная река в мире",
		answer: [
			{ text: "Миссисипи", correct: false },
			{ text: "Нил", correct: false },
			{ text: "Енисей", correct: false },
			{ text: "Амазонка", correct: true },
		],
	},
];

const questionElement = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	nextBtn.style.display = "none";
	showQuestion();
}

function showQuestion() {
	resetState();
	const currentQuestion = questions[currentQuestionIndex];
	questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
	currentQuestion.answer.forEach((answer) => {
		const button = document.createElement("button");
		button.textContent = answer.text;
		button.classList.add("btn");
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);
		answerButtons.appendChild(button);
		if(answer.correct) {
			button.dataset.correct = answer.correct
		}
	});
}

function resetState() {
	nextBtn.style.display = "none";
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

function selectAnswer(e) {
	const selectBtn = e.target
	const isCorrect = selectBtn.dataset.correct === 'true'
	if(isCorrect) {
		selectBtn.classList.add('correct')
		score++
	} else {
		selectBtn.classList.add('incorrect')
	}

	Array.from(answerButtons.children).forEach((button) => {
		if(button.dataset.correct === 'true') {
			button.classList.add('correct')
		}
		button.disabled = true
	})
	nextBtn.style.display = 'block'
}

function showNextQuestion() {
	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length) {
		showQuestion();
	} else {
		showScore();
	}
}

function showScore() {
	resetState();
	questionElement.textContent = `Вы набрали ${score} из ${questions.length}!`;
	nextBtn.textContent = "Сыграть снова";
	nextBtn.style.display = "block";
	nextBtn.addEventListener("click", startQuiz);
}

nextBtn.addEventListener("click", showNextQuestion);

startQuiz();
