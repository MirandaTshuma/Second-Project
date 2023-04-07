const questions = [
    {
      question: "In which movie do the Avengers break up?",
      answers: [
        { text: "Avengers: Age of Ultron", correct: false },
        { text: "Captain America: Civil War", correct: true },
        { text: "Avengers: End game", correct: false },
        { text: "Dr Strange", correct: false },
      ],
    },
  
    {
      question:
        "Who played Whitney Houston's bodyguard in the movie The Body Guard?",
      answers: [
        { text: "Frank Farmer", correct: true },
        { text: "Gerry Kemp", correct: false },
        { text: "Denzel Washington", correct: false },
        { text: "Steve Harvey", correct: false },
      ],
    },
    {
      question: "How many times do you have to say Bettle juice before he appears?",
      answers: [
        { text: "One", correct: false},
        { text: "Two", correct: false },
        { text: "Three", correct: true },
        { text: "Four", correct: false },
      ],
    },
    {
        question: "What was the name of Micheal B Jordan in Black Panther?",
        answers: [
          { text: "T'Challa", correct: false },
          { text: "W'Kabi", correct: false },
          { text: "N'Jobu", correct: false },
          { text: "Erik Killmonger", correct: true },
        ],
      },
  
    {
      question: "What is the name of the first movie in the Lord of the Rings trilogy?",
      answers: [
        { text: "The Lord of the Rings: The Fellowship of the Ring", correct: true },
        { text: "The lord of the Rings: The two Towers", correct: false },
        { text: "The lord of the Rings: The Preciuos Ring", correct: false },
        { text: "The lord of the Rings: The Return of the King", correct: true },
      ],
    },
    {
      question: "How many Starwars movies are there",
      answers: [
        { text: "8", correct: false },
        { text: "11", correct: false },
        { text: "12", correct: true },
        { text: "13", correct: false },
      ],
    },
    {
        question: "What movie won the Best Picture Oscar in 2021?",
        answers: [
        { text: "Nomadland", correct: true },
        { text: "The Trial of the Chicago 7", correct: false },
        { text: "Minari", correct: false },
        { text: "Judas and the Black Messiah", correct: false }
        ]
        },

      
    {
      question: "Who is the voice of Transformers Prime?",
      answers: [
        { text: "Chris Hemsworth", correct: false },
        { text: "Frank Welker", correct: false },
        { text: "Anthony Hopkins", correct: true },
        { text: "Terry Balwin", correct: false },
      ],
    },
    {
      question: "In which movie do the Avengers make up??",
      answers: [
        { text: "The Avengers", correct: true },
        { text: "Captain America: Civil War", correct: false },
        { text: "Avengers: End game", correct: false },
        { text: "Dr Strange", correct: false },
      ],
    },
  ];
  
  const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");

let shuffledQuestions, currentQuestionIndex;
let score = 0;

function startQuiz() {
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0
}

function showQuestion(question) {
    if (!question) {
      // No more questions, clear elements and redirect to "Try Again" page
      questionElement.innerText = "";
      answerButtons.innerHTML = "";
      const tryAgainButton = document.createElement("button");
      tryAgainButton.innerText = "Try Again";
      tryAgainButton.classList.add("btn");
      tryAgainButton.addEventListener("click", () => {
        window.location.href = "try-again.html";
      });
      answerButtons.appendChild(tryAgainButton);
      return;
    }
  
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  


function resetState() {
  nextButton.classList.add("hide");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    score++;
  }
  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
  });
  setTimeout(() => {
    currentQuestionIndex++;
    resetState();
    if (shuffledQuestions.length > currentQuestionIndex) {
      showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
      endQuiz();
    }
  }, 1000);

  setStatusClass(document.body, correct);
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
    button.disabled = true; // disable all buttons
  });
}

function endQuiz() {
  alert(`Your score is ${score}/${shuffledQuestions.length}`);
  scoreElement.innerText = `Score: ${score}`;
  startQuiz();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

startQuiz();
showQuestion(shuffledQuestions[currentQuestionIndex]);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  resetState();
  if (shuffledQuestions.length > currentQuestionIndex) {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  } else {
    endQuiz();
  }
  scoreElement.innerText = `Score: ${score}`;
});

