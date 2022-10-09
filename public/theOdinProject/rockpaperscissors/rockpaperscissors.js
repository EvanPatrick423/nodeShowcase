export function startRPS () {
  //Declare needed variables----------------------------------------------
  let playerScore = 0;
  let computerScore = 0;
  let rawPlayerInput;
  let playerInput;
  let computerSelection = 'nothing';
  let selection;
  let sum;

  //------------------------------------------------------------------------
  //Takes action selected, handles css, also sets x to choice---------------
  function select(x){
    if (x === 'rock'){
      rck.classList.add("RPSbtn-on");                              //style.cssText = 'background: blue; color: white';
      pap.classList.remove("RPSbtn-on");
      sci.classList.remove("RPSbtn-on");
      //Go ahead and link the next logical thing to do. Link the playRound
      //function, into select. So it's one seemless interaction
      playRound(x);
    } else if (x === 'paper'){
      pap.classList.add("RPSbtn-on");
      rck.classList.remove("RPSbtn-on");
      sci.classList.remove("RPSbtn-on");
      playRound(x);
    } else if (x === 'scissors'){
      sci.classList.add("RPSbtn-on");
      rck.classList.remove("RPSbtn-on");
      pap.classList.remove("RPSbtn-on");
      playRound(x);
    } else {
      alert("ERROR no match found for choice variable in select function. Or you have not selected a choice")
    }
  }
  //------------------------------------------------------------------------
  //links the select function with respective argument to their buttons-----
  const rck = document.querySelector('#rock');
  rck.onclick = () => select('rock');

  const pap = document.querySelector('#paper');
  pap.onclick = () => select('paper');

  const sci = document.querySelector('#scissors');
  sci.onclick = () => select('scissors');
  //------------------------------------------------------------------------
  //creating score board and message--------------------
  const current = document.querySelector('#current');
  const choice = document.createElement('p1');
  choice.textContent = 'The computers choice will be randomly selected';
  current.appendChild(choice)

  const plyrScore = document.createElement('h2');
  plyrScore.textContent = 'Player: ' + playerScore.toString();
  current.appendChild(plyrScore);

  const compSco  = document.createElement('h2');
  compSco.textContent = 'Computer: ' + computerScore.toString();
  current.appendChild(compSco);

  const message = document.querySelector('#message');
  const info = document.createElement('p1');
  info.textContent = 'This is rock paper scissors, click a button to play a round. Best out of 5.';
  message.appendChild(info);


  //function that takes selection as playerInput and does all logic for game
  function playRound (playerInput){
    sum = playerScore + computerScore;
    if (sum < 5){
      for (let i = 0; i < 1; i ++) {
        //Making the random computer answer ----------------------------------
        let random = Math.random();
        //console.log('Round ' + i + ' random is ' + random);
        //--------------------------------------------------------------------
        //from random to actual choice of string -----------------------------
        if (random < 0.333){
          computerSelection = 'rock';
          choice.textContent = 'The computer chose ' + computerSelection + ' last round';
        } else if (random > 0.333 && random < 0.666){
          computerSelection = 'paper';
          choice.textContent = 'The computer chose ' + computerSelection + ' last round';
        } else {
          computerSelection = 'scissors';
          choice.textContent = 'The computer chose ' + computerSelection + ' last round';
        }
        //console.log('computerSelection is ' + computerSelection);
        //--------------------------------------------------------------------

        if (computerSelection === playerInput) {
          //Generalized Tie scenario
          info.textContent = 'It was a tie';
          break;
        }
          //All losing scenarios
          else if (computerSelection === 'rock' && playerInput === 'scissors'){
          computerScore += 1;
          compSco.textContent = 'Computer: ' + computerScore.toString();
          info.textContent = 'Rock breaks scissors. You lose :(';
        } else if (computerSelection === 'paper' && playerInput === 'rock'){
          info.textContent = 'Paper covers rock. You lose :(';
          computerScore += 1;
          compSco.textContent = 'Computer: ' + computerScore.toString();
        } else if (computerSelection === 'scissors' && playerInput === 'paper'){
          info.textContent = 'Scissors cut paper. You lose :(';
          computerScore += 1;
          compSco.textContent = 'Computer: ' + computerScore.toString();
        }
          //All winning scenarios-----------------------------------------------
          else if (playerInput === 'rock' && computerSelection === 'scissors'){
          info.textContent = 'Rock breaks scissors. You win :)';
          playerScore += 1;
          plyrScore.textContent = 'Player: ' + playerScore.toString();
        } else if (playerInput === 'paper' && computerSelection === 'rock'){
          info.textContent = 'Paper covers rock. You win :)';
          playerScore += 1;
          plyrScore.textContent = 'Player: ' + playerScore.toString();
        } else if (playerInput === 'scissors' && computerSelection === 'paper'){
          info.textContent = 'Scissors cut paper. You win :)';
          playerScore += 1;
          plyrScore.textContent = 'Player: ' + playerScore.toString();
        }
          //Error Scenario------------------------------------------------------
          else {
          info.textContent = 'Something went wrong! Your potential victory or defeat is lost to time.';
          break;
        }
      }
    } else {}
    sum = playerScore + computerScore;
    console.log('sum is ' + sum);
    if (sum >= 5 && playerScore > computerScore){
      choice.textContent = 'The player won!!! They got the most out of 5 rounds';
    } else if (sum >= 5 && playerScore < computerScore){
      choice.textContent = 'The computer won!!! It got the most out of 5 rounds';
    } else {}


  }
}
