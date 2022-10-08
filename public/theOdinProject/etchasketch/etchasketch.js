
let eraser = false;

//create Grid
export function createGrid(z) {
  for (let i = 0; i < z; i ++){
    const row = document.createElement('div');
    row.style.cssText = 'flex:1 1 0 ; display:flex ;';
    board.appendChild(row);

    for (let x = 0; x < z; x ++){
      const gridItem = document.createElement('div');
      gridItem.classList.add("grid-item");
      row.appendChild(gridItem);
    }
  }
}
//----------------------------------------------

//Grid Slider function
export function rangeSlider(value) {
    let gridLabels = document.querySelectorAll('#range-value');
    for (let i = 0; i < gridLabels.length; i++) {
        gridLabels[i].textContent = value;
    }
    let rangeText = document.getElementById('range-text');
    rangeText.textContent = 'Grid size: ' + value + ' x ' + value;
    let z = value;
    deleteGrid();
    createGrid(z);
    listen();
}

function rangeSliderValue(value) {
    let gridLabels = document.querySelectorAll('#range-value');
    for (let i = 0; i < gridLabels.length; i++) {
        gridLabels[i].textContent = value;
    }
}


//----------------------------------------------
//Delete Grid function
function deleteGrid() {
  const container = document.querySelector('#board');
  while (container.firstChild) {
      container.removeChild(board.lastChild);
  }
}

//--------------------------------------------
//eraser buttons
export function toggleButton() {
  let eraserButton = document.getElementById('eraser-btn');
  if (eraser) {
    eraser = false;
    eraserButton.classList.remove('btn-on');
  } else {
    eraser = true;
    eraserButton.classList.add('btn-on');
  }
}
//----------------------------------------------
//Clear all function
export function eraseAllDivs() {
  let items = document.querySelectorAll(".grid-item");
  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#ffffff';
  }
}
//----------------------------------------------

//-----------------------------------------------
//For different colors, set variable to the ink color
let ink = '#000000'; //default black

export function setInk (x) {
  ink = x.target.value;
}
//--------------------------------------------------

//listening for click or hover on board elements
export function listen() {
  let items = document.querySelectorAll(".grid-item");
  for (let i = 0; i < items.length; i++) {
    //items[i].classList.add("found"); //check to see if the querySelectorAll is finding my grid items
    items[i].addEventListener('mousedown', drawOnClick);
    items[i].addEventListener('mouseenter', drawWhileClicked);
  }
  //draws while clicked function
  function drawWhileClicked(x) {
    if (mouse > 0) {
      if (eraser) {
        x.target.style.backgroundColor = '#ffffff';
      } else {
        x.target.style.backgroundColor = ink;
      }
    }
  }
  //changes color of grid items
  function drawOnClick(x) {
    if (eraser) {
      x.target.style.backgroundColor = '#ffffff';
    } else {
      x.target.style.backgroundColor = ink;
    }
  }

  //seeing if the mouse is down or not
  let mouse;
  document.body.onmousedown = function() {
    mouse = 0; //If user un-clicks outside of body, mouse will permanately be ++, makes it so mouse is zeroed every click
    mouse++;
  }
  document.body.onmouseup = function() {
    mouse--;
  }
}

//---------------------------------------------------
