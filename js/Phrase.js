/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
        this.phrase = phrase.toLowerCase();
     }
     //Parses the classes phrase value by iterating each letter and creating an LI element / adding the appropriate classes to each LI
     addPhraseToDisplay(){
            const phrase = document.querySelector('#phrase ul');
            for(let char of this.phrase){
                if(char !== ' '){
                const letter = document.createElement('li');
                letter.textContent = char;
                letter.classList.add('hide', 'letter', char)
                phrase.appendChild(letter)
                } else {
                const space = document.createElement('li');
                space.classList.add('space');
                phrase.appendChild(space)
            }
        }
    }
    //Checks whether the phrase includes a players guess
    checkLetter(letter){
    if(this.phrase.includes(letter)){
        console.log(letter)
        const matched = document.getElementsByClassName(letter)
        return true
        } else {
        return false
        }
    }
    //Dsiplays matched values by adding the 'show' class to LI elements with the same class names as a users guesses
    showMatchedLetter(letter){
        const matched = document.getElementsByClassName(letter);
        for(let i = 0; i < matched.length; i++){
            matched[i].classList.remove("hide");
            matched[i].classList.add("show");
        }
    }
}


