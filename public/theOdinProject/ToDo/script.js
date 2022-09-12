//Import Statements
import {addTask, storageAvailable} from './functions.js';

// Object Class Statements

class Task {
  constructor (title, status, description, dueDate, priority, notes, checklist, project) {
    this.title = title;
    this.status = status;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.project = project
  }
  //reporting function for Task
  showTask () {
    console.log(this.title);
    console.log(this.description);
    console.log(this.dueDate);
    console.log(this.priority);
    console.log(this.notes);
    console.log(this.checklist);
    console.log(this.project);
  }
}

class Project {
  constructor(title) {
    this.title = title;
  }

  showProject() {
    console.log(this.title);
  }

}

//---------- Setting Up the initial project array when entering the appendChild

let projectDatabase = JSON.parse(localStorage.getItem('projectDatabase'));
console.log('Project Database = ' + projectDatabase);
if (projectDatabase === null) {
  projectDatabase = [];
}

//-------------------- Left hand column boxes ----------------------------------

function updateLeftCol (projectDatabase) {

  //create each projectTab for each project
  let leftColumn = document.getElementById('left-hand-column');

  clearLeftCol();
  createLeftColHeader(leftColumn);
  for (let x=0;x<projectDatabase.length;x++) {
    console.log(projectDatabase[x]);
    popProjectTab(projectDatabase[x].title, leftColumn);
  }
}

function popProjectTab (title,col) {

  const tabBack = document.createElement('div');
  tabBack.classList.add('projectTabBackground');

  const projectTitle = document.createElement('input');
  projectTitle.classList.add('projectText');
  projectTitle.textContent = title;

  tabBack.appendChild(projectTitle);
  col.appendChild(tabBack);

}

function clearLeftCol () {
  let leftColumn = document.getElementById('left-hand-column');
  while(leftColumn.firstChild) {
    leftColumn.removeChild(leftColumn.firstChild);
  }
}


function addProject () {
  let blankTitle = '';
  const newProject = new Project(blankTitle);

  projectDatabase.push(newProject); //push new object to project database

  if(storageAvailable('projectDatabase')) {
    console.log(projectDatabase);
    localStorage.setItem('projectDatabase', JSON.stringify(projectDatabase)); //push to local storage
  }
  clearLeftCol();
  updateLeftCol(projectDatabase);
}

function createLeftColHeader (tab) {
  let headerBack = document.createElement('div');
  headerBack.classList.add('headerBack');

  let addButton = document.createElement('button');
  addButton.classList.add('addButton');
  addButton.textContent = '+';
  addButton.addEventListener('click', () => addProject());

  headerBack.appendChild(addButton);
  tab.appendChild(headerBack);
}

updateLeftCol (projectDatabase);
