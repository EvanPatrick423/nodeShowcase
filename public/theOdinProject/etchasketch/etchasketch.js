
  //create Grid
  function createGrid(z) {
    for (let i = 0; i < z; i ++){
      const row = document.createElement('div');
      row.style.cssText = 'flex:1 1 0 ; display:flex ;';
      board.appendChild(row)

      for (let x = 0; x < z; x ++){
        const gridItem = document.createElement('div');
        gridItem.classList.add("grid-item");
        row.appendChild(gridItem);
      }
    }
  }
  //inital grid creation
  createGrid(48);
  //----------------------------------------------

  //Grid Slider function
  function rangeSlider(value) {
      let gridLabels = document.querySelectorAll('#range-value');
      for (let i = 0; i < gridLabels.length; i++) {
          gridLabels[i].textContent = value;
      }
      z = value;
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
        container.removeEventListener('mousedown', drawOnClick);
        container.removeEventListener('mouseenter', drawWhileClicked);
        container.removeChild(board.lastChild);
    }
  }

  //--------------------------------------------
  //eraser buttons
  let eraser = false;
  const eraserButton = document.querySelector('#eraser-btn');
  eraserButton.addEventListener('click', () => {
    if (eraser) {
      eraser = false;
      eraserButton.classList.remove('btn-on');
    } else {
      eraser = true;
      eraserButton.classList.add('btn-on');
    }
  })
  //----------------------------------------------
  //Clear all button
  const eraseAllButton = document.querySelector('#erase-all');
  eraseAllButton.addEventListener('click', () => {
    items = document.querySelectorAll(".grid-item");
    for (i = 0; i < items.length; i++) {
      items[i].style.backgroundColor = '#ffffff';
    }
  })
  //----------------------------------------------
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
  //-----------------------------------------------
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
  //--------------------------------------------------
  //For different colors, set variable to the ink color
  let ink = '#000000'; //default black

  const colorPicker = document.querySelector('#color-select');
  colorPicker.addEventListener("input", x => {
    ink = x.target.value;
  })


  //listening for click or hover on board elements
  function listen() {
    items = document.querySelectorAll(".grid-item");
    for (i = 0; i < items.length; i++) {
      //items[i].classList.add("found"); //check to see if the querySelectorAll is finding my grid items
      items[i].addEventListener('mousedown', drawOnClick);
      items[i].addEventListener('mouseenter', drawWhileClicked);
    }
  }
  //initiate listen function
  listen()
  //---------------------------------------------------
