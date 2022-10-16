export function startTicTacToe() {
  const score = (() => {
    let oScore;
    let xScore ;

    const getScore = () => {
       oScore = turn.playero.score;
       xScore = turn.playerx.score;
      //console.log('oScore = ' + oScore);
      //console.log('xScore = ' + xScore);

      deleteDisplay();
      generateDisplay();
    }

    const deleteDisplay = () => {
      const container = document.querySelector('#scoreBoard');
      while (container.firstChild) {
        container.removeChild(scoreBoard.lastChild);
      }
      const container2 = document.querySelector('#buttonPlace');
      while (container2.firstChild) {
        container2.removeChild(buttonPlace.lastChild);
      }
    }

    const generateDisplay = () => {
      for (let i = 0; i < 2; i++) {
        const playerScore = document.createElement('div');
        playerScore.classList.add('score-board');
        if (i === 1) {
          //console.log('ran1');
          let text = document.createTextNode('Blue Player Score = ' + oScore);
          playerScore.appendChild(text);
          //deleteDisplay();
          scoreBoard.appendChild(playerScore);
        } else {
          //console.log('ran else');
          let text = document.createTextNode('Green Player Score = ' + xScore);
          playerScore.appendChild(text);
          //deleteDisplay();
          scoreBoard.appendChild(playerScore);
        }
      }
      const playButton = document.createElement('button');
      playButton.classList.add('play-button');
      playButton.addEventListener('click', board.resetBoard);
      const buttonText = document.createTextNode('New Game!');
      playButton.appendChild(buttonText);
      buttonPlace.appendChild(playButton);
    }

    return{getScore}
  })();

  //----------------Make Board Objects----------------------
  const boardItem = (place) => {
    let name = 'z';
    return{place, name}
  }
  const board = (() => {
    let turncount = 0;
    let stillPlay = true;
    //thing that holds the board values
    const values = [[boardItem(0),boardItem(1),boardItem(2)],[boardItem(3),boardItem(4),boardItem(5)],[boardItem(6),boardItem(7),boardItem(8)]];

    const printBoard = () => {
      console.log(values);
    }

    const write = (row, column, player) => {
      //console.log(values[row][column]);
      let thing = values[row][column].name;
      //console.log(thing);
      if (thing === 'x') {
        //console.log('blah1');
      } else if (thing === 'o'){
        //console.log('blah2');
      }
        else {
          if (stillPlay) {
            turncount ++;
            //console.log(turncount);

            values[row][column].name = player;
            turn.whosTurn();
            winCheck('x');
            winCheck('o');
          }
      }
      board.deleteBoard();
      board.updateDisplay();

      //board.printBoard();
    }

    const updateDisplay = () => {
      //printBoard();
      for (let i = 0; i < 3; i++) {
        const row = document.createElement('div');
        row.classList.add('tacRow');
        playBoard.appendChild(row);

        for (let z = 0; z < 3; z++) {
          const item = document.createElement('div');
          item.classList.add('item');

          let value = values[i][z].name;
          if (value === 'x') {
            item.classList.add('playerx');
          } else if (value === 'o') {
            item.classList.add('playero')
          } else {

          }

          item.addEventListener('click', () => {
            let data = turn.setTurnOutput();
            let player = data.x
            //console.log(player);
            write(i,z,player);

          });
          row.appendChild(item);
        }
      }
    }

    const winCheck = (check) => {
      //console.log('check: ' + check);
      //console.log('values: ' + values[0][0].name + ' ' + values[0][1].name + ' ' + values[0][2].name);
      if (values[0][0].name === check && values[0][1].name === check && values[0][2].name === check) {
        endGame(check);
      } else if (values[1][0].name === check && values[1][1].name === check && values[1][2].name === check) {
        endGame(check);
      } else if (values[2][0].name === check && values[2][1].name === check && values[2][2].name === check) {
        endGame(check);
      } else if (values[0][0].name === check && values[1][0].name === check && values[2][0].name === check) {
        endGame(check);
      } else if (values[0][1].name === check && values[1][1].name === check && values[2][1].name === check) {
        endGame(check);
      } else if (values[0][2].name === check && values[1][2].name === check && values[2][2].name === check) {
        endGame(check);
      } else if (values[0][0].name === check && values[1][1].name === check && values[2][2].name === check) {
        endGame(check);
      } else if (values[0][2].name === check && values[1][1].name === check && values [2][0].name === check) {
        endGame(check);
      } else if (turncount === 9){
        endGame('bleh');
      }
    }

    const endGame = (check) => {
      stillPlay = false;
      //console.log('Game Ended');
      if (check === turn.playero.name) {
        turn.playero.score ++;
        //console.log(turn.playero);
      } else if (check === turn.playerx.name) {
        turn.playerx.score ++;
        //console.log(turn.playerx);
      }
      score.getScore();

    }

    const deleteBoard = () => {
      const toDelete = document.querySelector('#playBoard')
      while (toDelete.firstChild) {
        toDelete.removeEventListener('click', () => {
          write(i,z,player);
        });
        toDelete.removeChild(playBoard.lastChild);
      }
    }

    const resetBoard = () => {
      if (stillPlay) {

      } else {
          //console.log('reset ran');
          for (let i = 0; i < 3; i++){
            for (let z =0; z < 3; z++){
              values[i][z].name = 'z';
              write(i,z,'z');
            }
          }
          turncount = 0;
          stillPlay = true;
          //printBoard();
        }
      }



    return{printBoard, write, updateDisplay, deleteBoard, resetBoard};
  })();

  //console.log(board.values);

  const playerFactory = (name, score) => {
    return {name, score};
  }

  const turn = (() => {
    const playerx = playerFactory('x',0);
    const playero = playerFactory('o',0);

    let counter = 0;

    const playerXTurn = () => {
      counter++;
    }
    const playerOTurn = () => {
      counter--;
    }
    let turnOutput;
    const whosTurn = () => {
      //console.log('whosturn ran');
      if (counter === 0) {
        turnOutput = playerx.name;
        playerXTurn();
        //sayCounter();
      } else if (counter === 1) {
        turnOutput = playero.name;
        playerOTurn();
        //sayCounter();
      } else {
        console.log('something went wrong');
      }
      return{turnOutput}
    }
    const sayTurnOutput = () => {
      //console.log(turnOutput);
    }

    const setTurnOutput = () => {
      let x = turnOutput;
      return{x}
    }

    return{whosTurn, sayTurnOutput, turnOutput, setTurnOutput,playerx, playero}
  })();


  board.updateDisplay();
  turn.whosTurn(); //Always have turn functions using turnOutput after this
  //board.printBoard();
  score.getScore();

}
