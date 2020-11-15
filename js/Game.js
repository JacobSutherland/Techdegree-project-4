/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
let phraseOne = new Phrase('mario');
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
     startGame(){
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.getRandomPhrase();
        this.activePhrase()
        addPhraseToDisplay();
     }
     getRandomPhrase(){
        let randomPhraseGenerator = Math.floor((Math.random() * this.phrases.length));
        let currentPhrase = this.phrases[randomPhraseGenerator];
        this.activePhrase = currentPhrase;
        return currentPhrase;

     }
     handleInteraction(){

     }
     removeLife(){

     }
     checkForWin(){

     }
     gameOver(){

     }
 }

 let game = new Game();
 game.startGame();
 game,e.getRandomPhrase();