import {manipulateDom} from './theOdinProject/DOM/DOM.js';
import {listen, createGrid, setInk, toggleButton, eraseAllDivs, rangeSlider} from './theOdinProject/etchasketch/etchasketch.js';
import {setUpCalculator} from './theOdinProject/calculator/calculator.js';
import {setUpLibrary} from './theOdinProject/Library/script.js';
import {startRPS} from './theOdinProject/rockpaperscissors/rockpaperscissors.js';
import {startTicTacToe} from './theOdinProject/tic tac toe/script.js';
import {startToDo} from './theOdinProject/ToDo/script.js';




function clearShow() {
  let show = document.getElementById('show');
  while (show.lastChild) {
    show.removeChild(show.firstChild);
  }
  show.classList.remove('pixelPadBack');
  show.classList.remove('calShow');
  show.classList.remove('libraryShow');
  show.classList.remove('ticTacToeShow');
}

function clearView() {
  while (view.lastChild) {
    view.removeChild(view.firstChild);
  }
}

function clearDarkCont() {
  let darkCont = document.getElementById('darkCont');
  while (darkCont.lastChild) {
    darkCont.removeChild(darkCont.firstChild);
  }
}

function resetNav(string) {
  //console.log('resetNav ' + string);
  let navBar = document.getElementById('nav-bar');
  let childNodes = navBar.childNodes;

  for (let i = 0; i < childNodes.length; i++) {
    const childNode = childNodes[i];
    // Do something with the childNode
    childNode.classList.remove('navSelected');
  }
  let navItem = document.getElementById(string);
  navItem.classList.add('navSelected');
  //console.log('ResetNav Concluded');
}





function makeShow() {
  clearDarkCont();

  let darkCont = document.getElementById('darkCont');
  // create the header div and add text content
  const header = document.createElement("div");
  header.id = "header";
  header.textContent = "Learning Projects";

  // create the main div and add classes
  const main = document.createElement("div");
  main.id = "main";
  main.classList.add("container-fluid");

  // create the row div and add classes
  const row = document.createElement("div");
  row.classList.add("row");
  row.classList.add("height100");

  // create the nav column and add classes
  const navCol = document.createElement("div");
  navCol.classList.add("col-lg-2");
  navCol.classList.add("col-md-2");
  navCol.classList.add("col-sm-4");
  navCol.classList.add("col-xs-4");
  navCol.classList.add("padding-0");

  // create the nav bar div and set the id
  const navBar = document.createElement("div");
  navBar.id = "nav-bar";

  // append the nav bar div to the nav column
  navCol.appendChild(navBar);

  // create the show column and add classes
  const showCol = document.createElement("div");
  showCol.classList.add("col-lg-10");
  showCol.classList.add("col-md-10");
  showCol.classList.add("col-sm-8");
  showCol.classList.add("col-xs-8");
  showCol.classList.add("padding-01");
  showCol.classList.add("height100");

  // create the show div and set the id
  const showDiv = document.createElement("div");
  showDiv.id = "show";

  // append the show div to the show column
  showCol.appendChild(showDiv);

  // append the nav column and show column to the row div
  row.appendChild(navCol);
  row.appendChild(showCol);

  // append the row div to the main div
  main.appendChild(row);

  // append the header div and main div to the existing view element on the page
  darkCont.appendChild(header);
  darkCont.appendChild(main);

  popNavBar();

}



function popNavBar() {
  //console.log('start Pop nav bar');
  let navBar = document.getElementById('nav-bar');

  let home = document.createElement('div');
  home.setAttribute('id','home');
  home.classList.add('nav-item');
  home.textContent = 'Home';
  home.addEventListener('click', () => showHome());

  let moreAbout = document.createElement('div');
  moreAbout.setAttribute('id','moreAbout');
  moreAbout.classList.add('nav-item');
  moreAbout.textContent = 'More About Me (under construction)';
  //cssAnimations.addEventListener('click', () => showCssAnimations());

  let resume = document.createElement('div');
  resume.setAttribute('id','resume');
  resume.classList.add('nav-item','resume');
  resume.textContent = 'My Resume';
  resume.addEventListener('click', () => showResume());

  let pixelPad = document.createElement('div');
  pixelPad.setAttribute('id','pixelPad');
  pixelPad.classList.add('nav-item');
  pixelPad.textContent = 'Pixel Pad';
  pixelPad.addEventListener('click', () => showPixelPad());

  let toDo = document.createElement('div');
  toDo.setAttribute('id','toDo');
  toDo.classList.add('nav-item');
  toDo.textContent = 'To Do App';
  toDo.addEventListener('click', () => showToDo());

  let calculator = document.createElement('div');
  calculator.setAttribute('id','calculator');
  calculator.classList.add('nav-item');
  calculator.textContent = 'Calculator';
  calculator.addEventListener('click', () => showCalculator());

  let ticTacToe = document.createElement('div');
  ticTacToe.setAttribute('id','ticTacToe');
  ticTacToe.classList.add('nav-item');
  ticTacToe.textContent = 'Tic Tac Toe';
  ticTacToe.addEventListener('click',() => showTicTacToe());

  let library = document.createElement('div');
  library.setAttribute('id','library');
  library.classList.add('nav-item');
  library.textContent = 'Library';
  library.addEventListener('click', () => showLibrary());

  let rockPaperScissors = document.createElement('div');
  rockPaperScissors.setAttribute('id','rockPaperScissors');
  rockPaperScissors.classList.add('nav-item');
  rockPaperScissors.textContent = 'Rock Paper Scissors';
  rockPaperScissors.addEventListener('click', () => showRPS());

  let cssAnimations = document.createElement('div');
  cssAnimations.setAttribute('id','cssAnimations');
  cssAnimations.classList.add('nav-item');
  cssAnimations.textContent = 'CSS Animations';
  cssAnimations.addEventListener('click', () => showCssAnimations());

  let weatherAPI = document.createElement('div');
  weatherAPI.setAttribute('id','weatherAPI');
  weatherAPI.classList.add('nav-item');
  weatherAPI.textContent = 'Weather API (under construction)';
  //cssAnimations.addEventListener('click', () => showCssAnimations());

  let contactMe = document.createElement('div');
  contactMe.setAttribute('id','contactMe');
  contactMe.classList.add('nav-item','navBottom');
  contactMe.textContent = 'Contact Me (under construction)';
  //cssAnimations.addEventListener('click', () => showCssAnimations());

  //console.log('Nav Bar populated');



  /*let dom = document.createElement('div');
  dom.classList.add('nav-item');
  dom.textContent = 'Dom';
  dom.addEventListener('click', () => showDom());*/

  navBar.appendChild(home);
  navBar.appendChild(resume);
  //navBar.appendChild(moreAbout);
  navBar.appendChild(pixelPad);
  navBar.appendChild(toDo);
  navBar.appendChild(ticTacToe);
  navBar.appendChild(library);
  navBar.appendChild(calculator);
  navBar.appendChild(rockPaperScissors);
  navBar.appendChild(cssAnimations);
  //navBar.appendChild(weatherAPI);
  //navBar.appendChild(contactMe);
  //navBar.appendChild(dom);
}

