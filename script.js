import { animeRandom, animeBig3, animeNewGen, mangaRandom, mangaBig3, mangaNewGen } from './Questions.js'

// Render questions and answers


const question = document.querySelector('#question') 
const choices = document.querySelectorAll('#choice-text')
const scoreText = document.querySelector('#score')
const progressText = document.querySelector('#progressText')

let currentQuestion = {}
let correctAnswer = true
let score = 0
let questionCount = 0

let questions = [animeNewGen]
console.log(questions)

const HIGH_SCORE = 100
const QUESTION_AMOUNT = 10
let unusedQuestions = [...questions]

let startGame = () => {
    questionCount = 0
    score = 0
    nextQuestion()
}

let nextQuestion = () => {
    if(unusedQuestions?.length === 0 || questionCount >= QUESTION_AMOUNT) {
       localStorage.setItem('currentScore', score)
       return window.location.assign('end.html')
    }
    questionCount++
    progressText.innerText = `Question ${questionCount} of ${QUESTION_AMOUNT}` 

    const questionsIndex = Math.floor(Math.random() * unusedQuestions.length)

    currentQuestion = unusedQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    unusedQuestions.splice(questionsIndex, 1)

    correctAnswer = true
}

choices.forEach(choice => {
    // choice.innerText = questions[0].

    choice.addEventListener('click', e => {
        if(!correctAnswer) return

        correctAnswer = false
        const pickedChoice = e.target
        const pickedAnswer = pickedChoice.dataset['number']

        let classApply = pickedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classApply === 'correct') {
            incrementScore(HIGH_SCORE)
        }

        pickedChoice.parentElement.classList.add(classApply)

        setTimeout(() => {
            pickedChoice.parentElement.classList.remove(classApply)
            nextQuestion()
        }, 1000)
    })
})

let incrementScore = (num) => {
    score += num
    scoreText.innerText = score
}

startGame()