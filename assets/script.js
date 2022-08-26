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
        mcq3: 'c',
        mcq4: 'd',
        answer: 'b',
    },
    {
        question: 'this is the question 3?',
        mcq1: 'a',
        mcq2: 'b',
        mcq3: 'c',
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
var score = 0;
var i = 0;
var multipleChoice = document.getElementById('multiple-choice')
var startButton = document.getElementById('start-button');

function promptQuestions() {

    if (i < questions.length) {
    
    welcome.classList.add('hide')
    startButton.classList.add('hide');
    
    questionPrompt.textContent = questions[i].question;
    choice1.textContent = questions[i].mcq1;
    choice2.textContent = questions[i].mcq2;
    choice3.textContent = questions[i].mcq3;
    choice4.textContent = questions[i].mcq4;

    choicesPrompt.classList.remove('hide');

        answeringQuestion();
    
    }
    else {
        i = 4;
        console.log('done');
        return;
    }
}   


function answeringQuestion() {
    multipleChoice.addEventListener('click', function(event) { 

        var element = event.target;
        var elementValue = element.textContent;

        if(elementValue == questions[i].answer){
        console.log('Correct');
        score = score + 100;
        }
        
        storingScore()  
    }
    )
}

function storingScore() {
    i = i + 1;


    promptQuestions();
}






startButton.addEventListener('click',promptQuestions);
