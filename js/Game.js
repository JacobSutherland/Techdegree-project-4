/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const startBtn = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');
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
     //applies the appropriate CSS class based on correct or incorrect selection by comparing the key's (target) text  to letters inside the game objects active phrase, finally shows letters or removes hearts via methods.
     handleInteraction(){
      const keyboard = document.querySelector('#qwerty');

      keyboard.addEventListener('click', e => {
         if(e.target.className === 'key'){
            const key = e.target;
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
      });
     }
     removeLife(){
      const scoreboard = document.querySelector('#scoreboard ol');
      const hearts = document.querySelectorAll('#scoreboard li img');
      const body = document.querySelector('body')
      this.missed += 1;
      hearts[this.missed - 1].src = '/images/lostHeart.png'
      if(this.missed === 5){
         this.gameOver('GOOD TRY, TAKE ANOTHER SHOT');
      }
     }
     checkForWin(){
      const phrase = document.querySelectorAll('#phrase li');
      let correct = 0;
      let endGame = false;
      console.log(phrase)
        for(let letter of phrase){
            if(letter.classList.contains('show')){
               correct += 1;
               console.log(correct)
            }
            if(correct === phrase.length && this.missed < 5){
               endGame = true;
               this.gameOver('WINNER');
            }
         }
     }
     gameOver(result){
      const gameOverMessage = document.querySelector('#game-over-message');
      overlay.classList.remove('start');
      gameOverMessage.textContent = result;
      overlay.style.display = 'initial';
      if(result === 'WINNER'){
         overlay.classList.add('win');
      } else {
         overlay.classList.add('lose');
      }
     }
 }


 startBtn.addEventListener('click', () => {
   let game = new Game();
   game.startGame();
   game.handleInteraction();
 })
 