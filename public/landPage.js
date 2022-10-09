import {manipulateDom} from './theOdinProject/DOM/DOM.js';
import {listen, createGrid, setInk, toggleButton, eraseAllDivs, rangeSlider} from './theOdinProject/etchasketch/etchasketch.js';
import {setUpCalculator} from './theOdinProject/calculator/calculator.js';
import {setUpLibrary} from './theOdinProject/Library/script.js';

let show = document.getElementById('show');

function clearShow() {
  while (show.lastChild) {
    show.removeChild(show.firstChild);
  }
  show.classList.remove('pixelPadBack');
  show.classList.remove('calShow');
  show.classList.remove('libraryShow');
}

function popNavBar () {
  let navBar = document.getElementById('nav-bar');

  let home = document.createElement('div');
  home.setAttribute('id','home');
  home.classList.add('nav-item');
  home.textContent = 'Home';
  home.addEventListener('click', () => showHome());

  let pixelPad = document.createElement('div');
  pixelPad.classList.add('nav-item');
  pixelPad.textContent = 'Pixel Pad';
  pixelPad.addEventListener('click', () => showPixelPad());

  let calculator = document.createElement('div');
  calculator.classList.add('nav-item');
  calculator.textContent = 'Calculator';
  calculator.addEventListener('click', () => showCalculator());

  let library = document.createElement('div');
  library.classList.add('nav-item');
  library.textContent = 'Library';
  library.addEventListener('click', () => showLibrary());

  let dom = document.createElement('div');
  dom.classList.add('nav-item');
  dom.textContent = 'Dom';
  dom.addEventListener('click', () => showDom());

  navBar.appendChild(home);
  navBar.appendChild(pixelPad);
  navBar.appendChild(library);
  navBar.appendChild(calculator);
  navBar.appendChild(dom);
}

function showLibrary() {
  clearShow();

  let show = document.getElementById('show');
  show.classList.add('libraryShow');

  let screenColumn = document.createElement('div');
  screenColumn.setAttribute('id','screen-column');

  let searchScreen = document.createElement('div');
  searchScreen.setAttribute('id','searchScreen');

  let screen2 = document.createElement('div');
  screen2.setAttribute('id','screen2');

  screenColumn.appendChild(searchScreen);
  screenColumn.appendChild(screen2);

  let inputsContainer = document.createElement('div');
  inputsContainer.setAttribute('id','inputs-container');

  let inputBox1 = document.createElement('div');
  inputBox1.classList.add('input-box');

  let inputBox2 = document.createElement('div');
  inputBox2.classList.add('input-box');

  let inputBox3 = document.createElement('div');
  inputBox3.classList.add('input-box');

  let addContainer = document.createElement('div');
  addContainer.setAttribute('id','add-container');

  let titleInput = document.createElement('input');
  titleInput.setAttribute('id','add-book-title');
  titleInput.setAttribute('type','text');
  titleInput.setAttribute('name','title');
  titleInput.setAttribute('value','Book Title');
  titleInput.classList.add('data-input');


  let titleSearchButton = document.createElement('button');
  titleSearchButton.classList.add('search-selector');
  titleSearchButton.setAttribute('name','title');
  titleSearchButton.textContent = 'Search By';

  let authorInput = document.createElement('input');
  authorInput.setAttribute('id','add-author-name');
  authorInput.setAttribute('type','text');
  authorInput.setAttribute('name','author');
  authorInput.setAttribute('value','Book Author');
  authorInput.classList.add('data-input');

  let authorSearchButton = document.createElement('button');
  authorSearchButton.classList.add('search-selector');
  authorSearchButton.setAttribute('name','author');
  authorSearchButton.textContent = 'Search By';

  let pagesInput = document.createElement('input');
  pagesInput.setAttribute('id','add-book-pages');
  pagesInput.setAttribute('type','text');
  pagesInput.setAttribute('name','pages');
  pagesInput.setAttribute('value','Book Pages');
  pagesInput.classList.add('data-input');

  let pagesSearchButton = document.createElement('button');
  pagesSearchButton.classList.add('search-selector');
  pagesSearchButton.setAttribute('name','pages');
  pagesSearchButton.textContent = 'Search By';

  let addHaveRead = document.createElement('div');
  addHaveRead.setAttribute('id','add-have-read');

  let trueButton = document.createElement('button');
  trueButton.setAttribute('id','true');
  trueButton.setAttribute('name','add-have-read');
  trueButton.textContent = 'Has Been Read?';

  let trueSearchButton = document.createElement('button');
  trueSearchButton.classList.add('search-selector');
  trueSearchButton.setAttribute('name','add-have-read');
  trueSearchButton.textContent = 'Search By';

  let buttonContainer = document.createElement('button');
  buttonContainer.setAttribute('id','button-container');

  let addButton = document.createElement('button');
  addButton.setAttribute('id','add-button');
  addButton.classList.add('input-box','data-write');
  addButton.textContent = 'Add Book';

  let searchButton = document.createElement('button');
  searchButton.setAttribute('id','search-button');
  searchButton.classList.add('input-box','data-search');
  searchButton.textContent = 'Search for Book';

  let storageClear = document.createElement('button');
  storageClear.setAttribute('id','storage-clear');
  storageClear.classList.add('input-box');
  storageClear.textContent = 'Clear data stored on local machine';

  let explanationContainer = document.createElement('div');
  explanationContainer.setAttribute('id','explanation-container');
  explanationContainer.textContent = 'Welcome to my first attempt at writing ' +
  'storing and reading objects! This is a moc library, storing the title, author, ' +
  'number pages, and whether or not you have read the book. The total library stored ' +
  'on your computer will be shown in the bottom section, while the current search' +
  'function is shown in the above screen outlined by the thin white border. All ' +
  'library changes will be stored on your local library. So when you come back they ' +
  'will still be there! If you want to delete all in your cache you can click the ' +
  'button that is labeled Clear Data on Local Machine'

  screenColumn.appendChild(searchScreen);
  screenColumn.appendChild(screen2);


  inputBox1.appendChild(titleInput);
  inputBox1.appendChild(titleSearchButton);

  addContainer.appendChild(inputBox1);

  inputBox2.appendChild(authorInput);
  inputBox2.appendChild(authorSearchButton);

  addContainer.appendChild(inputBox2);

  inputBox3.appendChild(pagesInput);
  inputBox3.appendChild(pagesSearchButton);

  addContainer.appendChild(inputBox3);

  addHaveRead.appendChild(trueButton);
  addHaveRead.appendChild(trueSearchButton);

  addContainer.appendChild(addHaveRead);


  buttonContainer.appendChild(addButton);
  buttonContainer.appendChild(searchButton);
  buttonContainer.appendChild(storageClear);



  inputsContainer.appendChild(addContainer);
  inputsContainer.appendChild(buttonContainer);
  inputsContainer.appendChild(explanationContainer);

  show.appendChild(screenColumn);
  show.appendChild(inputsContainer);

  setUpLibrary();
}

