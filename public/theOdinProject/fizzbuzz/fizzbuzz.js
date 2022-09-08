let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    const thing = document.createElement('div');
    thing.textContent = 'FizzBuzz';
    thing.classList.add('thing');
    output.appendChild(thing);
    console.log("FizzBizz");
  } else if (i % 3 === 0) {
    const thing = document.createElement('div');
    thing.textContent = 'Fizz';
    thing.classList.add('thing');
    output.appendChild(thing);
    console.log("Fizz");
  } else if (i % 5 === 0) {
    const thing = document.createElement('div');
    thing.textContent = 'Buzz';
    thing.classList.add('thing');
    output.appendChild(thing);
    console.log("Buzz");
  } else {
    const thing = document.createElement('div');
    thing.textContent = i;
    thing.classList.add('thing');
    output.appendChild(thing);
    console.log(i);
  }
}
