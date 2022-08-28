var questions = [
    {
        question: 'What is the smallest number below?',
        mcq1: 'a. 1.99992734',
        mcq2: 'b. 300867',
        mcq3: 'c. 0.00002342',
        mcq4: 'd. -0.0628733',
        answer: 'd. -0.0628733',
    },
    {
        question: 'What is the essential gas for human to breathe?',
        mcq1: 'a. Carbon Monoxide',
        mcq2: 'b. Oxygen',
        mcq3: 'c. Hydrogen',
        mcq4: 'd. Carbon Dioxide',
        answer: 'b. Oxygen',
    },
    {
        question: 'What is the largest known land animal',
        mcq1: 'a. Elephant',
        mcq2: 'b. Giraffe',
        mcq3: 'c. Whale',
        mcq4: 'd. Hippoppotamus',
        answer: 'a. Elephant',
    },
    {
        question: 'How many hearts does an octopus have?',
        mcq1: 'a. 9',
        mcq2: 'b. 3',
        mcq3: 'c. 7',
        mcq4: 'd. 1',
        answer: 'b. 3',
    },
    {
        question: 'From what tree do acorns come from?',
        mcq1: 'a. Pine tree',
        mcq2: 'b. Acorn tree',
        mcq3: 'c. Oak Tree',
        mcq4: 'd. Maple Tree',
        answer: 'c. Oak Tree',
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
var highScoreBtn = document.getElementById('highscore')
var updatedScore = []
var existingScors =[]
var row = document.querySelector('.row');

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
            secondsLeft -= 10;
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
    existingScores = JSON.parse(localStorage.getItem('score')) || {};
    var updatedScore = {...existingScores, [ userNameEl.value]: secondsLeft};
    localStorage.setItem('score',JSON.stringify(updatedScore) );
    window.location.href = './highscore.html';
}

function renderHighscore() {

    // todoList.innerHTML = "";
    // todoCountSpan.textContent = todos.length;
  
    // Render a new li for each todo
    // for (var i = 0; i < existingScores.length; i++) {
    //   var todo = todos[i];
  
      var li = document.createElement("li");
      li.textContent = 'testing';
    //   li.setAttribute("data-index", i);
  
    //   var button = document.createElement("button");
    //   button.textContent = "Complete ✔️";
      row.appendChild(li);
    // }
  }


saveBtn.addEventListener('click',storeScore);
startButton.addEventListener('click',startGame);
