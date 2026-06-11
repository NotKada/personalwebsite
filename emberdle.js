let theword = "EMBER"
let row = 1
let letter = 1

let currentWord = ""

let validWords = new Set();
fetch("emberdlewords.txt")
    .then(response => response.text())
    .then(text => {
        validWords = new Set(
            text
                .split("\n")
                .map(word => word.trim().toLowerCase())
                .filter(word => word.length === 5)
        );
    });

function isValidWord(word) {
    return validWords.has(word.toUpperCase());
}

function replaceChar(str, index) {
    return str.slice(0, index) + "-" + str.slice(index + 1);
}

window.addEventListener("keydown", function(key){
    if (key.key.length == 1) {
        if (currentWord.length < 5) {
            let nowletter = key.key.toUpperCase()

            currentWord += nowletter
            
            let thisrow = this.document.getElementById(`word-row${row}`)
            let thisletter = thisrow.querySelector(`#letter${letter}`)
            thisletter.textContent = nowletter

            letter += 1
        }

    } else if (key.key == "Backspace") {
        if (letter > 1) {
            currentWord = currentWord.slice(0, -1)
            letter -= 1

            let thisrow = this.document.getElementById(`word-row${row}`)
            let thisletter = thisrow.querySelector(`#letter${letter}`)
            thisletter.textContent = ""
        }
    } else if (key.key == "Enter") {
        if (currentWord.length == 5 )  { //&& isValidWord(currentWord)
            let thisrow = this.document.getElementById(`word-row${row}`)
            
            let tempword = theword
            for (let i = 0; i < 5; i++) {
                let thisletter = thisrow.querySelector(`#letter${i+1}`)

                if (currentWord.charAt(i) == tempword.charAt(i)) {
                    tempword = replaceChar(tempword, i)
                    thisletter.parentElement.classList.add("correct-letter")

                    console.log(tempword)
                } else {
                    let found = false
                    for (let j = 0; j < 5; j++) {
                        if (currentWord.charAt(i) == tempword.charAt(j) && found == false) {
                            tempword = replaceChar(tempword, i)
                            thisletter.parentElement.classList.add("missplaced-letter")

                            console.log(tempword)
                            found = true
                        }
                        if (found == false) {
                            thisletter.parentElement.classList.add("incorrect-letter")
                        }
                    }
                }
            }       

            currentWord = ""
            letter = 1
            if (row < 6) {
                row += 1
            }
        }
    }
})