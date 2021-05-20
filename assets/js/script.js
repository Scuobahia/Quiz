var startBtn = document.getElementById('start-btn')
var questionBoxEl = document.getElementById('question-box')
var questionEl = getElementById("question")
var answerBtn = getElementById('answer-buttons')
var randomQuestions, currentQuestionIndex
// Array of Questions and Answers
var questions = [
{
    question: 'Which of the following is not JavaScript Data Types?',
    answers:[
        { text:'Undefined', correct:false},
        { text:'Number', correct:false },
        { text:'Boolean', correct:false },
        { text:'Float', correct:true }
    ]
}
    
]
startBtn.addEventListener("click", startGame)
function startGame() {
startBtn.classList.add("hide")
randomQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionBoxEl.classList.remove("hide")
nextQuestion
}
function nextQuestion() {
    whatQuestion(randomQuestions[currentQuestionIndex])

}
function whatQuestion(question) {
questionEl.innerText = question.question
}
function nextAnswer() {

}
