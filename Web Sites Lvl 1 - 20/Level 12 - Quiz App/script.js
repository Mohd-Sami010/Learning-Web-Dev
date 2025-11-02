const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Dog", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Ag", correct: false },
            { text: "Au", correct: true },
            { text: "Pt", correct: false },
            { text: "Pb", correct: false },
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false },
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Skin", correct: true },
            { text: "Heart", correct: false },
            { text: "Lungs", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButtonElement = document.getElementById("next-btn");
nextButtonElement.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length){
        ShowNextQuestion();
    }
    else{
        StartQuiz();
    }
});

let currentQuestionIndex = 0;
let score = 0;
StartQuiz();
function StartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButtonElement.innerHTML = "Next";
    ShowQuestion();
}
function ShowQuestion() {
    ResetState();

    let currentQuestion = questions[currentQuestionIndex];
    let currntQuestionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = currntQuestionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", SelectAnswer);
    });
}
function SelectAnswer(e) {
    const selectedBtn = e.target;
    if (selectedBtn.dataset.correct) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButtonElement.style.display = "block";
}
function ResetState() {
    nextButtonElement.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}
function ShowNextQuestion() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        ShowQuestion();
    }
    else {
        ShowScore();
    }
}
function ShowScore(){
    ResetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButtonElement.innerHTML = "Play Again";
    nextButtonElement.style.display = "block";
}