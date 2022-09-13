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
  constructor(title,id) {
    this.title = title;
    this.id = id;
  }

  showProject() {
    console.log(this.title);
    console.log(this.id);
  }

}

//---------- Setting Up the initial project array when entering the appendChild

let projectDatabase = JSON.parse(localStorage.getItem('projectDatabase'));
console.log(projectDatabase);
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
    //console.log(projectDatabase[x]);
    popProjectTab(projectDatabase[x], leftColumn);
  }
}

function popProjectTab (project,col) {

  const tabBack = document.createElement('div');
  tabBack.classList.add('projectTabBackground');

  const projectTitle = document.createElement('input');
  projectTitle.classList.add('projectText');
  projectTitle.value = project.title;
  projectTitle.setAttribute('id',project.id);
  projectTitle.addEventListener('keyup', () => renameProject(project,projectTitle));

  const deleteButton = document.createElement('div');
  deleteButton.classList.add('deleteButton');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => deleteProject(project));

  tabBack.appendChild(projectTitle);
  tabBack.appendChild(deleteButton);
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
  let id = Date.now();
  let idString = id.toString();
  const newProject = new Project(blankTitle,idString);

  projectDatabase.push(newProject); //push new object to project database

  clearLeftCol();
  updateLeftCol(projectDatabase);
  saveProject(newProject);
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

function saveProject (project) {
  let projectId = project.id;
  let titleInput = document.getElementById(projectId);
  project.title = titleInput.value;
  if(storageAvailable('localStorage')) {
    localStorage.setItem('projectDatabase', JSON.stringify(projectDatabase)); //push to local storage
  }
}

function renameProject (project,projectTitle) {
  console.log(project);
  project.title = projectTitle.value;
  saveProject(project);
}

function deleteProject (project) {

  for (let x = 0; x < projectDatabase.length; x++) {
    if (project.id === projectDatabase[x].id) {
      projectDatabase.splice(x,1);
    }
  }

  if(storageAvailable('localStorage')) {
    localStorage.setItem('projectDatabase', JSON.stringify(projectDatabase));
  }
  updateLeftCol(projectDatabase);
}

updateLeftCol (projectDatabase);