function showCalculator() {
  clearShow();

  let header = document.getElementById('header');
  header.textContent = 'Basic Calculator';

  let show = document.getElementById('show');
  show.classList.add('calShow');

  let warning = document.createElement('div');
  warning.textContent = 'Trig functions do not work yet';

  let calBack = document.createElement('div');
  calBack.classList.add('calculator');

  let calScreen = document.createElement('div');
  calScreen.classList.add('screen');

  let buttonsGrid = document.createElement('div');
  buttonsGrid.classList.add('buttons-grid');

  let numbers = document.createElement('div');
  numbers.setAttribute('id','numbers');

  let row6 = document.createElement('div');
  row6.setAttribute('id','row-6');
  row6.classList.add('row');

  let factorial = document.createElement('div');
  factorial.classList.add('data-operator','btn');
  factorial.textContent = 'x!';

  let exponent = document.createElement('div');
  exponent.classList.add('data-operator','btn');
  exponent.textContent = 'x^y';

  let question = document.createElement('div');
  question.classList.add('btn');
  question.textContent = '?'

  let row5 =document.createElement('div');
  row5.setAttribute('id','row-5');
  row5.classList.add('row');

  let tan = document.createElement('div');
  tan.textContent = 'tan(x)';
  tan.classList.add('btn');

  let sin = document.createElement('div');
  sin.textContent = 'sin(x)';
  sin.classList.add('btn');

  let cos = document.createElement('div');
  cos.textContent = 'cos(x)';
  cos.classList.add('btn');

  let row4 = document.createElement('div');
  row4.setAttribute('id','row-4');
  row4.classList.add('row');

  let seven = document.createElement('button');
  seven.textContent = '7';
  seven.classList.add('btn', 'data-number');

  let eight = document.createElement('button');
  eight.textContent = '8';
  eight.classList.add('btn', 'data-number');

  let nine = document.createElement('button');
  nine.textContent = '9';
  nine.classList.add('btn', 'data-number');

  let row3 = document.createElement('div');
  row3.setAttribute('id','row-3');
  row3.classList.add('row');

  let four = document.createElement('button');
  four.textContent = '4';
  four.classList.add('btn', 'data-number');

  let five = document.createElement('button');
  five.textContent = '5';
  five.classList.add('btn', 'data-number');

  let six = document.createElement('button');
  six.textContent = '6';
  six.classList.add('btn', 'data-number');

  let row2 = document.createElement('div');
  row2.setAttribute('id','row-2');
  row2.classList.add('row');

  let one = document.createElement('button');
  one.textContent = '1';
  one.classList.add('btn', 'data-number');

  let two = document.createElement('button');
  two.textContent = '2';
  two.classList.add('btn', 'data-number');

  let three = document.createElement('button');
  three.textContent = '3';
  three.classList.add('btn', 'data-number');

  let row1 = document.createElement('div');
  row1.setAttribute('id','row-1');
  row1.classList.add('row');

  let dot = document.createElement('button');
  dot.textContent = '.';
  dot.classList.add('btn', 'data-point');

  let zero = document.createElement('button');
  zero.textContent = '0';
  zero.classList.add('btn', 'data-number');

  let equals = document.createElement('button');
  equals.textContent = '=';
  equals.classList.add('btn', 'data-equals');

  let operandButtons = document.createElement('div');
  operandButtons.setAttribute('id','operand-buttons');

  let divide = document.createElement('div');
  divide.classList.add('o-btn','data-operator');
  divide.textContent = '%';

  let multiply = document.createElement('div');
  multiply.classList.add('o-btn','data-operator');
  multiply.textContent = '*';

  let minus = document.createElement('div');
  minus.classList.add('o-btn','data-operator');
  minus.textContent = '-';

  let plus = document.createElement('div');
  plus.classList.add('o-btn','data-operator');
  plus.textContent = '+';

  let clear = document.createElement('div');
  clear.classList.add('o-btn','btn-red','data-clear');
  clear.textContent = 'clear';

  let deleteButton = document.createElement('div');
  deleteButton.classList.add('o-btn','btn-blue','data-delete');
  deleteButton.textContent = 'delete';

  row6.appendChild(factorial);
  row6.appendChild(exponent);
  row6.appendChild(question);

  row5.appendChild(tan);
  row5.appendChild(sin);
  row5.appendChild(cos);

  row4.appendChild(seven);
  row4.appendChild(eight);
  row4.appendChild(nine);

  row3.appendChild(four);
  row3.appendChild(five);
  row3.appendChild(six);

  row2.appendChild(one);
  row2.appendChild(two);
  row2.appendChild(three);

  row1.appendChild(dot);
  row1.appendChild(zero);
  row1.appendChild(equals);

  numbers.appendChild(row6);
  numbers.appendChild(row5);
  numbers.appendChild(row4);
  numbers.appendChild(row3);
  numbers.appendChild(row2);
  numbers.appendChild(row1);

  operandButtons.appendChild(divide);
  operandButtons.appendChild(multiply);
  operandButtons.appendChild(minus);
  operandButtons.appendChild(plus);
  operandButtons.appendChild(clear);
  operandButtons.appendChild(deleteButton);

  buttonsGrid.appendChild(numbers);
  buttonsGrid.appendChild(operandButtons)

  calBack.appendChild(calScreen);
  calBack.appendChild(buttonsGrid);


  show.appendChild(warning);
  show.appendChild(calBack);

  setUpCalculator();
}

