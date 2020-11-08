var buttonOne =  document.getElementById("btn0")
var buttonTwo =  document.getElementById("btn1")
var buttonThree =  document.getElementById("btn2")
var buttonFour =  document.getElementById("btn3")
var progress = document.getElementById("progress")
// select question
var questionDiv = document.getElementById("question")
var questionTitleDiv = document.getElementById("question-title");
var buttonsDiv = document.querySelector(".buttons")
var question = document.getElementById("question")
var form = document.getElementById("form")
var scoreDiv = document.getElementById("score")
var timerDiv = document.getElementById("timer");
var startBtn = document.getElementById("startBtn")
var message = document.getElementById("message")


// =======================================================
var questions = [
    {
        question : " Which of the following is  a reserved word in JavaScript?",
        choices : [ "interface", "throws", "program", "short"],
        answer : "program"
    },
    {
        question : "What HTML stand for ",
        choices : ["Hypertext Markup Language", "Hypertext technolgy  Markup Language", "Hypertext Markup Literacy", "Hypertext meta Language" ],
        answer : "Hypertext Markup Language"
    },
    {
        question : "who did create JavaScript ?",
        choices : ['Mohamed Ahmed', 'Aaron Jewell ', 'Steve Jobs', 'Brendan Eich'],
        answer : "Brendan Eich"
    },

    {
        question : "The Bootstrap grid system is based on how many columns?",
        choices : ['12', '6', '4', '2'],
        answer : "12"
    }
];

var currentQuestion = 0;

function start() {
   
    currentQuestion = 0;
    hideLogin()
    startTimer();
    renderQuestion()
}

function renderQuestion() {
    var currentQuestionTitle = questions[currentQuestion].question ;
    questionTitleDiv.textContent = currentQuestionTitle
    
    var choices = questions[currentQuestion].choices; 
    buttonOne.textContent = choices[0]
    buttonTwo.textContent = choices[1]
    buttonThree.textContent = choices[2]
    buttonFour.textContent = choices[3]
}


function startTimer() {

    var timer = setInterval(countDown,1000)
    function countDown(){
        if( timerDiv.textContent <= 0 ){
            timerDiv.textContent = "Game Over";
            clearInterval(timer)
            showLogin()
            progress.textContent = `Your score is ${ score} out of four`
            
        }else{
            timerDiv.textContent--;
            timerDiv.style.cssText = " background: #eeeeee ; color: black " 
            
        }
    } // end of the timer 
};

var score = 0


// question # 1

questionDiv.addEventListener("click", function(event) {
    if (event.target.matches("button")) {
        // We know they clicked a question button
        if(questions[currentQuestion].answer === event.target.innerText){
            progress.textContent = `You got it!`;
            // increment the score
            score++
            
            // update the score display
            scoreDiv.textContent = score
            
        } else {
            // incorrect answer
            progress.textContent = "You didn't get it... Sorry..."

       

            timerDiv.textContent =  timerDiv.textContent -10;

        }
        // increase our question counter
        currentQuestion++;

        // We've finished the last question
        if (currentQuestion >= questions.length ){
            
            showLogin()
           
        } else {
            // render the next question
            renderQuestion();
        }


    }
})

form.addEventListener("click", function(event){
    event.preventDefault()

})


function showLogin() {
    buttonsDiv.style.visibility = "hidden"
        question.style.visibility = "hidden"
        form.style.cssText = "visibility: visible; z-index:1; margin-top:-165px"
        

}

function hideLogin() {
    buttonsDiv.style.visibility = "visible"
    question.style.visibility = "visible"
    form.style.cssText = "visibility: hidden; z-index:1; margin-top:-165px"

}

////////////////////////////////////////////////////////////////////////////////////////////////


  