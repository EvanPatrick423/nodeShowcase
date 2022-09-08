//--------- Setting up the Library array ----------

let library = JSON.parse(localStorage.getItem('localLibrary'));

if (library === null) {
  library = [];
  //console.log(library);
}
presentLibrary(library);

//--------- Add Current Book to Library array ----------
function addToLibrary (newBook) {
  //console.log(newBook);
  //console.log('library is ' + library + ' at addToLibrary function');
  library.push(newBook);

  if(storageAvailable('localStorage')) {
    localStorage.setItem('localLibrary', JSON.stringify(library));
  }
}

//------------ Clear Local Storage Function -----------
clearStored = document.getElementById('storage-clear');

clearStored.addEventListener('click', () => localStorage.clear());


//------------ Can Use Local Storage Function -----------
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

//--------------- Add book Input Button -------------

//defining add book button
const inputData = document.querySelector('[data-write]');

//adding event listener to add buttons
inputData.addEventListener('click', function() {
  //Pulls Current Book Information
  const addTitle = document.getElementById('add-book-title').value;
  const addAuthor = document.getElementById('add-author-name').value;
  const addPages = document.getElementById('add-book-pages').value;

  //Alert and Confirm  [to do]
  //alert('Are you sure you want to want to add this book');

  //-----title: blah
  //-----Author: blah
  //-----etc

  //calling function to create new object
  const newBook = new Book(addTitle, addAuthor, Number(addPages), haveRead);
  //console.log(newBook.info());

  addToLibrary(newBook);
  clearDisplay();
  presentLibrary(library);

});

//------- Making the Book Object --------------------(kinda bad object constructors, change to factory function later)

function Book (Title, Author, Pages, HaveRead)  {

  this.title = Title;
  this.author = Author;
  this.pages = Pages;
  this.haveRead = HaveRead;

  const str = 'the book is titled ' + Title + ' written by ' + Author + ', has ' + Pages + ' pages. Have I read? ' + HaveRead;

  this.info = function() {
    return (str);
  }

  //const that = this; //use a 'that' variable to snap the this function to a specific scope
  //console.log(that);

  //console.log('Book function ran');

  //Do I need to return if I'm just setting variable?
  //return(Title, Author, Pages, HaveRead)
}

//--------------- Book Input Data Boxes -------------

//Define the Books data inputs
const bookData = document.querySelectorAll("[data-input]");

//Event Listener to initiate clear function
bookData.forEach((input) =>
  input.addEventListener("click", () => clearInput(input))
);

//Clear function clears input boxes on click
function clearInput(input) {
  if (input.classList.contains('used')) return
  else {
    input.classList.add('used');
    input.value = '';
  }

}

//----------- Have Read Input Field ---------------------

//Defining true and false radio buttons
const truRead = document.getElementById('true');

//Define variable to store boolean
let haveRead = false;



//true button click function
truRead.addEventListener('click', function() {haveIRead();});

//-----------------haveIRead Function--------------------
function haveIRead() {
  if(haveRead === false){
    haveRead = true;
    truRead.classList.add('clicked-button');
    console.log(haveRead);
  } else if (haveRead === true) {
    haveRead = false;
    truRead.classList.remove('clicked-button');
    console.log(haveRead);
  } else {
    console.log('Something messed up at the HaveIRead function');
  }
}

//---------------------Search Function Code----------------------------


//Make constants
const searchData = document.querySelector('[data-search]');
const searchSelector = document.querySelectorAll('.search-selector');


//Event Listener of Search-By Buttons
searchSelector.forEach((selector) =>
  selector.addEventListener('click', () => searchSelect(selector)
));
//Event Listener on the search button
searchData.addEventListener('click', () =>search(haveRead))

function searchSelect(selector) {
  clearSearchSelect(); //removes clicked-button class to all buttons

  //console.log('Selector was ' + selector.name +' at searchSelect function');

  selector.classList.add('clicked-button');
}

function clearSearchSelect() {
  //Removes clicked-button class to all buttons
  searchSelector.forEach((selector) =>
  selector.classList.remove('clicked-button'))
}

