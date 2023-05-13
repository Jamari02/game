
// DOM elements
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('question-container')
let randomQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let correctAnswer = []
const MAX_QUESTIONS = 10

const highScore = document.getElementById('highScore')

// Variables
let questions = [
  {
    questions: 'In Jujutsu Kaisen what is the name for Gojos eyes?',
    answers: ['All seeing', 'God eyes', 'Six eyes', 'Eyes of destiny'],
    answer: 'Six eyes'
  },
  {
    questions: 'Who killed Noelles mother in black clover?',
    answers: ['Vanica', 'Dante', 'Zenon', 'She died from a disease'],
    answer: 'Vanica'
  },
  {
    questions: 'Where did Tanjiro learn the Hinokami Kaguara from?',
    answers: [
      'He acted on pure instinct',
      'His Father',
      'A lonely old man',
      'Scrolls he found while training'
    ],
    answer: 'His Father'
  },
  {
    questions: 'How did Pochita become Denjis heart in Chainsaw Man? ',
    answers: [
      'Denji ate Pochita',
      'A contract after Denji died',
      'Open heart surgery to save his life',
      'Another devil forced them together'
    ],
    answer: 'A contract after Denji died'
  },
  {
    questions: 'How many users of one for all have existed?',
    answers: ['4', '7', '9', '8'],
    answer: '9'
  },
  {
    questions: 'Who is the number 1 Hero in One Punch Man ',
    answers: ['Saitama', 'Tatsumaki', 'Blast', 'Flashy Flash'],
    answer: 'Blast'
  },
  {
    questions: 'Who’s Mob’s mentor in Mob Psycho 100?',
    answers: ['Reigen', 'Dimple', 'Ritsu', 'Teruki'],
    answer: 'Reigen'
  }

]

// Start game function, once you click on the start game button this function will execute
function startGame() {
console.log('Started')
startButton.classList.add('hide')
randomQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerEl.classList.remove('hide')
nextQuestion()
}

function nextQuestion() {
    resetState()
   showQuestion(randomQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.questions
    question.answers.forEach(answer => {
        const button =document.createElement('button')
        button.innerText = answer
        button.classList.add('btn')
        if(answer === question.answer) {
            button.dataset.correct = true
            correctAnswer.push(answer)
            console.log(correctAnswer)
            highScore.innerText = correctAnswer.length
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    }) 
    if (randomQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }

  

function setStatusClass(element, correctAnswer) {
    clearStatusClass(element)
    if(correctAnswer) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


//Event Listeners
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

