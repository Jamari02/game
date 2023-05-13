// Dom Elememnts
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const submitButton = document.getElementById('submit')
const restartButton = document.getElementById('restart')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreText = document.getElementById("score");

//Randomize Questions
let shuffledQuestions, currentQuestionIndex
let score = 0;

restartButton.addEventListener('click', restartGame)
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
submitButton.addEventListener('click', showScore)

let executed = false;
function startGame() {
  if (!executed) {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() * questions)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    executed = true;

  }

}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', function(e){
        selectAnswer(e, answer);
    }, false);

    if (currentQuestionIndex  < shuffledQuestions.length + 1) {
        answerButtonsElement.appendChild(button)
    }
    
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e, answer) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (answer.correct) {
    score++;
  }
  
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    submitButton.classList.remove('hide')
    restartButton.classList.remove('hide')
  }

}

function showScore () {
    document.getElementById("score").innerHTML = "you got " + score + " correct.";
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function restartGame() {
    // Reset the current question index and score
    currentQuestionIndex = 0;
    score = 0;
  
    // Clear the answer buttons
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  
    // Hide the submit and restart buttons
    submitButton.classList.add('hide');
    restartButton.classList.add('hide');
  
    // Show the question container and start the game
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
  }
  

const questions = [
    {

    question: 'Who killed Noelles mother in black clover?',
    answers: [{
        text: 'Dante',
        correct: false
    },
     {
        text: 'Vanica',
        correct: true
      },
      {
        text: 'Zenon',
        correct: false
      },
      {
        text: 'She died from a disease',
        correct: false
      }
    ]
  },
  {
    question: 'In Jujutsu Kaisen what is the name for Gojos eyes?',
    answers: [{
        text: 'Six eyes',
        correct: true
      },
      {
        text: 'All Seeing',
        correct: false
      },
      {
        text: 'Eyes of destiny',
        correct: false
      },
      {
        text: 'God eyes',
        correct: false
      }
    ]
  },
  {
    question: 'Where did Tanjiro learn the Hinokami Kaguara from?',
    answers: [{
        text: 'He acted on pure instinct',
        correct: false
      },
      {
        text:  'A lonely old man',
        correct: false
      },
      {
        text: 'His Father',
        correct: true
      },
      {
        text: 'Scrolls he found while training',
        correct: false
      }
    ]
  },
  {
    question: 'How did Pochita become Denjis heart in Chainsaw Man? ',
    answers: [{
        text: 'Denji ate Pochita',
        correct: false
      },
      {
        text: 'Open heart surgery to save his life',
        correct: false
      },
      {
        text: 'Another devil forced them together',
        correct: false
      },
      {
        text: 'A contract after Denji died',
        correct: true
      }
    ]
  },
  {
    question: 'How many users of one for all have existed?',
    answers: [{
        text: '9',
        correct: true
      },
      {
        text: '7',
        correct: false
      },
      {
        text: '8',
        correct: false
      },
      {
        text: '4',
        correct: false
      }
    ]
  },
  {
    question: 'Who is the number 1 Hero in One Punch Man ',
    answers: [{
        text: 'Saitama',
        correct: false
      },
      {
        text: 'Tatsumaki',
        correct: false
      },
      {
        text: 'Blast',
        correct: true
      },
      {
        text: 'Flashy Flash',
        correct: false
      }
    ]
  },
  {
    question: 'Who’s Mob’s mentor in Mob Psycho 100?',
    answers: [{
        text: 'Reigen',
        correct: true
      },
      {
        text: 'Dimple',
        correct: false
      },
      {
        text: 'Ritsu',
        correct: false
      },
      {
        text: 'Teruki',
        correct: false
      }
    ]
  },
  {
    question:  'How long was Senku petrified?',
    answers: [{
        text: ' 5000 years ',
        correct: false
      },
      {
        text: ' 2585 years ',
        correct: false
      },
      {
        text: '3700 years',
        correct: true
      },
      {
        text: '800 years',
        correct: false
      }
    ]
  },
  {
    question:  ' In The Promised Neverland what is the relationship between Ray and Isabel?',
    answers: [{
        text: 'Foster family',
        correct: false
      },
      {
        text: 'Sister/ Brother',
        correct: false
      },
      {
        text: 'Mother/ Son',
        correct: true
      },
      {
        text: 'Aunt/ Nephew',
        correct: false
      }
    ]
  },
  {
    question: 'Who is considered the strongest character in the story of Vinland Saga?',
    answers: [{
        text: ' Thorkell',
        correct: false
      },
      {
        text: ' Floki ',
        correct: false
      },
      {
        text: 'Askeladd',
        correct: false
      },
      {
        text: 'Thors ',
        correct: true
      }
    ]
  }
]