function search(haveRead) {
  //Grabbing needed Info to start search

  const searchSelected = document.querySelector('.clicked-button'); //which search field is selected?

  //title, author, pages, and haveRead values respectiveley
  const searchTitle = document.getElementById('add-book-title');
  const searchAuthor = document.getElementById('add-author-name');
  const searchPages = document.getElementById('add-book-pages');
  const searchHaveRead = document.getElementById('add-have-read')


  //-need to look at one before you play with it?

  //console.log("searchSelected is " + searchSelected + ' at search function start');
  //console.log('searchTitle is ' + searchTitle + ' at search function start')
  //console.log('searchAuthor is ' + searchAuthor + ' at search function start')
  //console.log('searchPages is ' + searchPages + ' at search function start')
  //console.log('searchHaveRead was ' + haveRead + ' at search function start');

  //clear Search screen
  clearSearchScreen();


  if (searchSelected.name === searchTitle.name) {
    //console.log('Searched for title');
    for (x = 0; x < library.length; x++) {
      if (searchTitle.value === library[x].title) {
        //let e = 'matched library item ' + x + "'s title. Its " + library[x].title
        updateDisplay(library[x].title, library[x].author, library[x].pages, library[x].haveRead, true);
      } else {
        //console.log('not a match, title');
      }
    }
  } else if (searchSelected.name === searchAuthor.name) {
    //console.log('Searched for author');
    for (x = 0; x < library.length; x++) {
      if (searchAuthor.value === library[x].author) {
        //console.log('matched library item ' + x + "'s author. It's " + library[x].author);
        updateDisplay(library[x].title, library[x].author, library[x].pages, library[x].haveRead, true);
      } else {
        //console.log('not a match, author');
      }
    }
  } else if (searchSelected.name === searchPages.name) {

    //console.log('Searched for pages');
    //console.log(searchPages.value)
    for (x = 0; x < library.length; x++) {
      //console.log(library[x].pages);
      if (Number(searchPages.value) === library[x].pages) {
        //console.log('matched library item ' + x + "'s page number. It's " + library[x].pages);
        updateDisplay(library[x].title, library[x].author, library[x].pages, library[x].haveRead, true);
      } else {
        //console.log('not a match, pages');
      }
    }
  } else if (searchSelected.name === searchHaveRead.id) {
    console.log('Searched for have read');
    for (x = 0; x < library.length; x++) {

      if (haveRead === library[x].haveRead) {
        //console.log('matched library item ' + x + "'s title is " + library[x].title);
        updateDisplay(library[x].title, library[x].author, library[x].pages, library[x].haveRead, true);
      } else {
        //console.log('not a match, haveRead');
      }
    }
  } else {
    console.log('there was a problem matching the item to search');
  }
  console.log(searchSelected.name);
  console.log(searchHaveRead.id);

}
//---------- Update Library Display Function ---------------------
function presentLibrary (library) {
  for (x=0; x<library.length; x++) {
    //console.log(library[x]);
    updateDisplay(library[x].title, library[x].author, library[x].pages, library[x].haveRead, false);
  }
}
//---------- Update Display -------------------------
//display global variable(s)
let updateCount = 0;
function updateDisplay(title, author, pages, haveRead, search) {
  //updateCount++;

  let currentDisplay = document.getElementById('screen2');

  let searchDisplay = document.getElementById('searchScreen');

  const tileBack = document.createElement('div');
  tileBack.classList.add('tileBack');

  const bookTitle = document.createElement('div');
  bookTitle.classList.add('book-info');
  bookTitle.textContent = 'Title: ' + title;

  const bookAuthor = document.createElement('div');
  bookAuthor.classList.add('book-info');
  bookAuthor.textContent = 'Author: ' + author;

  const bookPages = document.createElement('div');
  bookPages.classList.add('book-info');
  bookPages.textContent = 'Number of Pages: ' + pages;

  const bookHaveRead = document.createElement('button');
  bookHaveRead.classList.add('book-info');
  bookHaveRead.textContent = haveRead;
  bookHaveRead.setAttribute('id', title + '-haveread')
  bookHaveRead.addEventListener('click', () => changeHaveRead(title, haveRead, library));

  const deleteButton = document.createElement('div');
  deleteButton.classList.add('deleteButton');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => deleteBook(title, author, pages, haveRead));

  //console.log(search);

  if (search) {
    searchDisplay.appendChild(tileBack);
  } else {
    //console.log('updated screen 2');
    currentDisplay.appendChild(tileBack);
  }

  //currentDisplay.appendChild(tileBack);
  tileBack.appendChild(deleteButton);
  tileBack.appendChild(bookTitle);
  tileBack.appendChild(bookAuthor);
  tileBack.appendChild(bookPages);
  tileBack.appendChild(bookHaveRead);


  //currentDisplay.textContent = match
}

function clearDisplay() {
  let currentDisplay = document.getElementById('screen2');
  let searchDisplay = document.getElementById('search-result');
  while (currentDisplay.firstChild) {
    currentDisplay.removeChild(screen2.lastChild);
  }
}

function clearSearchScreen() {
  let currentDisplay = document.getElementById('searchScreen');
  while (currentDisplay.firstChild) {
    currentDisplay.removeChild(searchScreen.lastChild);
  }
}


function deleteBook(title, author, pages, haveRead) {
  //console.log('title: ' + title + ' Author: ' + author + ' Pages: ' + pages + ' Have Read: ' + haveRead);

  let currentDisplay = document.getElementById('screen2');

  for (x = 0; x < library.length; x++) {
    if (title === library[x].title && author === library[x].author && pages === library[x].pages && haveRead === library[x].haveRead) {
      //console.log('made it through the if statement');
      library.splice(x, 1);
      if(storageAvailable('localStorage')) {
        localStorage.setItem('localLibrary', JSON.stringify(library));
      }
      clearDisplay();
      presentLibrary(library);
    }
  }
}

function changeHaveRead(bookTitle, bookHaveRead, library) {
  //console.log(library);
  if(bookHaveRead === true) {
    bookHaveRead = false;
    //console.log(bookHaveRead + ' of ' + library.title);
  } else {
    bookHaveRead = true;
    //console.log(bookHaveRead + ' of ' + library.title);
  }

  for (x = 0; x < library.length; x++) {
    if(bookTitle === library[x].title) {
      //console.log(library[x].title);
      library[x].haveRead = bookHaveRead;
      //console.log(library[x].haveRead);
    }
  }

  clearDisplay();
  presentLibrary(library);
}
