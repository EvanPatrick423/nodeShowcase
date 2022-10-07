import {manipulateDom} from './theOdinProject/DOM/DOM.js';

let show = document.getElementById('show');

function clearShow() {
  while (show.lastChild) {
    show.removeChild(show.firstChild);
  }
}

function popNavBar () {
  let navBar = document.getElementById('nav-bar');

  let home = document.createElement('div');
  home.setAttribute('id','home');
  home.classList.add('nav-item');
  home.textContent = 'Home';
  home.addEventListener('click', () => showHome());

  /*let calculator = document.createElement('div');
  calculator.classList.add('nav-item');
  calculator.textContent = 'Calculator';
  calculator.addEventListener('click', () => showCalculator())*/

  let pixelPad = document.createElement('div');
  pixelPad.classList.add('nav-item')
  pixelPad.textContent = 'Pixel Pad';
  pixelPad.addEventListener('click', () => showPixelPad());

  let dom = document.createElement('div');
  dom.classList.add('nav-item')
  dom.textContent = 'Dom';
  dom.addEventListener('click', () => showDom());

  navBar.appendChild(home);
  navBar.appendChild(pixelPad);
  navBar.appendChild(dom);


}

/*function showCalculator() {
  clearShow();
  let
}*/

function showPixelPad () {
  clearShow();
  let contentHolder = document.createElement('div');
  contentHolder.setAttribute('id','content-holder');

  let buttonHolder = document.createElement('div');
  buttonHolder.setAttribute('id','button-holder');

  let eraser = document.createElement('button');
  eraser.setAttribute('id', 'eraser-btn');

  let eraseAll = document.createElement('button');
  eraseAll.setAttribute('id','erase-all');

  let colorCard = document.createElement('div');
  colorCard.setAttribute('id','color-card');

  let colorBox = document.createElement('div');
  colorBox.setAttribute('id','color-box');

  let colorSelect = document.createElement('input');
  colorSelect.setAttribute('type','color');
  colorSelect.setAttribute('id','color-select');

  let colorText = document.createElement('span');
  colorText.textContent = 'Pick your color';

  let sliderBox = document.createElement('div');
  sliderBox.classList.add('slider-box');

  let rangeSlider = document.createElement('input');
  rangeSlider.setAttribute('id','range-slider');
  rangeSlider.setAttribute('type','range');
  rangeSlider.setAttribute('value','48');
  rangeSlider.setAttribute('min','1');
  rangeSlider.setAttribute('max','60');
  rangeSlider.addEventListener('onChange', () => rangeSlider(this.value));

  let progressBar = document.createElement('div');
  progressBar.setAttribute('id','progress-bar');




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
