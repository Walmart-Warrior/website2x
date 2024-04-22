const wordE1 = document.queryElementById('word')
const wrongLettersE1 = document.queryElementById('wrong-letters')
const playAgainBtn = document.queryElementById('play-again')
const popup = document.queryElementById('popup-container')
const notification = document.queryElementById('notification-container')
const finalMessage = document.queryElementById('final-message')
const figureParts = document.querySelectorAll('.figure-part')

const word = ['application', 'programming', 'interface', 'wizard']

let selectedIndex = Math.floor(word.length * Math.random())
let selectedWord = word[selectedIndex]
