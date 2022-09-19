//Import Statements
import {addTask, storageAvailable} from './functions.js';




// Object Class Statements

class Task {
  constructor (title, status, description, dueDate, createdDate, priority, notes, checklist, project, id) {
    this.title = title;
    this.status = status;
    this.description = description;
    this.dueDate = dueDate;
    this.createdDate = createdDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.project = project;
    this.id = id;
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

//---------- Setting Up the initial project array

let projectDatabase = JSON.parse(localStorage.getItem('projectDatabase'));
//console.log(projectDatabase);
if (projectDatabase === null) {
  projectDatabase = [];
}
//---------- Setting up a task database per project identified by project id
function initialzeProjectTaskDatabase (project) {
  let id = project.id;
  let idString = id.toString();
  let taskDatabase = JSON.parse(localStorage.getItem(idString));
  if (taskDatabase === null) {
    let exTask = new Task('Put your Title Here','Draft','Put a description here',
     'Due Date', 'priority', 'notes',
     ['Here you can make checklists', 'double click to strike through', 'checklist item 3'],
      project.id, Date.now());
    taskDatabase = [exTask];
  }
  return taskDatabase;
}

function updateTaskBoard (project) {
  let taskDatabase = initialzeProjectTaskDatabase(project);
  clearTaskBoard();
  createTaskBoardHeader(project);
  for (let x = 0; x<taskDatabase.length; x++) {
    populateTask(taskDatabase[x],project);
  }
}

function createTaskBoardHeader(project) {
  let taskBoard = document.getElementById('taskBoard');

  const header = document.createElement('div');
  header.classList.add('taskBoardHeader');

  const addButton = document.createElement('button');
  addButton.classList.add('addTask');
  addButton.textContent = '+';
  addButton.addEventListener('click', () => createTask(project));

  header.appendChild(addButton);
  taskBoard.appendChild(header);

}

function populateTask (task,project) {
  let taskBoard = document.getElementById('taskBoard');

  const taskBack = document.createElement('div');
  taskBack.classList.add('taskBackBoard');
  taskBack.setAttribute('id',task.id);

  const titleBack = document.createElement('div');
  titleBack.classList.add('titleBack');

  const taskTitle = document.createElement('input');
  taskTitle.setAttribute('id', 'title' + task.id);
  taskTitle.value = task.title;
  taskTitle.addEventListener('keyup', () => saveTask(task, project));

  const taskStatus = document.createElement('input');
  taskStatus.setAttribute('id','status'+task.id);
  taskStatus.value = task.status;
  taskStatus.addEventListener('keyup', () => saveTask(task, project));

  const taskDescription = document.createElement('input');
  taskDescription.setAttribute('id','description'+ task.id);
  taskDescription.value = task.description;
  taskDescription.addEventListener('keyup', () => saveTask(task, project));

  const deleteButton = document.createElement('div');
  deleteButton.classList.add('deleteButton');
  deleteButton.textContent = 'x';
  deleteButton.addEventListener('click', () => deleteTask(task,project));

  titleBack.appendChild(taskTitle);
  titleBack.appendChild(deleteButton);
  taskBack.appendChild(titleBack);
  taskBack.appendChild(taskStatus);
  taskBack.appendChild(taskDescription);
  taskBoard.appendChild(taskBack);
}




function saveTask (task, project) {

  let id = project.id;
  let idString = id.toString();

  let titleInput = document.getElementById('title' + task.id);
  task.title = titleInput.value;

  let titleStatus = document.getElementById('status' + task.id);
  task.status = titleStatus.value;

  let titleDescription = document.getElementById('description' + task.id);
  task.description = titleDescription.value;

  let taskDatabase = initialzeProjectTaskDatabase(project);
  for (let x = 0; x < taskDatabase.length; x++) {
    console.log(task.id + ' ' + taskDatabase[x].id);
    if (task.id === taskDatabase[x].id) {
      console.log('hit');
      taskDatabase[x] = task;
    }
  }

  console.log(taskDatabase);

  if(storageAvailable('localStorage')) {
    localStorage.setItem(idString, JSON.stringify(taskDatabase)); //Push to localDatabase of project id
  }
}

function saveProject (project) {
  let projectId = project.id;
  let titleInput = document.getElementById(projectId);
  project.title = titleInput.value;
  if(storageAvailable('localStorage')) {
    localStorage.setItem('projectDatabase', JSON.stringify(projectDatabase)); //push to local storage
  }
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
  updateTaskBoard(projectDatabase[0]);
}

function popProjectTab (project,col) {

  const tabBack = document.createElement('div');
  tabBack.classList.add('projectTabBackground');
  tabBack.addEventListener('click', () => changeProject(project));

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

function clearTaskBoard () {
  let taskBoard = document.getElementById('taskBoard');
  while(taskBoard.firstChild) {
    taskBoard.removeChild(taskBoard.lastChild);
  }
}

function createTask(project) {
  let blankTitle = '';
  let id = Date.now();
  let idString = id.toString();
  let status = 'Draft';
  let description = 'place a description here';
  let dueDate = null;
  let createdDate = new Date();
  let priority = 'meh';
  let notes = '';
  let checklist = [];

  let taskDatabase = initialzeProjectTaskDatabase(project);

  let newTask = new Task(blankTitle,status,description,dueDate,createdDate,priority,notes,checklist,project.id,idString);
  taskDatabase.push(newTask);

  let projectId = project.id;
  let proIdString = projectId.toString();

  if(storageAvailable('localStorage')) {
    localStorage.setItem(proIdString, JSON.stringify(taskDatabase));
  }

  clearTaskBoard();
  updateTaskBoard(project);
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

function deleteTask (task, project) {
  let taskDatabase = initialzeProjectTaskDatabase(project);
  for (let x = 0; x < taskDatabase.length; x++) {
    if (task.id === taskDatabase[x].id) {
      taskDatabase.splice(x,1);
      break;
    }
  }

  let id = project.id;
  let idString = id.toString();

  if(storageAvailable('localStorage')) {
    localStorage.setItem(idString, JSON.stringify(taskDatabase));
  }
  updateTaskBoard(project);
}

function changeProject (project) {
  clearTaskBoard();
  updateTaskBoard(project);
}


updateLeftCol (projectDatabase);
