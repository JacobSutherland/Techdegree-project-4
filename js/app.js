/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startBtn = document.querySelector('#btn__reset');
const heading = document.querySelector('#banner');
let game;

//Adds click event to start game button, reassigns the hoisted game variable for each new game instance, and starts game.
startBtn.addEventListener('click', () => {
  game = new Game();
  game.startGame();
  hint();
  })

  //Adds an event to the game screen keyboard and passes the event object from said event to handleInteraction() function on game object.
  keyboard.addEventListener('click', e => {
    if(e.target.className === 'key'){
      const key = e.target;
      game.handleInteraction(key);
    }
  })

  //Adds an event to keydowns, loops over the game screen keyboard and if it isn't an incorrect guess, passes the event object to the handleInteraction() function.
  document.addEventListener('keydown', e =>{
    let keyDown = e.code.slice(3).toLowerCase()
      for(let key of keyrows){
        if(key.textContent === keyDown && key.classList.contains('wrong') == false){
          game.handleInteraction(key);
        }
      }
  })

  function hint(){
    const hintP = document.createElement('p');
    hintP.textContent = game.activePhrase.category.toUpperCase();
    hintP.style.color = '#4E85BE';
    heading.appendChild(hintP);
    }