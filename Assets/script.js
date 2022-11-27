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
        choices: ["1. Other Arrays", "2. Booleans", "3.Numbers and Strings", "4. All of the Above"],
        answer: "4. All of the Above"
    }
];

// For Questions //  
var questionEl = document.querySelector('.question');
var choice1 = document.querySelector('.choice1');
var choice2 = document.querySelector('.choice2');
var choice3 = document.querySelector('.choice3');
var choice4 = document.querySelector('.choice4');

function renderQuestion(questionNumber) {
    questionEl.innerHTML = questionBank[questionNumber].question;
    choice1.innerHTML = questionBank[questionNumber].choices[0];
    choice2.innerHTML = questionBank[questionNumber].choices[1];
    choice3.innerHTML = questionBank[questionNumber].choices[2];
    choice4.innerHTML = questionBank[questionNumber].choices[3];
};

// For Timer //  
var secondsLeft = 75;
var timer = document.querySelector('.timer');
var timeUp =document.querySelector('.time-up');

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.innerHTML = 'Time: ' + secondsLeft + 's';

        if (secondsLeft == 0) {
                    clearInterval(timerInterval);
                    timeUp.innerHTML = "Time is up!";
                    quizOver();
        } else if(questionNumber >= questionBank.length) {
            clearInterval(timerInterval);
            quizOver();
        }
    }, 1000);
};

// To start quiz and render first question //
var startBtn = document.querySelector('.start-btn');
var instructions = document.querySelector('.instructions');
var quiz = document.querySelector('.quiz-questions');

startBtn.addEventListener('click', function renderQuiz() { 
    instructions.style.display = 'none';
    quiz.style.display = 'block';
    questionNumber = 0
    renderQuestion(questionNumber);
    timeUp.style.display = 'block'
    setTimer();
});

// To display whether answer was correct or wrong and to display next question //
var answerCheck = document.querySelector('.answer-check');
var correctAnswer = document.querySelector('.correct-answer');
var wrongAnswer = document.querySelector('.wrong-answer');

function checkAnswer(event) {
    event.preventDefault();
    answerCheck.style.display = 'block';

    setTimeout(function () {
        answerCheck.style.display = 'none';
    }, 3000);

    if (event.target.innerHTML === questionBank[questionNumber].answer) {
        correctAnswer.style.display = 'block';
        wrongAnswer.style.display = 'none';
    } else {
        correctAnswer.style.display = 'none';
        wrongAnswer.style.display = 'block';
        secondsLeft = secondsLeft - 10;
    };

    // To render next question //
    questionNumber++

    if (questionNumber < questionBank.length) {
        renderQuestion(questionNumber);
    } else {
        quizOver();
    };
};

// Clicked answer choice is checked //
choice1.addEventListener('click', checkAnswer);
choice2.addEventListener('click', checkAnswer);
choice3.addEventListener('click', checkAnswer);
choice4.addEventListener('click', checkAnswer);

// For final score result //
var summary = document.querySelector('.summary');
var finalScore = document.querySelector('.final-score');

function quizOver() {
    quiz.style.display = 'none';
    summary.style.display = 'block';
    finalScore.innerHTML = 'Your final score is ' + secondsLeft + '.';
};

// For storing High Scores and initials  //  
var initials = document.querySelector('#initials')
var highScores = [];

function storeHighScores() {
    var highScore = {
        initials: initials.value,
        score: secondsLeft
    };

    if (highScore === null) {
        return;
    } else {
        highScores.push(highScore);
        localStorage.setItem('highScores', JSON.stringify(highScores));
        renderHighScores();
    };
};

// Render high scores into list //
var highScoreList = document.querySelector('.high-score-list');

function renderHighScores() {
    highScoreList.innerHTML = '';
    var storedHighScores = JSON.parse(localStorage.getItem('highScores'));

    if (storedHighScores === null) {
        highScores = [];
    } else {
        // list scores from highest to lowest //
        storedHighScores.sort(function(a,b) {
            return b.score - a.score;
        });

        // Stores top 5 scores //
        highScores = storedHighScores.slice(0,5);
    };

    for (var i = 0; i < highScores.length; i++) {
        var li = document.createElement('li');

        li.textContent = highScores[i].initials + ' - ' + highScores[i].score;
        highScoreList.appendChild(li);
    };
};

// Submit score to high score list, and to display high score list //
var submitBtn = document.querySelector('.submit-btn');
var highScoresSection = document.querySelector('.high-scores');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    summary.style.display = 'none';
    highScoresSection.style.display = 'block';

    renderHighScores();
    storeHighScores();
});

// For viewing high scores //
var viewHighScores = document.querySelector('.view-high-scores');

viewHighScores.addEventListener('click', function (event) {
    event.preventDefault();
    instructions.style.display = 'none';
    quiz.style.display = 'none';
    summary.style.display = 'none';
    answerCheck.style.display = 'none';
    highScoresSection.style.display = 'block';

    renderHighScores();
});

// For back button to go back to instructions display //
var backBtn = document.querySelector('.back-btn');

backBtn.addEventListener('click', function (event) {
    event.preventDefault();
    location.reload();
});

// For clear button to clear high score list //
var clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.clear();
    renderHighScores();
});