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

let projectDatabase = JSON.parse(localStorage.getItem('localLibrary'));
if (projectDatabase === null) {
  projectDatabase = [];
  //console.log(library);
}

//-------------------- Left hand column boxes ----------------------------------

function updateLeftCol (projectDatabase) {
  clearLeftCol()
  for (x=0;x<projectDatabase.length;x++) {
    console.log(projectDatabase[x]);
    popProjectTab(projectDatabase.title);
  }
}

function popProjectTab (title) {
  //create each projectTab for each project
  let leftColumn = document.getElementById('left-hand-column');
  createLeftColheader(leftColumn);

  const tabBack = document.createElement('div');
  tabBack.classList.add('projectTabBackground');

  const projectTitle = document.createElement('div');
  projectTitle.classList.add('projectText');
  projectTitle.textContent = title;

}

function clearLeftCol () {

}


function createProject (title) {

}

function createLeftColHeader () {
  let
}
