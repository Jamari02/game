import { animeRandom, animeBig3, animeNewGen, mangaRandom, mangaBig3, mangaNewGen } from './Questions.js'
  
  let score = 0;
  let questionCounter = 0;
  
  function loadQuestion() {
    const currentQuestion = animeBig3[questionCounter];
    const questionElement = document.getElementById("question");
    questionElement.innerHTML = currentQuestion.question;
  
    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";
    for (let i = 0; i < currentQuestion.options.length; i++) {
      const option = currentQuestion.options[i];
      const button = document.createElement("button");
      button.innerHTML = option;
      button.onclick = function() {
        checkAnswer(option);
      }
      optionsElement.appendChild(button);
    }
  }
  
  function checkAnswer(option) {
    const currentQuestion = quizData[questionCounter];
    if (option === currentQuestion.answer) {
      score++;
    }
    questionCounter++;
    if (questionCounter >= quizData.length) {
      endQuiz();
    } else {
      loadQuestion();
    }
  }
  
  function endQuiz() {
    const quizElement = document.getElementById("quiz");
    quizElement.innerHTML = `<h2>Quiz complete</h2><p>Your score is ${score} out of ${quizData.length}.</p>`;
  }
  
  loadQuestion();
  