function showHome() {
  clearView();
  //resetNav('home');
  document.body.style.backgroundImage = "url('landPage/pexels-bich-tran-669996.jpg')";
  document.body.style.backgroundSize = 'cover';

  let view = document.getElementById('view');
  view.classList.add('viewHome');

  let darkCont = document.createElement('div');
  darkCont.classList.add('darkCont','row','padding-0');
  darkCont.id = 'darkCont';

  let column1 = document.createElement('div');
  column1.classList.add('column1','col-lg-8', 'col-md-8', 'col-sm-8', 'col-xs-12');


  let header = document.createElement('div');
  header.classList.add('homeHeader');
  header.textContent = 'Hello World! Welcome to My Website';
  column1.appendChild(header);

  let introBlock = document.createElement('div');

  let introText1  = document.createElement('div');
  introText1.classList.add('introText');
  introText1.textContent = 'This website serves as both my active '
  + 'resume and portfolio. Here, you can view my current resume, browse through '
  + 'my coursework materials, and explore my personal projects.'
  introBlock.appendChild(introText1);

  let introText2 = document.createElement('div');
  introText2.classList.add('introText');
  introText2.textContent = 'The website was built with cutting-edge technologies '
  + 'such as Javascript, HTML5, and CSS to create an engaging and visually '
  + 'appealing user experience. The application is run on node.js, utilizing '
  + 'PM2 as the process manager and nginx as the reverse proxy to ensure '
  + 'optimal performance and reliability.'
  introBlock.appendChild(introText2);

  let introText3 = document.createElement('div');
  introText3.classList.add('introText');
  introText3.textContent = 'I take great pride in my work and am delighted to '
  + 'share my website with you. I hope you enjoy exploring it as much as I '
  + 'enjoyed creating it.'
  introBlock.appendChild(introText3);
  column1.appendChild(introBlock);

  let buttonBlock = document.createElement('div');
  buttonBlock.classList.add('buttonBlock');

  let learningProjects = document.createElement('div');
  learningProjects.addEventListener('click', () => showResume());
  learningProjects.classList.add('homeButton','activeButton');
  learningProjects.innerHTML = 'Learning Projects';

  let messageMe = document.createElement('div');
  messageMe.classList.add('homeButton');
  messageMe.innerHTML = 'Message Me  <br /> [Under Development]';

  let otherInterests = document.createElement('div');
  otherInterests.classList.add('homeButton');
  otherInterests.innerHTML = 'Other Interests  <br /> [Under Development]';

  buttonBlock.append(learningProjects,messageMe,otherInterests);
  column1.appendChild(buttonBlock);








  let column2 = document.createElement('div');
  column2.classList.add('col-lg-4', 'col-md-4', 'col-sm-4', 'col-xs-12','column2');

  let column2Box = document.createElement('div');
  column2Box.classList.add('column2Box');




  let headShot = document.createElement('img');
  headShot.classList.add('img-fluid');
  headShot.setAttribute('src','landPage/ProfessionalHeadShot.jfif');

  let headShotCont = document.createElement('div');
  headShotCont.setAttribute('id','head-shot-cont');


  headShotCont.appendChild(headShot);
  column2Box.appendChild(headShotCont);

  let linkBox = document.createElement('div');
  linkBox.classList.add('linkBox');

  let linkedIn = document.createElement('a');
  linkedIn.classList.add('circleLink','linkedInLink','img-fluid');
  linkedIn.setAttribute('href', 'https://www.linkedin.com/in/evan-patrick-4824481b1/');
  linkedIn.setAttribute('target', '_blank');
  linkBox.appendChild(linkedIn);

  let gitHub = document.createElement('a');
  gitHub.classList.add('circleLink','gitHubLink','img-fluid');
  gitHub.setAttribute('href', 'https://github.com/EvanPatrick423');
  gitHub.setAttribute('target', '_blank');
  linkBox.appendChild(gitHub);

  let resume = document.createElement('a');
  resume.classList.add('circleLink');
  resume.setAttribute('href', 'landPage/Dev.pdf');
  resume.setAttribute('target', '_blank');
  resume.textContent = 'Resume'
  linkBox.appendChild(resume);

  column2Box.appendChild(linkBox);


  let descBox = document.createElement('div');
  descBox.classList.add('introBox');

  let descText1 = document.createElement('div');
  descText1.classList.add('descText');
  descText1.textContent = 'I am an accomplished software engineer proficient in'
  + ' JavaScript, Python Django, HTML, CSS, and Mendix, with a proven track '
  + 'record of delivering high-quality results. I hold certifications in all of '
  + 'these technologies, demonstrating my mastery in each.'
  descBox.appendChild(descText1);

  let descText2 = document.createElement('div');
  descText2.classList.add('descText');
  descText2.textContent = 'Prior to my work in application development, '
  + 'I gained extensive experience in research and development environments. '
  + 'As an undergrad, I worked on multiple research teams, as well as participated '
  + 'in various extracurricular engineering groups.'
  descBox.appendChild(descText2);

  let descText3 = document.createElement('div');
  descText3.classList.add('descText');
  descText3.textContent = 'My passion for learning drives me to '
  + 'continuously expand my knowledge and skill set, and I am eager to take on '
  + 'more challenging and rewarding software engineering roles.'
  descBox.appendChild(descText3);


  column2Box.appendChild(descBox);
  column2.appendChild(column2Box);



  darkCont.appendChild(column1);
  darkCont.appendChild(column2);
  view.appendChild(darkCont);


}

