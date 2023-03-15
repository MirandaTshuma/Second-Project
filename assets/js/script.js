
const question = [
    {
        question: "In which movie do the Avengers break up?",
        answers: [
            {text: "Avengers: Age of Ultron", correct: false},
            {text: "Captain America: Civil War", correct: true},
            {text: "Avengers: End game", correct: false},
            {text: "Dr Strange", correct: false},
        ]
    },

    {
        question: "Who played Whitney Houston's bodyguard in the movie The Body Guard?",
        answers: [
            {text: "Frank Farmer", correct: true},
            {text: "Gerry Kemp", correct: false},
            {text: "Denzel Washington", correct: false},
            {text: "Steve Harvey", correct: false},
        ]
    },
    {
        question: "How many times do you have to say Bettle juice before he appears?",
        answers: [
            {text: "One", correct: true},
            {text: "Two", correct: false},
            {text: "Three", correct: true},
            {text: "Four", correct: false},
        ]
    },
    {
        question: "What was the name of Micheal B Jordan in Black Panther?",
        answers: [
            {text: "T'Challa", correct: true},
            {text: "W'Kabi", correct: false},
            {text: "N'Jobu", correct: false},
            {text: "Erik Kilmonger", correct: true},
        ]
    },
    {
        question: "What is the name of the first movie in the Lord of the Rings trilogy?",
        answers: [
            {text: "The Lord of the Rings: The Fellowship of the Ring", correct: true},
            {text: "The lord of the Rings: The two Towers", correct: false},
            {text: "The lord of the Rings: The Preciuos Ring", correct: false},
            {text: "The lord of the Rings: The Return of the King", correct: true},
        ]
    },
    {
        question: "How many Starwars movies are there",
        answers: [
            {text: "8", correct: false},
            {text: "11", correct: false},
            {text: "12", correct: true},
            {text: "12", correct: false},
        ]
    },
    {
        question: "Who is the voice of Transformers Prime?",
        answers: [
            {text: "Chris Hemsworth", correct: false},
            {text: "Frank Welker", correct: false},
            {text: "Anthony Hopkins", correct: true},
            {text: "Terry Balwin", correct: false},
        ]
    },
    {
        question: "In which movie do the Avengers make up??",
        answers: [
            {text: "The Avengers", correct: true},
            {text: "Captain America: Civil War", correct: false},
            {text: "Avengers: End game", correct: false},
            {text: "Dr Strange", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("ans-btn");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
letScore = 0

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){;
let currentQuestion = question[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML - questionNo + "." + currentQuestion.question;
}
  





