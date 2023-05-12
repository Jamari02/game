import { animeNewGen} from './Questions.js'

// DOM elements
const questionElement = document.querySelector('#question')
const choicesElements = document.querySelectorAll('.choice-text')
const option1Element = document.querySelector('#choices1')
const option2Element = document.querySelector('#choices2')
const option3Element = document.querySelector('#choices3')
const option4Element = document.querySelector('#choices4')
const scoreElement = document.querySelector('#score')
const nxtBttn = document.querySelector('.nxt')
const startBttn = document.querySelector('.start');

// console.log("questions: ")
console.log(startBttn)
console.log(nxtBttn)


// Quiz variables
let currentQuestion = {}
let correctAnswer = true
let score = 0
let questionCount = 0
let questions = [...animeNewGen ]
let usedQuestions = []





// Constants
const HIGH_SCORE = 100
const QUESTION_AMOUNT = 9

// Create a copy of the questions array to avoid modifying the original array
let unusedQuestions = [...questions]

// Function to start the game
function startGame() {
    questionCount = 0
    score = 0
    console.log("starting!");
    nextQuestion()
}

// Function to display the next question
function nextQuestion() {
    if (unusedQuestions.length === 0 || questionCount >= QUESTION_AMOUNT) {
        console.log('end game')
        document.querySelector('.end').style.display = 'flex'
        // End the game if all questions have been asked or the question limit has been reached
        localStorage.setItem('currentScore', score)
    }

    console.log(correctAnswer); // add this line to log the value of correctAnswer
  


    // Increment the question count and display the progress text
    questionCount+1
    console.log(questionCount++)
    
    console.log(currentQuestion)
    // Choose a random question from the unused questions array
    const questionsIndex = Math.floor(Math.random() * unusedQuestions.length)
    currentQuestion = unusedQuestions[questionsIndex]

    // Check if the chosen question has already been used
    if (usedQuestions.includes(currentQuestion)) {
        // If the question has already been used, get another question
       return nextQuestion()
    }

    // Add the chosen question to the usedQuestions array
    usedQuestions.push(currentQuestion)

    // Display the question and answer choices
    questionElement.innerText = currentQuestion.questions
    option1Element.innerText = currentQuestion.answers[0]
    option2Element.innerText = currentQuestion.answers[1]
    option3Element.innerText = currentQuestion.answers[2]
    option4Element.innerText = currentQuestion.answers[3]

    // Shuffle the answer choices
    shuffleArray(currentQuestion.answers)

    const selectedQuestions = questions.slice(0, 10)

    correctAnswer = true
}
// This will ensure that each question is only asked once before the game ends.


    // Display the question and answer choices
    questionElement.innerText = questions[0].questions
    
    option1Element.innerText = questions[0].answers[0]
    
    option2Element.innerText = questions[0].answers[1]
    
    option3Element.innerText = questions[0].answers[2]
    
    option4Element.innerText = questions[0].answers[3]
    



    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

      choicesElements.innerText = questions[0].answers
      console.log(questions[0].answers)
      

      shuffleArray(questions);
      
    // Remove the chosen question from the unused questions array
    unusedQuestions.splice(questions, 1)

    correctAnswer = true



// Add event listeners to each answer choice
choicesElements.forEach(choices => {
    choices.addEventListener('click', e => {
        if (!correctAnswer) 

        // Mark the answer as incorrect if it is incorrect
        correctAnswer = false
        const pickedChoice = e.target
        const pickedAnswer = pickedChoice.dataset['number']
        let classToApply = pickedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        

        

        // Increment the score if the answer is correct
        if (classToApply === correctAnswer) {
            pickedChoice.parentElement.classList.add(correctAnswer)
            incrementScore(HIGH_SCORE)
        }
        
        

        // Add the appropriate class to the answer choice element and move to the next question
        pickedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            pickedChoice.parentElement.classList.remove(classToApply)
            nextQuestion()
        }, 1000)
    })
})




// Function to increment the score
function incrementScore(num) {
    score += num
    scoreElement.innerText = score
}



// Function to restart the game
function restartGame() {
    // Reset all variables to their initial values
    currentQuestion = {}
    correctAnswer = true
    score = 0
    questionCount = 0
    usedQuestions = [0]
    unusedQuestions = [...questions]

    // Start the game again
    startGame()
}


// Add event listeners 
const restartButton = document.querySelector('.restart')
restartButton.addEventListener('click', restartGame)
startBttn.addEventListener('click', startGame);
choices1.addEventListener('click', nextQuestion)
choices2.addEventListener('click', nextQuestion)
choices3.addEventListener('click', nextQuestion)
choices4.addEventListener('click', nextQuestion)


