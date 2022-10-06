let resumePageTurn = document.getElementById('page-turn');
let resumeImg = document.getElementById('resume');
let turned = false;


resumePageTurn.addEventListener('click', () => changePage());

function changePage () {
  if (turned === false) {
    resumeImg.style.backgroundImage = "url(landPage/resources/Dev1024_2.jpg)";
    resumePageTurn.textContent = '<';
    turned = true;
  } else {
    resumeImg.style.backgroundImage = "url(landPage/resources/Dev1024_1.jpg)";
    resumePageTurn.textContent = '>';
    turned = false;
  }
}
