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

const correctLetters = []
const wrongLetters = []

//Show hidden word
function displayWord() {
    wordE1.innerHTML = `
        ${selectedWord
            .split('')
            .map(letter => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ''}
                </span>
            `).join('')
        }
    `

    const innerWord = wordE1.innerText.replace(/\n/g, '')
    console.log(wordE1.innerText, innerWord)
}

displayWord()
