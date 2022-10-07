export function manipulateDom () {
  const container = document.querySelector('#container');

  const content = document.createElement('p');
  content.classList.add('content');
  content.textContent = "hey I'm red!";
  content.style.color ='red';
  container.appendChild(content);

  const content2 = document.createElement('h3');
  content2.textContent = "I'm a blue h3!";
  content2.style.color = 'blue';
  container.appendChild(content2);

  const container2 = document.createElement('div');


  container2.style.cssText = 'background: pink; border-color: black; border-style: solid';

  const content3 = document.createElement('h1');
  const content4 = document.createElement('p');

  content3.textContent = "I'm in a div";
  content4.textContent = 'Me too!';

  container.appendChild(container2);
  container2.appendChild(content3);
  container2.appendChild(content4);
}