function showCssAnimations() {
  makeShow();
  clearShow();
  resetNav('cssAnimations');

  let show = document.getElementById('show');

  let header = document.getElementById('header');
  header.textContent = 'Some Css Animations';

  let animationBay = document.createElement('div');
  animationBay.setAttribute('id','animation-bay');
  animationBay.classList.add('container-fluid');

  let animationRow = document.createElement('div');
  animationRow.classList.add('row');

  let animation1 = document.createElement('div');
  animation1.classList.add('animation','col-lg-4', 'col-md-4', 'col-sm-12', 'col-xs-12');
  animation1.setAttribute('id','one');

  let animation1Back = document.createElement('div');
  animation1Back.setAttribute('id','back');

  let star1 = document.createElement('div');
  star1.classList.add('stars');
  star1.setAttribute('id','star-1');

  let star2 = document.createElement('div');
  star2.classList.add('stars');
  star2.setAttribute('id','star-2');

  let animation2 = document.createElement('div');
  animation2.classList.add('animation','col-lg-4', 'col-md-4', 'col-sm-12', 'col-xs-12');
  animation2.setAttribute('id','heart-beat');

  let heartBox = document.createElement('div');
  heartBox.classList.add('back');

  let heart = document.createElement('div');
  heart.classList.add('heart');

  let animation3 = document.createElement('div');
  animation3.classList.add('animation','col-lg-4', 'col-md-4', 'col-sm-12', 'col-xs-12');
  animation3.setAttribute('id','penguin-wave');

  let penguin = document.createElement('div');
  penguin.classList.add('penguin');

  let penguinBottom = document.createElement('div');
  penguinBottom.classList.add('penguin-bottom');

  let rightHand = document.createElement('div');
  rightHand.classList.add('right-hand');

  let leftHand = document.createElement('div');
  leftHand.classList.add('left-hand');

  let rightFeet = document.createElement('div');
  rightFeet.classList.add('right-feet');

  let leftFeet = document.createElement('div');
  leftFeet.classList.add('left-feet');

  let penguinTop = document.createElement('div');
  penguinTop.classList.add('penguin-top');

  let rightCheek = document.createElement('div');
  rightCheek.classList.add('right-cheek');

  let leftCheek = document.createElement('div');
  leftCheek.classList.add('left-cheek');

  let belly = document.createElement('div');
  belly.classList.add('belly');

  let rightEye = document.createElement('div');
  rightEye.classList.add('right-eye');

  let sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');

  let sparkle2 = document.createElement('div');
  sparkle2.classList.add('sparkle');

  let leftEye = document.createElement('div');
  leftEye.classList.add('left-eye');

  let blushRight = document.createElement('div');
  blushRight.classList.add('blush-right');

  let blushLeft = document.createElement('div');
  blushLeft.classList.add('blush-left');

  let beakTop = document.createElement('div');
  beakTop.classList.add('beak-top');

  let beakBottom = document.createElement('div');
  beakBottom.classList.add('beak-bottom');

  animation1Back.appendChild(star1);
  animation1Back.appendChild(star2);

  animation1.appendChild(animation1Back);


  animation2.appendChild(heartBox);
  animation2.appendChild(heart);

  penguinBottom.appendChild(rightHand);
  penguinBottom.appendChild(leftHand);
  penguinBottom.appendChild(rightFeet);
  penguinBottom.appendChild(leftFeet);

  rightEye.appendChild(sparkle);
  leftEye.appendChild(sparkle2);

  penguinTop.appendChild(rightCheek);
  penguinTop.appendChild(leftCheek);
  penguinTop.appendChild(belly);
  penguinTop.appendChild(rightEye);
  penguinTop.appendChild(leftEye);
  penguinTop.appendChild(blushRight);
  penguinTop.appendChild(blushLeft);
  penguinTop.appendChild(beakTop);
  penguinTop.appendChild(beakBottom);



  penguin.appendChild(penguinBottom);
  penguin.appendChild(penguinTop);


  animation3.appendChild(penguin);

  animationRow.appendChild(animation1);
  animationRow.appendChild(animation2);
  animationRow.appendChild(animation3);

  animationBay.appendChild(animationRow);

  //console.log('hit');
  show.appendChild(animationBay);

}

