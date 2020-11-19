/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.querySelector('#overlay');
const scoreboard = document.querySelector('#scoreboard ol');
const hearts = document.querySelectorAll('#scoreboard li img');
const keyboard = document.querySelector('#qwerty');
const keyrows = document.querySelectorAll('.keyrow button');

let phraseOne = new Phrase('mario is cool');
let phraseTwo= new Phrase('kirby');
let phraseThree = new Phrase('link');
let phraseFour = new Phrase('samus');
let phraseFive = new Phrase('yoshi');

 class Game {
     constructor(){
        this.missed = 0;
        this.phrases = [phraseOne, phraseTwo, phraseThree, phraseFour, phraseFive];
        this.activePhrase = null;
     }
     //removes the pregame overlay screen, selects a phrase, and appends it to the screen.
     startGame(){
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
     }
     //creates a random number based on the length of the game objects phrases array, then uses that random number to pass as an index value, finally returning that phrase as the current phrase.
     getRandomPhrase(){
        let randomPhraseGenerator = Math.floor((Math.random() * this.phrases.length));
        let currentPhrase = this.phrases[randomPhraseGenerator];
        this.activePhrase = currentPhrase;
        return currentPhrase;
     }
     //Assigns the appropriate class based on right or wrong guesses and disables key to corresponding guesses, then calls function to evaluate win or loss each turn.
   handleInteraction(key){
            key.disabled = true;
            if(this.activePhrase.phrase.includes(key.textContent)){
            key.classList.add('chosen')
            this.activePhrase.showMatchedLetter(key.textContent);
            this.checkForWin();
         } else {
            key.classList.add('wrong')
            this.removeLife();
         }
}
   //Increments the Games's missed property on each call from handleInteraction() until 5 while updating the hearts images
     removeLife(){
      this.missed += 1;
      hearts[this.missed - 1].src = '/images/lostHeart.png'
      if(this.missed === 5){
         this.gameOver('GOOD TRY, TAKE ANOTHER SHOT');
      }
     }
     //Checks each letter of the current phrase, if it contains classes belonging to guessed letters including spaces, a count is incremented until the count is equal to the length of the phrase indicating a win.
     checkForWin(){
      const phrase = document.querySelectorAll('#phrase li');
      let correct = 0;
        for(let letter of phrase){
            if(letter.classList.contains('show')||letter.classList.contains('space')){
               correct += 1;
            }
            if(correct === phrase.length && this.missed < 5){
               this.gameOver('WINNER');
            }
         }
     }
     //delegates the resukts of the game by displaying results based on where the function is called (removeLife () or CheckForWin()) where the corresponding result is passed as an argument. Also clears the game to initial starting state.
     gameOver(result){
      const gameOverMessage = document.querySelector('#game-over-message');
      const phraseUl = document.querySelector('#phrase ul');
      overlay.classList.remove('start');
      gameOverMessage.textContent = result;
      if(result === 'WINNER'){
         overlay.classList.remove('lose')
         overlay.classList.add('win');
      } else {
         overlay.classList.remove('win')
         overlay.classList.add('lose');
      }

      //game reset's by undoing all manipulated keys, properties, hearts, or related classes.
      overlay.style.display = 'initial';
      while(phraseUl.firstChild){
      phraseUl.removeChild(phraseUl.firstChild);
      }
      for(let key of keyrows){
         key.classList.remove('wrong', 'chosen', 'show');
         key.disabled = false;
      }
      for(let heart of hearts){
         heart.src = '/images/liveHeart.png'
      }
      this.missed = 0;
     }
 }