function showPixelPad () {
  clearShow();

  let header = document.getElementById('header');
  header.textContent = 'PixelPad';

  let show = document.getElementById('show');
  show.classList.add('pixelPadBack');

  let contentHolder = document.createElement('div');
  contentHolder.setAttribute('id','content-holder');

  let buttonHolder = document.createElement('div');
  buttonHolder.setAttribute('id','button-holder');

  let eraser = document.createElement('button');
  eraser.classList.add('pixelPadButton');
  eraser.setAttribute('id', 'eraser-btn');
  eraser.addEventListener('click', () => toggleButton());
  eraser.textContent = 'Toggle Eraser';

  let eraseAll = document.createElement('button');
  eraseAll.setAttribute('id','erase-all');
  eraseAll.classList.add('pixelPadButton');
  eraseAll.addEventListener('click', () => eraseAllDivs());
  eraseAll.textContent = 'Erase All';

  let colorCard = document.createElement('div');
  colorCard.setAttribute('id','color-card');

  let colorBox = document.createElement('div');
  colorBox.setAttribute('id','color-box');

  let colorSelect = document.createElement('input');
  colorSelect.setAttribute('type','color');
  colorSelect.setAttribute('id','color-select');
  colorSelect.addEventListener('input', x => setInk(x));

  let colorText = document.createElement('span');
  colorText.textContent = 'Pick your color';

  let sliderBox = document.createElement('div');
  sliderBox.classList.add('slider-box');

  let rangeSliderDiv = document.createElement('input');
  rangeSliderDiv.setAttribute('id','range-slider');
  rangeSliderDiv.setAttribute('type','range');
  rangeSliderDiv.setAttribute('value','48');
  rangeSliderDiv.setAttribute('min','1');
  rangeSliderDiv.setAttribute('max','60');
  rangeSliderDiv.addEventListener('change', () => rangeSlider(rangeSliderDiv.value));

  let progressBar = document.createElement('div');
  progressBar.setAttribute('id','progress-bar');

  let rangeText = document.createElement('p');
  rangeText.setAttribute('id','range-text');
  rangeText.textContent = 'Grid size: 48 x 48';

  let boardHolder = document.createElement('div');
  boardHolder.setAttribute('id','board-holder');

  let board = document.createElement('div');
  board.setAttribute('id','board');
  board.setAttribute('draggable','false');

  sliderBox.appendChild(rangeSliderDiv);
  sliderBox.appendChild(progressBar);
  sliderBox.appendChild(rangeText);

  colorBox.appendChild(colorSelect);
  colorCard.appendChild(colorBox);
  colorCard.appendChild(colorText);

  buttonHolder.appendChild(eraser);
  buttonHolder.appendChild(eraseAll);
  buttonHolder.appendChild(colorCard);
  buttonHolder.appendChild(sliderBox);

  boardHolder.appendChild(board);

  contentHolder.appendChild(buttonHolder);
  contentHolder.appendChild(boardHolder);

  show.appendChild(contentHolder);

  //inital grid creation
  createGrid(48);
  //initiate listen function
  listen();
}