function showToDo() {
  makeShow();
  clearShow();
  resetNav('toDo');

  let show = document.getElementById('show');

  let header = document.getElementById('header');
  header.textContent = 'To Do App';

  let toDoMain = document.createElement('div');
  toDoMain.setAttribute('id','toDoMain');
  toDoMain.classList.add('container-fluid');

  let toDoRow = document.createElement('div');
  toDoRow.classList.add('row');

  let leftHandColumn = document.createElement('div');
  leftHandColumn.setAttribute('id','left-hand-column');
  leftHandColumn.classList.add('col-lg-2', 'col-md-2', 'col-sm-4', 'col-xs-6');

  let taskBoard = document.createElement('div');
  taskBoard.setAttribute('id','taskBoard');
  taskBoard.classList.add('col-lg-10', 'col-md-10', 'col-sm-8', 'col-xs-6');



  toDoRow.appendChild(leftHandColumn);
  toDoRow.appendChild(taskBoard);

  toDoMain.appendChild(toDoRow);

  show.appendChild(toDoMain);

  startToDo();
}

function showTicTacToe() {
  makeShow();
  clearShow();
  resetNav('ticTacToe');


  let header = document.getElementById('header');
  header.textContent = 'Color Tic Tac Toe';

  let show = document.getElementById('show');
  show.classList.add('ticTacToeShow');

  let showHeader = document.createElement('div');
  showHeader.setAttribute('id','showHeader');

  let scoreBoard = document.createElement('div');
  scoreBoard.setAttribute('id','scoreBoard');

  let buttonPlace = document.createElement('div');
  buttonPlace.setAttribute('id','buttonPlace');

  let playBoard = document.createElement('div');
  playBoard.setAttribute('id', 'playBoard');

  show.appendChild(showHeader);
  show.appendChild(scoreBoard);
  show.appendChild(buttonPlace);
  show.appendChild(playBoard);

  startTicTacToe();
}

function showRPS() {
  makeShow();
  clearShow();
  resetNav('rockPaperScissors');

  let show = document.getElementById('show');

  let header = document.getElementById('header');
  header.textContent = 'Rock Paper Scissors';

  let dashBoard = document.createElement('div');
  dashBoard.setAttribute('id','dashboard');

  let message = document.createElement('div');
  message.setAttribute('id','message');

  let current = document.createElement('div');
  current.setAttribute('id','current');

  let container = document.createElement('div');
  container.setAttribute('id','container');

  let rock = document.createElement('button');
  rock.classList.add('RPSbtn');
  rock.setAttribute('id','rock');
  rock.textContent = 'Rock';

  let paper = document.createElement('button');
  paper.classList.add('RPSbtn');
  paper.setAttribute('id','paper');
  paper.textContent = 'Paper';

  let scissors = document.createElement('button');
  scissors.classList.add('RPSbtn');
  scissors.setAttribute('id','scissors');
  scissors.textContent = 'Scissors';

  container.appendChild(rock);
  container.appendChild(paper);
  container.appendChild(scissors);

  dashBoard.appendChild(message);
  dashBoard.appendChild(current);
  dashBoard.appendChild(container);


  show.appendChild(dashBoard);

  startRPS();
}

function showLibrary() {
  makeShow();
  clearShow();
  resetNav('library');

  let header = document.getElementById('header');
  header.textContent = 'Library';

  let show = document.getElementById('show');
  show.classList.add('libraryShow');

  let libraryRow = document.createElement('div');
  libraryRow.classList.add('row');

  let screenColumn = document.createElement('div');
  screenColumn.setAttribute('id','screen-column');
  screenColumn.classList.add('col-lg-7', 'col-md-7', 'col-sm-12', 'col-xs-12');

  let searchScreen = document.createElement('div');
  searchScreen.setAttribute('id','searchScreen');

  let screen2 = document.createElement('div');
  screen2.setAttribute('id','screen2');

  screenColumn.appendChild(searchScreen);
  screenColumn.appendChild(screen2);

  let inputsContainer = document.createElement('div');
  inputsContainer.setAttribute('id','inputs-container');
  inputsContainer.classList.add('col-lg-5', 'col-md-5', 'col-sm-12', 'col-xs-12');

  let inputBox1 = document.createElement('div');
  inputBox1.classList.add('input-box', 'row');

  let inputBox2 = document.createElement('div');
  inputBox2.classList.add('input-box', 'row');

  let inputBox3 = document.createElement('div');
  inputBox3.classList.add('input-box','row');

  let addContainer = document.createElement('div');
  addContainer.setAttribute('id','add-container');

  let titleInput = document.createElement('input');
  titleInput.setAttribute('id','add-book-title');
  titleInput.setAttribute('type','text');
  titleInput.setAttribute('name','title');
  titleInput.setAttribute('value','Book Title');
  titleInput.classList.add('data-input','col-lg-5', 'col-md-5', 'col-sm-5', 'col-xs-12');


  let titleSearchButton = document.createElement('button');
  titleSearchButton.classList.add('search-selector','col-lg-5', 'col-md-5', 'col-sm-5', 'col-xs-12');
  titleSearchButton.setAttribute('name','title');
  titleSearchButton.textContent = 'Search By';

  let authorInput = document.createElement('input');
  authorInput.setAttribute('id','add-author-name');
  authorInput.setAttribute('type','text');
  authorInput.setAttribute('name','author');
  authorInput.setAttribute('value','Book Author');
  authorInput.classList.add('data-input','col-lg-5', 'col-md-5', 'col-sm-5', 'col-xs-12');

  let authorSearchButton = document.createElement('button');
  authorSearchButton.classList.add('search-selector','col-lg-5', 'col-md-5', 'col-sm-5', 'col-xs-12');
  authorSearchButton.setAttribute('name','author');
  authorSearchButton.textContent = 'Search By';

  let pagesInput = document.createElement('input');
  pagesInput.setAttribute('id','add-book-pages');
  pagesInput.setAttribute('type','text');
  pagesInput.setAttribute('name','pages');
  pagesInput.setAttribute('value','Book Pages');
  pagesInput.classList.add('data-input','col-lg-5', 'col-md-5', 'col-sm-5', 'col-xs-12');

  let pagesSearchButton = document.createElement('button');
  pagesSearchButton.classList.add('search-selector','col-lg-5', 'col-md-5', 'col-sm-5', 'col-xs-12');
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

  libraryRow.appendChild(inputsContainer);
  libraryRow.appendChild(screenColumn);


  show.appendChild(libraryRow);

  setUpLibrary();
}

