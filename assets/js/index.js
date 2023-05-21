let startBtn = document.getElementById('start');
let startMenu = document.getElementById('start-menu');
let timer = document.getElementById('timer');
let quizSection = document.getElementById('quiz-section');
let question = document.getElementById('question');
let choice1 = document.getElementById('choice1');
let choice2 = document.getElementById('choice2');
let choice3 = document.getElementById('choice3');
let choice4 = document.getElementById('choice4');
let scoreSubmit = document.getElementById('score-submit');
let finalScore = document.getElementById('final-score');
let initials = document.getElementById('initials');
let endMenu = document.getElementById('end-menu');

var questions = [
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: 'Cute, Tough, and Cool',
        choice2: 'Fire, Water, and Grass',
        choice3: 'Frog, Turtle, Lizard',
        choice4: 'Ash, Brock, and Misty',
        answer: 2,
    },
    {
        question: `What is the name of Pikachu's voice actor/actress?`,
        choice1: 'Ikue Otani',
        choice2: 'Ash Ketchup',
        choice3: 'Elon Musk',
        choice4: 'Rica Matsumoto',
        answer: 1,
    },
    {
        question: 'Where can you go to pick up the eggs your pokemon lay?',
        choice1: 'Pokemon Center',
        choice2: `The Professor's Lab`,
        choice3: 'The Daycare',
        choice4: `They don't lay eggs, they give live birth`,
        answer: 3,
    },
    {
        question: 'What were the 4th generation of games?',
        choice1: 'Diamond, Pearl, and Platinum',
        choice2: 'Leaf Green and Fire Red',
        choice3: 'Ruby, Sapphire, and Emerald',
        choice4: 'Colosseum and Gale of Darkness',
        answer: 1,
    },
    {
        question: 'What does Pokemon mean?',
        choice1: `It Doesn't Mean Anything`,
        choice2: 'Little Creatures',
        choice3: 'Poke Monsters',
        choice4: 'Pocket Monsters',
        answer: 4,
    },
    {
        question: 'How many badges do you need to challenge the Elite 4?',
        choice1: '2',
        choice2: '8',
        choice3: '21',
        choice4: '17',
        answer: 2,
    },
    {
        question: `What is the name of a Pokemon's hidden stats that CAN'T be changed?`,
        choice1: `EV's`,
        choice2: 'HP',
        choice3: 'Hidden Ability',
        choice4: `IV's`,
        answer: 4,
    },
    {
        question: `What is the name of a Pokemon's hidden stats that CAN be changed?`,
        choice1: `EV's`,
        choice2: 'HP',
        choice3: 'Hidden Ability',
        choice4: `IV's`,
        answer: 1,
    },
    {
        question: 'Which generation of Pokemon games had the best soundtrack?',
        choice1: '3rd gen',
        choice2: '1st gen',
        choice3: '5th gen',
        choice4: '4th gen',
        answer: 3,
    },
    {
        question: 'Fill in the blank: With great power comes great ______.',
        choice1: 'Responsibility',
        choice2: `That's not from Pokemon!? >:(`,
        choice3: 'Corruption',
        choice4: 'Pokeballs',
        answer: 2,
    },
];

score = 0;
timerCnt = 300;
questionCnt = 0;
quizSection.style.display = "none";
endMenu.style.display = "none";
let storedUsers;

function onPageLoad() {
    if (storedUsers = JSON.parse(localStorage.getItem("highscores")) === null) {
        storedUsers = [];
    } else {
        storedUsers = JSON.parse(localStorage.getItem("highscores"))
    };
    console.log(storedUsers);
}

onPageLoad();

function runQuiz() {
    if (questionCnt === 10 || timerCnt <= 0) {
        return endQuiz();
    }
    timer.textContent = "Time Left: " +
        `${Math.floor(timerCnt / 60)}:${(timerCnt % 60).toString().padStart(2, '0')}`;
    question.textContent = questions[questionCnt].question;
    choice1.textContent = questions[questionCnt].choice1;
    choice2.textContent = questions[questionCnt].choice2;
    choice3.textContent = questions[questionCnt].choice3;
    choice4.textContent = questions[questionCnt].choice4;
};

startBtn.addEventListener('click', function () {
    startTimer();
    startMenu.style.display = "none";
    quizSection.style.display = "block";
    runQuiz();
});

function startTimer() {
    let countdown = setInterval(function () {
        timerCnt--;
        timer.textContent = "Time Left: " +
            `${Math.floor(timerCnt / 60)}:${(timerCnt % 60).toString().padStart(2, '0')}`;
        if (timerCnt <= 0) {
            clearInterval(countdown);
            endQuiz();
        }
    }, 1000);
};

function manageChoice1() {
    if (questions[questionCnt].answer === 1) {
        questionCnt++;
        score += 10;
        console.log("Correct");
    } else {
        questionCnt++;
        timerCnt -= 10;
        console.log("Wrong");
    }
    runQuiz();
};
function manageChoice2() {
    if (questions[questionCnt].answer === 2) {
        questionCnt++;
        score += 10;
        console.log("Correct");
    } else {
        questionCnt++;
        timerCnt -= 10;
        console.log("Wrong");
    }
    runQuiz();
};
function manageChoice3() {
    if (questions[questionCnt].answer === 3) {
        questionCnt++;
        score += 10;
        console.log("Correct");
    } else {
        questionCnt++;
        timerCnt -= 10;
        console.log("Wrong");
    }
    runQuiz();
};
function manageChoice4() {
    if (questions[questionCnt].answer === 4) {
        questionCnt++;
        score += 10;
        console.log("Correct");
    } else {
        questionCnt++;
        timerCnt -= 10;
        console.log("Wrong");
    }
    runQuiz();
};

choice1.addEventListener('click', manageChoice1);
choice2.addEventListener('click', manageChoice2);
choice3.addEventListener('click', manageChoice3);
choice4.addEventListener('click', manageChoice4);

function endQuiz() {
    quizSection.style.display = "none";
    endMenu.style.display = "flex";
    console.log(score);
};

function saveScore(e) {
    e.preventDefault();
    newScore = {
        user: initials.value,
        userScore: score
    };
    storedUsers.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(storedUsers));
    window.location.href = "./highscores.html";
}
scoreSubmit.addEventListener("submit", saveScore);