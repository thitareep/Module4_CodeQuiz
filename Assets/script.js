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

// For Questions //  
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

// For Timer //  
var secondsLeft = 75;
var timer = document.querySelector('.timer');
var timeOver =document.querySelector('.time-up');

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = 'Time: ' + secondsLeft + 's';

        if (secondsLeft == 0) {
                    clearInterval(timerInterval);
                    timerOver.textContent = "Time is up!";
                    gameOver();
        } else if(questionCount >= questionBank.length) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
};

var startBtn = document.querySelector('.startBtn');
var instructions = document.querySelector('.instructions');
var quiz = document.querySelector('.quiz-questions');

startBtn.addEventListener('click', function renderQuiz() { 
    instructions.style.display = 'none';
    quiz.style.display = 'block';
    questionNumber = 0
    renderQuestion(questionNumber);
    timeOver.style.display = 'block'
    setTimer();
});

// To display whether answer was correct or wrong //
var answerCheck = document.querySelector('.answer-check');
var correctAnswer = document.querySelector('.correct-answer');
var wrongAnswer = document.querySelector('.wrong-answer');

function checkAnswer(event) {
    event.preventDefault();
    answerCheck.style.display = 'block';
    console.log(event.target.innerHTML)
    console.log(questionBank[questionNumber].answer)

    setTimeout(function () {
        answerCheck.style.display = 'none';
    }, 3000);

    if (event.target.innerHTML. === questionBank[questionNumber].answer) {
        correctAnswer.style.display = 'block';
        wrongAnswer.style.display = 'none';
    } else {
        correctAnswer.style.display = 'none';
        wrongAnswer.style.display = 'block';
        secondsLeft = secondsLeft - 10;
    };

    questionNumber++

    if (questionNumber < questionBank.length) {
        renderQuestion(questionNumber);
    } else {
        gameOver();
    };
};
