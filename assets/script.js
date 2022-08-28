var questions = [
    {
        question: 'this is the question?',
        mcq1: 'a. Is this the answer',
        mcq2: 'b. This is the answer',
        mcq3: 'c. who thinks this',
        mcq4: 'd. joking',
        answer: 'a. Is this the answer',
    },
    {
        question: 'this is the question 2?',
        mcq1: 'a',
        mcq2: 'b',
        mcq3: 'c2',
        mcq4: 'd',
        answer: 'b',
    },
    {
        question: 'this is the question 3?',
        mcq1: 'a',
        mcq2: 'b',
        mcq3: 'c3',
        mcq4: 'd',
        answer: 'c',
    },
    {
        question: 'this is the question 4?',
        mcq1: 'a',
        mcq2: 'b',
        mcq3: 'c',
        mcq4: 'd',
        answer: 'd',
    },
    {
        question: 'this is the question 5?',
        mcq1: 'a',
        mcq2: 'b',
        mcq3: 'c',
        mcq4: 'd',
        answer: 'b',
    }
]

var questionPrompt = document.getElementById('question-prompt');
var choice1 = document.getElementById('q1a');
var choice2 = document.getElementById('q2a');
var choice3 = document.getElementById('q3a');
var choice4 = document.getElementById('q4a');
var choicesPrompt = document.getElementById ('choices-prompt');
var welcome = document.getElementById('welcome');
var i = 0;
var multipleChoice = document.getElementById('multiple-choice')
var startButton = document.getElementById('start-button');
var secondsLeft = 60;
var timer = document.getElementById('timer');
var allChoices = document.querySelectorAll('.choices')
var gameOver = document.querySelector('.game-over')
var timerCount;
var userNameEl = document.getElementById('user-name')
var saveBtn = document.getElementById('save-score')

function startGame() {
    welcome.classList.add('hide');
    startButton.classList.add('hide');
    choicesPrompt.classList.remove('hide');
    startTimer();
    promptQuestions();
}

function promptQuestions() {   

    if (i < questions.length) {

        questionPrompt.textContent = questions[i].question;
        choice1.textContent = questions[i].mcq1;
        choice2.textContent = questions[i].mcq2;
        choice3.textContent = questions[i].mcq3;
        choice4.textContent = questions[i].mcq4;

    }
    else {
        console.log('done');
        showingScore();
        gameOver.classList.remove('hide');
        clearInterval(timerCount);
        return;
    }
}



function startTimer() {
    timer.textContent = secondsLeft + ' seconds left';
    timerCount = setInterval (function() {
        secondsLeft--;
        timer.textContent = secondsLeft + ' seconds left';
        if(secondsLeft === 1) {
            timer.textContent = secondsLeft + ' second left';
        }
        else if (secondsLeft <= 0) {
            clearInterval(timerCount);
            choicesPrompt.classList.add('hide');
            questionPrompt.textContent = 'GAME OVER';
            timer.textContent = '';
        }
    }, 1000)
}

allChoices.forEach((choice) => {
    choice.addEventListener('click', function(event) { 
        var element ='';
        var elementValue ='';
        element = event.target;
        elementValue = element.textContent;

        if(elementValue === questions[i].answer){
        console.log('Correct');
        } else {
            console.log('incorrect');   
            secondsLeft -= 5;
        }
        console.log(element)
        console.log(elementValue) 
        i++;
        promptQuestions();
    })
});
   

function showingScore() {
    // console.log(highScore);
    questionPrompt.textContent = 'Your Score is ' + secondsLeft;
    timer.textContent = '';
    choicesPrompt.classList.add('hide');

   
}

function storeScore(){
    // var userName = userNameEl.value;
    var existingScores = JSON.parse(localStorage.getItem('score')) || {};
    var updatedScore = {...existingScores,[ userNameEl.value]: secondsLeft};
    localStorage.setItem('score',JSON.stringify(updatedScore) );

}

saveBtn.addEventListener('click',storeScore);
startButton.addEventListener('click',startGame);
