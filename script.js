const questions = [
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
      { text: "One", correct: false },
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
      { text: "The lord of the Rings: The Return of the King", correct: false },
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
      { text: "Judas and the Black Messiah", correct: false },
    ],
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
    question: "In which movie do the Avengers make up?",
    answers: [
      { text: "The Avengers", correct: false },
      { text: "Captain America: Civil War", correct: true },
      { text: "Avengers: End game", correct: false },
      { text: "Dr Strange", correct: false },
    ],
  },

    {
      question: "What is the name of the hobbit played by Elijah Wood in the 'Lord of the Rings' trilogy?",
      answers: [
        { text: "Frodo Baggins", correct: true },
        { text: "Samwise Gamgee", correct: false },
        { text: "Meriadoc Brandybuck", correct: false },
        { text: "Peregrin Took", correct: false },
      ],
    },
    {
      question: "Who directed the movie 'Inception'?",
      answers: [
        { text: "Christopher Nolan", correct: true },
        { text: "Martin Scorsese", correct: false },
        { text: "Steven Spielberg", correct: false },
        { text: "Quentin Tarantino", correct: false },
      ],
    },
    {
      question: "What is the name of the superhero played by Chadwick Boseman in the movie 'Black Panther'?",
      answers: [
        { text: "T'Challa", correct: true },
        { text: "Erik Killmonger", correct: false },
        { text: "N'Jobu", correct: false },
        { text: "M'Baku", correct: false },
      ],
    },
      {
        question: "What is the name of the superhero played by Ryan Reynolds who gains superpowers from a rogue experiment?",
        answers: [
          { text: "Iron Man", correct: false },
          { text: "Green Lantern", correct: false },
          { text: "Deadpool", correct: true },
          { text: "Spider-Man", correct: false },
        ],
      },
      {
        question: "Who played the role of Katniss Everdeen in The Hunger Games movies?",
        answers: [
          { text: "Emma Watson", correct: false },
          { text: "Jennifer Lawrence", correct: true },
          { text: "Shailene Woodley", correct: false },
          { text: "Lily Collins", correct: false },
        ],
      },
      {
        question: "Which of the following actors played the role of Batman in The Dark Knight trilogy directed by Christopher Nolan?",
        answers: [
          { text: "George Clooney", correct: false },
          { text: "Christian Bale", correct: true },
          { text: "Ben Affleck", correct: false },
          { text: "Val Kilmer", correct: false },
        ],
      },
      {
        question: "What is the name of the alien in the movie E.T. the Extra-Terrestrial?",
        answers: [
          { text: "ALF", correct: false },
          { text: "Yoda", correct: false },
          { text: "E.T.", correct: true },
          { text: "Mork", correct: false },
        ],
      },
    
    {
      question: "Who played the character of Joker in the 2019 movie 'Joker'?",
      answers: [
        { text: "Joaquin Phoenix", correct: true },
        { text: "Heath Ledger", correct: false },
        { text: "Jack Nicholson", correct: false },
        { text: "Jared Leto", correct: false },
      ],
    },
    {
      question: "What is the name of the alien character played by Scarlett Johansson in the movie 'Under the Skin'?",
      answers: [
        { text: "Isserley", correct: false },
        { text: "Laura", correct: false },
        { text: "Gloria", correct: false },
        { text: "The Female", correct: true },
      ],
    },
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const scoreElement = document.getElementById("score");
  const nextButton = document.getElementById("next-button");
  const tryAgainBtn = document.querySelector("#try-again-btn");
  tryAgainBtn.addEventListener("click", resetQuiz);
  
  let shuffledQuestions, currentQuestionIndex;
  let score = 0;
  
  function resetQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    scoreElement.innerText = "Score: 0";
    resetState();
    showQuestion(questions[currentQuestionIndex]);
  }
  
  function startQuiz() {
    shuffledQuestions = shuffle(questions);
    currentQuestionIndex = 0;
    score = 0;
  }
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function showQuestion(question) {
    resetState(); 
    if (!question) {
      
      
    }
  
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.answerCorrect = answer.correct;
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
    const answerCorrect = selectedButton.dataset.answerCorrect;
    if (answerCorrect) {
      score++;
      scoreElement.innerText = `Score: ${score}`;
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
  
    setStatusClass(document.body, answerCorrect);
    Array.from(answerButtons.children).forEach(button => {
      setStatusClass(button, button.dataset.answerCorrect);
    });
  }
  
  
  function setStatusClass(element, answerCorrect) {
    clearStatusClass(element);
    if (answerCorrect) {
      element.classList.add("correct");
    } else {
      element.classList.add("wrong");
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
  }
  function startQuiz() {
    shuffledQuestions = shuffle(questions);
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("intro").classList.add("hide");
    document.getElementById("quiz").classList.remove("hide");
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }
  
  
  const tryAgainButton = document.getElementById("try-again-btn");
  
  tryAgainButton.addEventListener("click", function() {
    location.reload();
  });
  function endQuiz() {
    resetState();
    questionElement.innerText = `Final score: ${score}`;
    scoreElement.classList.add("hide");
    tryAgainBtn.classList.remove("hide");
  }
  function endQuiz() {
    questionElement.innerText = `"Quiz complete!😊 
    You scored ${score} out of ${questions.length}.`;
    answerButtons.classList.add("hide");
    nextButton.classList.add("hide");
    tryAgainBtn.classList.remove("hide");
  }
  
  function resetQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    scoreElement.innerText = "Score: 0";
    resetState();
    answerButtons.classList.remove("hide");
    tryAgainBtn.classList.add("hide");
    shuffledQuestions = shuffle(questions);
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }
  
  const startButton = document.getElementById("start-button");
const startPage = document.getElementById("start-page");

startButton.addEventListener("click", () => {
  startPage.classList.add("hide");
  startQuiz();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
});
