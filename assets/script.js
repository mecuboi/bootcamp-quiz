var questions = [
    {
        question: 'this is the question?',
        mcq1: 'a',
        mcq2: 'b',
        mcq3: 'c',
        mcq4: 'd',
        answer: 'a',
    },
    {
        question: 'this is the question?',
        mcq1: 'a',
        mcq2: 'b',
        mcq3: 'c',
        mcq4: 'd',
        answer: 'b',
    },
    {
        question: 'this is the question?',
        mcq1: 'a',
        mcq2: 'b',
        mcq3: 'c',
        mcq4: 'd',
        answer: 'c',
    },
    {
        question: 'this is the question?',
        mcq1: 'a',
        mcq2: 'b',
        mcq3: 'c',
        mcq4: 'd',
        answer: 'd',
    },
    {
        question: 'this is the question?',
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

var score = 0;

var startButton = document.getElementById('start-button');

function promptQuestions() {
    console.log('success');
}


startButton.addEventListener('click',promptQuestions);



