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

    if (innerWord == selectedWord) {
        finalMessage.innerText = 'Congratulations! You Won!'
        popup.style.display = 'flex'
    }
}

//Update the wrong letters
function updateWrongLettersEl() {
    console.log('update wrong')
}

//Show notification
function showNotification() {
    notification.classList.add('show')

    setTimeout(() => {
        notification.classList.remove('show')
    }, 2000)
}


// Keydown letter press
window.addEventListener('keydown', e => {

    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter)

                displayWord()
            } else {
                showNotification()
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter)

                updateWrongLettersEl()
            } else {
                showNotification()
            }
        }
    }

})

displayWord()
