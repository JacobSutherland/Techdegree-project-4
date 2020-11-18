/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startBtn = document.querySelector('#btn__reset');

let game = new Game();

startBtn.addEventListener('click', () => {
    game.startGame();
  })

  keyboard.addEventListener('click', (e) => {
    if(e.target.className === 'key'){
       const key = e.target;
    game.handleInteraction(key);
    console.log(key);
    }
  })