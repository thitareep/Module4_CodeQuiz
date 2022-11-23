// Question bank with questions from mock up //
var questionBank = [
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        choices: ["1. Quotes", "2. Parenthesis", "3. CurlyBrackets", "4. Square Brackets"],
        answer: "2. Parenthesis"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. Alerts", "2. Strings", "3. Numbers", "4. Booleans"],
        answer: "1. Alerts"
    },
    {
        question: "String values must be enclosed within _____ when being assied to variables.",
        choices: ["1. Curly Brackets", "2. Parenthesis", "3. Commas", "4. Quotes"],
        answer: "4. Quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. Terminal/Bash", "2. Javascript", "3. Console Log", "4. For Loops"],
        answer: "3. Console Log"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.", 
        choices: ["2. Other Arrays", "2. Booleans", "3.Numbers and Strings", "4. All of the Above"],
        answer: "4. All of the Above"
    }
];

var questionEl = document.querySelector('question');
var choice1 = document.querySelector('.choice1');
var choice2 = document.querySelector('.choice2');
var choice3 = document.querySelector('.choice3');
var choice4 = document.querySelector('.choice4');

function renderQuestion(questionCount) {
    questionEl.innerHTML = questionBank[questionCount].question;
    choice1.innerHTML = questionBank[questionCount].choices[0];
    choice2.innerHTML = questionBank[questionCount].choices[1];
    choice3.innerHTML = questionBank[questionCount].choices[2];
    choice4.innerHTML = questionBank[questionCount].choices[3];
};