function showCalculator() {
  makeShow();
  clearShow();
  resetNav('calculator');

  let header = document.getElementById('header');
  header.textContent = 'Basic Calculator';

  let show = document.getElementById('show');
  show.classList.add('calShow');

  let warning = document.createElement('div');
  warning.textContent = 'Trig functions do not work yet';

  let calBack = document.createElement('div');
  calBack.classList.add('calculator','col-lg-7', 'col-md-7', 'col-sm-12', 'col-xs-12');

  let calScreen = document.createElement('div');
  calScreen.classList.add('screen');

  let buttonsGrid = document.createElement('div');
  buttonsGrid.classList.add('buttons-grid');

  let numbers = document.createElement('div');
  numbers.setAttribute('id','numbers');

  let row6 = document.createElement('div');
  row6.setAttribute('id','row-6');
  row6.classList.add('calRow');

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
  row5.classList.add('calRow');

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
  row4.classList.add('calRow');

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
  row3.classList.add('calRow');

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
  row2.classList.add('calRow');

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
  row1.classList.add('calRow');

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
  makeShow();
  clearShow();
  resetNav('pixelPad');

  let header = document.getElementById('header');
  header.textContent = 'PixelPad';

  let show = document.getElementById('show');
  show.classList.add('pixelPadBack');

  let contentHolder = document.createElement('div');
  contentHolder.setAttribute('id','content-holder');
  contentHolder.classList.add('row');

  let buttonHolder = document.createElement('div');
  buttonHolder.setAttribute('id','button-holder');
  buttonHolder.classList.add('col-xs-3')

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
  rangeSliderDiv.setAttribute('min','8');
  rangeSliderDiv.setAttribute('max','64');
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
  board.classList.add('col-xs-9');

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

/*function showDom () {
  clearShow();

  let header = document.getElementById('header');
  header.textContent = 'First Dom manipulation script';

  let container = document.createElement('div');
  container.setAttribute('id', 'container');

  show.appendChild(container);
  manipulateDom();
}
*/


function showResume() {
  makeShow();
  clearShow();
  resetNav('resume');

  let show = document.getElementById('show');

  let header = document.getElementById('header');
  header.textContent = 'My Resume';

  let aboutSection = document.createElement('div');
  aboutSection.setAttribute('id','about-section');
  aboutSection.classList.add('container-fluid');

  let aboutRow = document.createElement('div');
  aboutRow.classList.add('row', 'aboutRow');


  let resumeColumn = document.createElement('div');
  resumeColumn.setAttribute('id','resume-column');
  resumeColumn.classList.add('col-xs-12','col-sm-12','col-md-8','col-lg-9');

  /* let resume = document.createElement('img');
  resume.setAttribute('id','resume');
  resume.setAttribute('src', 'landPage/Dev1024_1.jpg') */

  /*let pageTurn = document.createElement('div');
  pageTurn.setAttribute('id','page-turn');
  pageTurn.addEventListener('click', () => changePage());
  pageTurn.textContent ='>';*/

  let resumeHeader = document.createElement('div');
  resumeHeader.classList.add('resume-block','resume-header');
  resumeHeader.textContent = 'Evan Patrick';

  let resumeOverview = document.createElement('div');
  resumeOverview.classList.add('resume-block');
  resumeOverview.textContent = 'I am a software engineer working in the Mendix ' +
  'platform. With prior experience with JavaScript, Python Django, HTML and CSS.' +
  ' I have certifications in JavaScript, HTML, and CSS and Mendix. Prior to ' +
  'working in application development, I had extensive experience in research ' +
  'and development environments. Working on multiple research teams during my' +
  ' undergrad, as well as in many extracurricular engineering groups. I am ' +
  'currently trying to expand my knowledge and break into more in depth and ' +
  'exciting software engineering roles.';

  let workExperienceTitle = document.createElement('div');
  workExperienceTitle.classList.add('resume-block','resumeTitle');
  workExperienceTitle.textContent = 'Work Experience:';

  let drivetimeTitleRow = document.createElement('div');
  drivetimeTitleRow.setAttribute('id','drivetimeTitleRow');
  drivetimeTitleRow.classList.add('resume-block','titleRow');

  let drivetimeTitle = document.createElement('div');
  drivetimeTitle.classList.add('resumeSubTitle','resume-block');
  drivetimeTitle.textContent = 'DriveTime | Decision Software Engineer:';

  let drivetimeTitleDate = document.createElement('div');
  drivetimeTitleDate.classList.add('resume-block','resumeSubDate');
  drivetimeTitleDate.textContent = 'October 2023 - Present';

  drivetimeTitleRow.appendChild(drivetimeTitle);
  drivetimeTitleRow.appendChild(drivetimeTitleDate);

  let drivetimeULDiv = document.createElement('div');
  let drivetimeUL = document.createElement('ul');

  let drivetimeJobsData = [
    "Developed and maintained Mendix application",
    "Developed Node.js applications that served as middleware and gateways",
    "Contributed to company documentation",
    'Recorded Loom video presentations to non devlopers and developers',
    'developed in Proviner, a finance driven stateless low code software marketed toward finance companies',
    'Contributed towards migrating code base to event drivent microservice architecture for better ease of use and readability',
    'Generated and Subscribed to events in the microservice architecture',
    'Ensured services were always up by being in an OnCall schedule will all other engineers at drivetime',
    "Intergrated API's between Mendix, Node.js apps, and Proviner",

  ]

  for (let i = 0; i < drivetimeJobsData.length; i++) {
    var li = document.createElement('li');
    li.innerText = drivetimeJobsData[i];
    drivetimeUL.appendChild(li);
  }

  drivetimeULDiv.appendChild(drivetimeUL);

  let epiuseTitleRow = document.createElement('div');
  epiuseTitleRow.setAttribute('id','epiuseTitleRow');
  epiuseTitleRow.classList.add('resume-block','titleRow');

  let epiuseTitle = document.createElement('div');
  epiuseTitle.classList.add('resumeSubTitle','resume-block');
  epiuseTitle.textContent = 'EPI-USE America, Inc | Software Developer:';

  let epiuseTitleDate = document.createElement('div');
  epiuseTitleDate.classList.add('resume-block','resumeSubDate');
  epiuseTitleDate.textContent = 'October 2021 - October 2023';

  epiuseTitleRow.appendChild(epiuseTitle);
  epiuseTitleRow.appendChild(epiuseTitleDate);

  let epiuseULDiv = document.createElement('div');

  let epiuseUL = document.createElement('ul');
  //epiuseUL.classList.add();

  let epiuseJobData = [
  "Developed multiple enterprise level applications for clients of EPI-USE America Inc",
  "Manages development projects by serving as the scrum master",
  "Works in both Agile or Waterfall environments depending on client needs",
  "Trains client employees on use of new software",
  "Manages merging and deployment of applications via CI/CD environments",
  "Documents best practices for team members"
  ];

  for (let i = 0; i < epiuseJobData.length; i++) {
    var li = document.createElement('li');
    li.innerText = epiuseJobData[i];
    epiuseUL.appendChild(li);
  }

  epiuseULDiv.appendChild(epiuseUL);

  let chatCoinTitleRow = document.createElement('div');
  chatCoinTitleRow.setAttribute('id','chatCoinTitleRow');
  chatCoinTitleRow.classList.add('resume-block','titleRow');

  let chatCoinTitle = document.createElement('div');
  chatCoinTitle.classList.add('resumeSubTitle','resume-block');
  chatCoinTitle.textContent = 'Chattanooga Coin | Systems Administrator:';

  let chatCoinTitleDate = document.createElement('div');
  chatCoinTitleDate.classList.add('resume-block','resumeSubDate');
  chatCoinTitleDate.textContent = 'February 2021 – October 2021';

  chatCoinTitleRow.appendChild(chatCoinTitle);
  chatCoinTitleRow.appendChild(chatCoinTitleDate);

  let chatCoinULDiv = document.createElement('div');

  let chatCoinUL = document.createElement('ul');

  let chatCoinJobData = [
    "Managed the website chattanoogacoins.com",
    "Developed internal software for inventory management and other businesses needs",
    "Designed and published new catalogs",
    "Solved problems with any IT related issues"
  ];

  for (let i = 0; i < chatCoinJobData.length; i++) {
    var li = document.createElement('li');
    li.innerText = chatCoinJobData[i];
    chatCoinUL.appendChild(li);
  }

  chatCoinULDiv.appendChild(chatCoinUL);

  let legacyBoxTitleRow = document.createElement('div');
  legacyBoxTitleRow.setAttribute('id','legacyBoxTitleRow');
  legacyBoxTitleRow.classList.add('resume-block','titleRow');

  let legacyBoxTitle = document.createElement('div');
  legacyBoxTitle.classList.add('resumeSubTitle','resume-block');
  legacyBoxTitle.textContent = "Legacy Box | Repair and IT Technician ";

  let legacyBoxTitleDate = document.createElement('div');
  legacyBoxTitleDate.classList.add('resume-block','resumeSubDate');
  legacyBoxTitleDate.textContent = "February 2020 – February 2021";

  legacyBoxTitleRow.appendChild(legacyBoxTitle);
  legacyBoxTitleRow.appendChild(legacyBoxTitleDate);

  let legacyBoxULDiv = document.createElement('div');

  let legacyBoxUL = document.createElement('ul');

  let legacyBoxJobData = [
    "Managed the operations of 37 media capture stations",
    "Troubleshot stations, media capturing software and media printers",
    "Created Routine Maintenance Schedules to prevent and reduce downtime on stations",
    "Performed routine maintenance on all media capture stations",
    "Improved the working efficiency of the floor through continuous improvement practices "
  ];

  for (let i = 0; i < legacyBoxJobData.length; i++) {
    var li = document.createElement('li');
    li.innerText = legacyBoxJobData[i];
    legacyBoxUL.appendChild(li);
  }

  legacyBoxULDiv.appendChild(legacyBoxUL);

  let vitalFarmsTitleRow = document.createElement('div');
  vitalFarmsTitleRow.setAttribute('id','vitalFarmsTitleRow');
  vitalFarmsTitleRow.classList.add('resume-block','titleRow');

  let vitalFarmsTitle = document.createElement('div');
  vitalFarmsTitle.classList.add('resumeSubTitle','resume-block');
  vitalFarmsTitle.textContent = 'Vital Farms | Head of R&D/Laboratory Manager';

  let vitalFarmsTitleDate = document.createElement('div');
  vitalFarmsTitleDate.classList.add('resume-block','resumeSubDate');
  vitalFarmsTitleDate.textContent = "September 2019 – February 2020"

  vitalFarmsTitleRow.appendChild(vitalFarmsTitle);
  vitalFarmsTitleRow.appendChild(vitalFarmsTitleDate);

  let vitalFarmsULDiv = document.createElement('div');

  let vitalFarmsUL = document.createElement('ul');

  let vitalFarmsJobData = [
    "Designed a centrifugal partition chromatography (CPC) process for extraction of cannabinoid compounds, a method of extraction that achieves higher extraction purity, with lower operational cost",
    "Researched and found manufacturers of CPC equipment that meet the companies standard for CBD oil extraction and separation processes",
    "Worked with the regional manager and CEO to source buyers, harvest, process, and store the physical biomass, and renovate our extraction laboratory"
  ];

  for (let i = 0; i < vitalFarmsJobData.length; i++) {
    var li = document.createElement('li');
    li.innerText = vitalFarmsJobData[i];
    vitalFarmsUL.appendChild(li);
  }

  vitalFarmsULDiv.appendChild(vitalFarmsUL);

  let harrisTitleRow = document.createElement('div');
  harrisTitleRow.setAttribute('id','harrisTitleRow');
  harrisTitleRow.classList.add('resume-block','titleRow');

  let harrisTitle = document.createElement('div');
  harrisTitle.classList.add('resumeSubTitle','resume-block');
  harrisTitle.textContent = "University of Tennessee | Research Assistant, Dr. Bradley Harris";

  let harrisTitleDate = document.createElement('div');
  harrisTitleDate.classList.add('resume-block','resumeSubDate');
  harrisTitleDate.textContent = "May 2019 – August 2019"

  harrisTitleRow.appendChild(harrisTitle);
  harrisTitleRow.appendChild(harrisTitleDate);

  let harrisULDiv = document.createElement('div');

  let harrisUL = document.createElement('ul');

  let harrisJobData = [
    "Designed network communication structure using Labview, that would allow researchers to operate the chemical engineering controls systems lab machines remotely from any internet capable devices.",
    "Researched microcontrollers that meet requirements of communication software."
  ];

  for (let i = 0; i < harrisJobData.length; i++) {
    var li = document.createElement('li');
    li.innerText = harrisJobData[i];
    harrisUL.appendChild(li);
  }

  harrisULDiv.appendChild(harrisUL);

  let sungTitleRow = document.createElement('div');
  sungTitleRow.setAttribute('id','harrisTitleRow');
  sungTitleRow.classList.add('resume-block','titleRow');

  let sungTitle = document.createElement('div');
  sungTitle.classList.add('resumeSubTitle','resume-block');
  sungTitle.textContent = "University of Tennessee | Research Assistant, Dr. Sungwoo Yang";

  let sungTitleDate = document.createElement('div');
  sungTitleDate.classList.add('resume-block','resumeSubDate');
  sungTitleDate.textContent = "August 2017 – May 2019";

  sungTitleRow.appendChild(sungTitle);
  sungTitleRow.appendChild(sungTitleDate);

  let sungULDiv = document.createElement('div');

  let sungUL = document.createElement('ul');

  let sungJobData = [
    "Researched and developed methods of ambient drying of aerogel for the purposes of creating translucent insulation materials and solar thermal energy conversion devices.",
    "Performed literature review and experiments to construct standard methods of production and data collection regarding measuring the total weighted solar transmittance of the aerogel samples.",
    "Produced an aerogel sample with the highest solar weighted transmittance synthesized by the lab at that time (72% Total weighted solar transmittance). "
  ];

  for (let i = 0; i < sungJobData.length; i++) {
    var li = document.createElement('li');
    li.innerText = sungJobData[i];
    sungUL.appendChild(li);
  }

  sungULDiv.appendChild(sungUL);

  let educationTitle = document.createElement('div');
  educationTitle.classList.add('resume-block','resumeTitle');
  educationTitle.textContent = 'Education & Certification:';

  let schoolInfo = document.createElement('div');
  schoolInfo.classList.add('educationBlock');
  schoolInfo.textContent = "University of Tennessee Graduated May 2019 BS Chemical Engineering GPA 3.5";

  let odinProjectLink =  document.createElement('a');
  odinProjectLink.setAttribute('href', 'https://www.theodinproject.com/dashboard');
  odinProjectLink.classList.add('resumeLink');
  odinProjectLink.textContent = 'The Odin Project';

  let odinCert1 = document.createElement('div');
  odinCert1.classList.add('resume-block');
  odinCert1.textContent = "The Odin Project, JavaScript Foundations 2019 - 2020";

  let odinCert2 = document.createElement('div');
  odinCert2.classList.add('resume-block');
  odinCert2.textContent = "The Odin Project, JavaScript Full Stack Development 2020 - 2021";

  let mendixLink = document.createElement('a');
  mendixLink.setAttribute('href','https://academy.mendix.com/');
  mendixLink.classList.add('resumeLink');
  mendixLink.textContent = "Mendix";

  let mendixCert1 = document.createElement('div');
  mendixCert1.classList.add('resume-block');
  mendixCert1.textContent = "Mendix, Rapid Application Certified";

  let mendixCert2 = document.createElement('div');
  mendixCert2.classList.add('resume-block');
  mendixCert2.textContent = "Mendix, Intermediate Certified";


  resumeColumn.append(resumeHeader,resumeOverview,workExperienceTitle,drivetimeTitleRow,drivetimeULDiv,
    epiuseTitleRow,epiuseULDiv,chatCoinTitleRow,chatCoinULDiv,legacyBoxTitleRow,
    legacyBoxULDiv,vitalFarmsTitleRow,vitalFarmsULDiv,harrisTitleRow,harrisULDiv,
    sungTitleRow,sungULDiv,educationTitle,schoolInfo,odinProjectLink,odinCert1,
    odinCert2,mendixLink,mendixCert1,mendixCert2);

  aboutRow.appendChild(resumeColumn);

  let headShotCol = document.createElement('div');
  headShotCol.setAttribute('id','head-shot-column')
  headShotCol.classList.add('col-xs-12','col-sm-12','col-md-4','col-lg-3');

  let headShot = document.createElement('img');
  headShot.classList.add('img-fluid');
  headShot.setAttribute('src','landPage/ProfessionalHeadShot.jfif');

  let headShotCont = document.createElement('div');
  headShotCont.setAttribute('id','head-shot-cont');


  headShotCont.appendChild(headShot);

  let pdfLink = document.createElement('a');
  pdfLink.setAttribute('href', 'landPage/Dev.pdf');
  pdfLink.textContent = 'A PDF Link to My Resume';

  let gitHubTitle = document.createElement('div');
  gitHubTitle.classList.add('resumeSideTitle');
  gitHubTitle.textContent = "GitHub:";

  let gitHubLink =  document.createElement('a');
  gitHubLink.setAttribute('href', 'https://github.com/EvanPatrick423');
  gitHubLink.classList.add('resumeLink');
  gitHubLink.textContent = 'https://github.com/EvanPatrick423';

  let technicalSkillsTitle = document.createElement('div');
  technicalSkillsTitle.classList.add('resumeSideTitle');
  technicalSkillsTitle.textContent = "Technical Skills:";

  let technicalSkillsCont = document.createElement('div');
  //technicalSkillsCont.classList.add('');

  let technicalSkillsUL = document.createElement('ul');

  let technicalSkillsData = [
    'JavaScript',
    'node.js',
    'express',
    'SQL',
    'Java',
    'Python',
    'Django',
    'Mendix',
    'Proviner',
    'Jenkins CI/CD tool',
    'MongoDB',
    'Snowflake',
    'PostgreSQL',
    'VBA',
    'HTML5',
    'CSS',
    'Labview',
    'ChemCad',
    'Solidworks',
    'Proficient in Excel, Microsoft Office and PowerPoint'
  ]

  for (let i = 0; i < technicalSkillsData.length; i++) {
    var li = document.createElement('li');
    li.innerText = technicalSkillsData[i];
    technicalSkillsUL.appendChild(li);
  }

  let honorsTitle = document.createElement('div');
  honorsTitle.classList.add('resumeSideTitle');
  honorsTitle.textContent = "Honors:";

  let honorsCont = document.createElement('div');

  let honorsUL = document.createElement('ul');

  let honorsData = [
    'Graduated University of Tennessee with Deans list distinction for high academic standing',
    '2019 Tau Beta Pi Engineering Honors Society Member'
  ]

  for (let i = 0; i < honorsData.length; i++) {
    var li = document.createElement('li');
    li.innerText = honorsData[i];
    honorsUL.appendChild(li);
  }

  honorsCont.appendChild(honorsUL);

  let activitiesTitle = document.createElement('div');
  activitiesTitle.classList.add('resumeSideTitle');
  activitiesTitle.textContent = "Activities:";

  let chemECarTitle = document.createElement('div');
  chemECarTitle.classList.add('resumeSubTitle02','resume-block');
  chemECarTitle.textContent = "Chem-E-Car Captain";

  let chemECarStatement = document.createElement('div');
  chemECarStatement.classList.add('resume-block');
  chemECarStatement.textContent = "Chemical Engineering Competition, August 2016 - December 2018";

  let chemECarCont = document.createElement('div');

  let chemECarUL = document.createElement('ul');

  let chemECarData = [
    'AIChE Nationals 2018 placed 8th',
    'AIChE Nationals 2017 placed 13th',
    'AIChE Regionals 2017 placed 3rd'
  ]

  for (let i = 0; i < chemECarData.length; i++) {
    var li = document.createElement('li');
    li.innerText = chemECarData[i];
    chemECarUL.appendChild(li);
  }

  chemECarCont.appendChild(chemECarUL);

  let okiTurboTitle = document.createElement('div');
  okiTurboTitle.classList.add('resumeSubTitle02','resume-block');
  okiTurboTitle.textContent = "Oki Turbo";

  let okiTurboStatement = document.createElement('div');
  okiTurboStatement.classList.add('resume-block');
  okiTurboStatement.textContent = "Drummer, November 2016 - Present";

  let okiTurboCont = document.createElement('div');

  let okiTurboUL = document.createElement('ul');

  let okiTurboData = [
    'We create, refine, memorize, and perform pieces of music',
    'Manages money made to invest into merchandise, new equipment, and other necessities',
    'Collaborates with many entities to organize and plan events'
  ]

  for (let i = 0; i < okiTurboData.length; i++) {
    var li = document.createElement('li');
    li.innerText = okiTurboData[i];
    okiTurboUL.appendChild(li);
  }

  okiTurboCont.appendChild(okiTurboUL);

  let okiTurboLink =  document.createElement('a');
  okiTurboLink.setAttribute('href', 'https://open.spotify.com/artist/1XPVjiMlhwj4FrGRJ8UZGv?si=rGmqsMbCS8ike2nN88keDg');
  okiTurboLink.classList.add('resumeLink');
  okiTurboLink.textContent = 'Spotify Link';

  technicalSkillsCont.appendChild(technicalSkillsUL);
  headShotCol.append(headShotCont,pdfLink,gitHubTitle,gitHubLink,
    technicalSkillsTitle,technicalSkillsCont,honorsTitle,honorsCont,
    activitiesTitle,chemECarTitle,chemECarStatement,chemECarCont,
    okiTurboTitle,okiTurboStatement,okiTurboLink,okiTurboCont);




  aboutRow.appendChild(headShotCol);

  aboutSection.appendChild(aboutRow);

  show.appendChild(aboutSection);


  let turned = false;
  function changePage () {
    if (turned === false) {
      resume.setAttribute('src','landPage/Dev1024_2.jpg');
      pageTurn.textContent = '<';
      turned = true;
    } else {
      resume.setAttribute('src','landPage/Dev1024_1.jpg');
      pageTurn.textContent = '>';
      turned = false;
    }
  }
}
//makeShow();
showHome();
