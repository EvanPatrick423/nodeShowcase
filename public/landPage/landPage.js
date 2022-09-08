let resumePageTurn = document.getElementById('page-turn');
let resumeImg = document.getElementById('resume');
let turned = false;


resumePageTurn.addEventListener('click', () => changePage());

function changePage () {
  if (turned === false) {
    resumeImg.style.backgroundImage = "url(landPage/resources/0002.jpg)";
    resumePageTurn.textContent = '<';
    turned = true;
  } else {
    resumeImg.style.backgroundImage = "url(landPage/resources/0001.jpg)";
    resumePageTurn.textContent = '>';
    turned = false;
  }
}
