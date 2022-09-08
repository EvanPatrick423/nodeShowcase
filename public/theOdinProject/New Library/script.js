//how to make search loop that searches for items when not complete matches

//take string of library item (title, author, etc), then take string of search input
  //for (i=0; i < Librarystring.length; i ++) compare string thing to library thing
    //if match, look to thing next to it and compare
    //see how long it goes
    //return match of one library item with longest match length (most accurate search)
    //return all of the longest in item matches

//way to return variable safely
  //have the actual variable stored inside the function
  //then set a holder variable to that actual variable everytime you need to output data
    //if someone tries to change output variable it doesnt matter as long as you set
    //the program to equal the holder to the actual everytime you want to retrive data

//==============================================================================
const library = (() => {
//Initiate data base by finding local storage or making empty array-------------
  let database = JSON.parse(localStorage.getItem('localLibrary'));

  if (database === null) {
    database = [];
    //console.log(library);
  }

  //Add to library function
  const addToLibrary = (newbook) => {
    database.push(newbook)

    //Check if Local Storage available then writes to it/ Pulled from internet
    if(storageAvailable('localStorage')) {
      localStorage.setItem('localLibrary', JSON.stringify(database));
    }

  }
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

//Clear text on click of input boxes ----------------
  //define data inputs ---
  const bookData = document.querySelectorAll("[data-input]");

  //Add the event listener ---
  bookData.forEach((input) =>
    input.addEventListener("click", () => clearInput(input))
  );

  //clears input boxes on click ---
  function clearInput(input) {
    if (input.classList.contains('used')) return
    else {
      input.classList.add('used');
      input.value = '';
      }
    }

//Have I Read button ------------------

  //initate variables ---
  let haveRead = false;
  //make true value from haveRead button ---
  function haveIRead () {
    //console.log('haveIRead ran');
    if(haveRead === false){
      haveRead = true;
      truRead.classList.add('clicked-button');
      //console.log(haveRead);
    } else if (haveRead === true) {
      haveRead = false;
      truRead.classList.remove('clicked-button');
      //console.log(haveRead);
    } else {
      console.log('Something messed up at the haveIRead function');
    }
  }
  //Add event listener to the haveread ---
  const didRead = document.getElementById('truRead');
  didRead.addEventListener('click', function(){haveIRead();});
//----------------------------------------------

//

//Add Button----------------------
  //Set up Event Listener ---
  const inputData = document.querySelector('[data-write]');
  inputData.addEventListener('click', function() {
    //Pulls Current Book Information ---
    const addTitle = document.getElementById('add-book-title').value;
    const addAuthor = document.getElementById('add-book-author').value;
    const addPages = document.getElementById('add-book-pages').value;
    //make the object, and do stuff to it
    let book = new Book(addTitle, addAuthor, addPages, haveRead);
    //book.sayInfo();
    addToLibrary(book);
    //console.log(database);
    //deleteDisplay();
    makeDisplay(false);

  });

    //making the book object using class method
    class Book {
      constructor (addTitle, addAuthor, addPages, haveRead) {
        this.title = addTitle;
        this.author = addAuthor;
        this.pages = addPages;
        this.haveRead = haveRead;
      }

      sayInfo () {
        console.log(this.title);
        console.log(this.author);
        console.log(this.pages);
        console.log(this.haveRead);
      }
    }

    function generateDisplay() {

    }
//Making the Display from the library
    function makeDisplay(search) {

      if (search) {

      } else {
        //initiate variables for library display ---
        console.log(database);

        database.forEach(addToDisplay());
      }


    }

    function addToDisplay(book) {
      console.log(book);
      const tileBack = document.createElement('div');
      tileBack.classList.add('tileBack');

      const bookTitle = document.createElement('div');
      bookTitle.classList.add('book-info');
      bookTitle.textContent = 'Title: ' + book.title;

      const bookAuthor = document.createElement('div');
      bookAuthor.classList.add('book-info');
      bookAuthor.textContent = 'Author: ' + book.author;

      const bookPages = document.createElement('div');
      bookPages.classList.add('book-info');
      bookPages.textContent = 'Number of Pages: ' + book.pages;

      const bookHaveRead = document.createElement('button');
      bookHaveRead.classList.add('book-info');
      bookHaveRead.textContent = book.haveRead;
      bookHaveRead.setAttribute('id', book.title + '-haveread')
      //bookHaveRead.addEventListener('click', () => changeHaveRead(title, haveRead, library));

      const deleteButton = document.createElement('div');
      deleteButton.classList.add('deleteButton');
      deleteButton.textContent = 'X';
      deleteButton.addEventListener('click', () => deleteBook(book.title, book.author, book.pages, book.haveRead));

      let libraryDisplay = document.getElementById('library-screen');

      libraryDisplay.appendChild(tileBack);
      tileBack.appendChild(deleteButton);
      tileBack.appendChild(bookTitle);
      tileBack.appendChild(bookAuthor);
      tileBack.appendChild(bookPages);
      tileBack.appendChild(bookHaveRead);

    }

})();
