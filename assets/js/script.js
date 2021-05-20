var startBtn = document.getElementById('start-btn')
var questionBoxEl = document.getElementById('question-box')
// Array of Questions and Answers
var questions = [
{
    Question: 'Which of the following is not JavaScript Data Types?'
    answers:[
        {text:'Undefined', correct:false}
        {text:'Number', correct:false}
        {text:'Boolean', correct:false}
        {text:'Float', correct:true}

    ]
}
    
]
startBtn.addEventListener("click", startGame)
function startGame() {
startBtn.classList.add("hide")
questionBoxEl.classList.remove("hide")
nextQuestion
}
function nextQuestion() {

}
function nextAnswer() {

}