function showDom () {
  clearShow();
  let container = document.createElement('div');
  container.setAttribute('id', 'container');

  show.appendChild(container);
  manipulateDom();
}

function showHome () {
  clearShow();

  let header = document.getElementById('header');
  header.textContent = 'Hello World! Welcome to my website!';

  let textHolder = document.createElement('div');
  textHolder.setAttribute('id','text-holder');

  let text = document.createElement('p');
  text.setAttribute('id', 'text');
  text.textContent = 'This website serves as an active resume and portfolio. ' +
  'Where you can take a look at my current resume, some course material or ' +
  'personal projects. All hosted on this website.\n' +
  'This site is mostly made in Javascript, HTML5, and CSS. With the application ' +
  'being run in node.js, using PM2 as the process manager and nginx as the ' +
  'reverse proxy.\n' +
  'I hope you enoy my website!'

  let aboutSection = document.createElement('div');
  aboutSection.setAttribute('id','about-section');

  let resumeColumn = document.createElement('div');
  resumeColumn.setAttribute('id','resume-column');

  let resume = document.createElement('div');
  resume.setAttribute('id','resume');

  let pageTurn = document.createElement('div');
  pageTurn.setAttribute('id','page-turn');
  pageTurn.addEventListener('click', () => changePage());
  pageTurn.textContent ='>';

  let headShotCol = document.createElement('div');
  headShotCol.setAttribute('id','head-shot-column')

  let headShotCont = document.createElement('div');
  headShotCont.setAttribute('id','head-shot-cont');

  let headShot = document.createElement('div');
  headShot.setAttribute('id','head-shot');

  let pdfLink = document.createElement('a');
  pdfLink.setAttribute('href', 'landPage/Dev.pdf');
  pdfLink.textContent = 'A PDF Link to My Resume';

  textHolder.appendChild(text);
  show.appendChild(textHolder);

  resume.appendChild(pageTurn);
  resumeColumn.appendChild(resume);
  aboutSection.appendChild(resumeColumn);

  headShotCont.appendChild(headShot);
  headShotCol.appendChild(headShotCont);
  headShotCol.appendChild(pdfLink);
  aboutSection.appendChild(headShotCol);

  show.appendChild(aboutSection);


  let turned = false;
  function changePage () {
    if (turned === false) {
      resume.style.backgroundImage = "url(landPage/Dev1024_2.jpg)";
      pageTurn.textContent = '<';
      turned = true;
    } else {
      resume.style.backgroundImage = "url(landPage/Dev1024_1.jpg)";
      pageTurn.textContent = '>';
      turned = false;
    }
  }
}

  popNavBar();
