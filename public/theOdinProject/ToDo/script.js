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

class CheckListItem {
  constructor(title,done,id) {
    this.title = title;
    this.done = done;
    this.id = id;
  }

  showCheckListItem() {
    console.log(this.title);
    console.log(this.done);
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

  const exportButton = document.createElement('button');
  exportButton.classList.add('exportButton');
  exportButton.textContent = 'Export to CSV';

  header.appendChild(addButton);
  taskBoard.appendChild(header);

}

function populateTask (task,project) {
  function addCheckItem(task,project) {
    let blankTitle = '';
    let id = Date.now();
    let idString = id.toString();
    let done = false;

    let newCheckItem = new CheckListItem(blankTitle,done,idString);
    task.checklist.push(newCheckItem);

    saveTask(task,project);
    clearTaskBoard();
    updateTaskBoard(project);
  }

  let taskBoard = document.getElementById('taskBoard');

  const taskBack = document.createElement('div');
  taskBack.classList.add('taskBackBoard');
  taskBack.setAttribute('id',task.id);

  const titleBack = document.createElement('div');
  titleBack.setAttribute('id', 'titleBack' + task.id);
  titleBack.classList.add('titleBack');

  const taskTitle = document.createElement('div');
  taskTitle.setAttribute('id', 'title' + task.id);
  taskTitle.classList.add('taskTitle');
  taskTitle.textContent = task.title;
  taskTitle.addEventListener('dblclick', () => showInput(task,project));
  taskTitle.addEventListener('keyup', () => saveTask(task, project));

  const taskStatus = document.createElement('div');
  taskStatus.setAttribute('id','status'+task.id);
  let statusClass = getStatusClass(task.status);
  taskStatus.classList.add(statusClass);
  taskStatus.textContent = task.status;
  taskStatus.addEventListener('keyup', () => saveTask(task, project));

  const taskDescription = document.createElement('textarea');
  taskDescription.setAttribute('type', 'text');
  taskDescription.setAttribute('id','description'+ task.id);
  taskDescription.classList.add('taskDescription');
  taskDescription.value = task.description;
  taskDescription.addEventListener('keyup', () => saveTask(task, project));

  const dueDate = document.createElement('input');
  dueDate.setAttribute('type','date');
  dueDate.setAttribute('id', 'dueDate' + task.id);
  dueDate.value = task.dueDate;
  dueDate.addEventListener('change', () => saveTask(task,project));

  const createDate = document.createElement('input');
  createDate.setAttribute('type','date');
  createDate.setAttribute('id', 'createDate' + task.id);
  createDate.value = task.createdDate;
  createDate.addEventListener('change', () => saveTask(task,project));

  const notes = document.createElement('input');
  notes.setAttribute('id','notes' + task.id);
  notes.value = task.notes;
  notes.addEventListener('keyup', () => saveTask(task,project));

  const checklistBack = document.createElement('div');
  checklistBack.classList.add('checklistBack');
  checklistBack.setAttribute('id','checklistBack' + task.id);

  const checklistHeader = document.createElement('div');
  checklistHeader.classList.add('checklistHeader');

  const addCheckItemButton = document.createElement('button');
  addCheckItemButton.addEventListener('click', () => addCheckItem(task,project));

  checklistHeader.appendChild(addCheckItemButton);
  checklistBack.appendChild(checklistHeader);

  for (let x = 0; x < task.checklist.length; x++) {
    const checkItemBack = document.createElement('div');
    checkItemBack.classList.add('checkItemBack');

    const checkItemText = document.createElement('div');
    checkItemText.classList.add('checkItemText');
    checkItemText.setAttribute('id', task.checklist[x].id);
    checkItemText.textContent = task.checklist[x].title;
    checkItemText.addEventListener('dblclick', () => showCheckItemInput(task.checklist[x],task));

    checkItemBack.appendChild(checkItemText);
    checklistBack.appendChild(checkItemBack);
  }

  const deleteButton = document.createElement('div');
  deleteButton.classList.add('deleteButton');
  deleteButton.textContent = 'x';
  deleteButton.addEventListener('click', () => deleteTask(task,project));

  titleBack.appendChild(taskTitle);
  titleBack.appendChild(taskStatus);
  titleBack.appendChild(deleteButton);
  taskBack.appendChild(titleBack);


  taskBack.appendChild(taskDescription);
  taskBack.appendChild(notes);
  taskBack.appendChild(dueDate);
  taskBack.appendChild(createDate);
  taskBack.appendChild(checklistBack);
  taskBoard.appendChild(taskBack);


}



  function showCheckItemInput (checkItem,task) {
    let checklistBack = document.getElementById('checklistBack' + task.id);
    let checkListItem = document.getElementById(checkItem.id);

    while (checklistBack.firstChild) {
      checklistBack.removeChild(checklistBack.lastChild)
    }

    const checklistHeader = document.createElement('div');
    checklistHeader.classList.add('checklistHeader');

    const addCheckItemButton = document.createElement('button');
    addCheckItemButton.addEventListener('click', () => addCheckItem(task,project));

    checklistHeader.appendChild(addCheckItemButton);
    checklistBack.appendChild(checklistHeader);

    for (let x = 0; x < task.checklist.length; x++) {
      const checkItemBack = document.createElement('div');
      checkItemBack.classList.add('checkItemBack');

      if (checkItem.id = task.checklist[x].id) {
        const checkItemText = document.createElement('input');
        checkItemText.classList.add('checkItemTextInput');
        checkItemText.setAttribute('id', task.checklist[x].id);
        checkItemText.value = task.checklist[x].title;
        checkItemText.addEventListener('dblclick', () => showCheckItemDiv(task.checklist[x],task));
        checkItemBack.appendChild(checkItemText);
        checklistBack.appendChild(checkItemBack);
      } else {
        const checkItemText = document.createElement('div');
        checkItemText.classList.add('checkItemText');
        checkItemText.setAttribute('id', task.checklist[x].id);
        checkItemText.textContent = task.checklist[x].title;
        checkItemText.addEventListener('dblclick', () => showCheckItemInput(task.checklist[x],task));
        checkItemBack.appendChild(checkItemText);
        checklistBack.appendChild(checkItemBack);
      }
    }

  }

  function showInput (task,project) {
    let titleBack = document.getElementById('titleBack' + task.id);
    while (titleBack.firstChild) {
      titleBack.removeChild(titleBack.lastChild);
    }
    const taskTitle = document.createElement('input');
    taskTitle.setAttribute('id', 'title' + task.id);
    taskTitle.value = task.title;
    taskTitle.addEventListener('focusout', () => showTitle(task,project));
    taskTitle.addEventListener('keyup', () => saveTask(task, project));

    const taskStatus = document.createElement('div');
    taskStatus.setAttribute('id','status'+task.id);
    let statusClass = getStatusClass(task.status);
    taskStatus.classList.add(statusClass);
    taskStatus.textContent = task.status;
    taskStatus.addEventListener('keyup', () => saveTask(task, project));

    const deleteButton = document.createElement('div');
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = 'x';
    deleteButton.addEventListener('click', () => deleteTask(task,project));

    titleBack.appendChild(taskTitle);
    titleBack.appendChild(taskStatus);
    titleBack.appendChild(deleteButton);
  }

  function showTitle (task,project) {
    let titleBack = document.getElementById('titleBack' + task.id);

    while (titleBack.firstChild) {
      titleBack.removeChild(titleBack.lastChild);
    }

    const taskTitle = document.createElement('div');
    taskTitle.setAttribute('id', 'title' + task.id);
    taskTitle.classList.add('taskTitle');
    taskTitle.textContent = task.title;
    taskTitle.addEventListener('dblclick', () => showInput(task,project));
    taskTitle.addEventListener('keyup', () => saveTask(task, project));

    const taskStatus = document.createElement('div');
    taskStatus.setAttribute('id','status'+task.id);
    let statusClass = getStatusClass(task.status);
    console.log(statusClass);
    taskStatus.classList.add(statusClass);
    taskStatus.textContent = task.status;
    taskStatus.addEventListener('keyup', () => saveTask(task, project));

    const deleteButton = document.createElement('div');
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = 'x';
    deleteButton.addEventListener('click', () => deleteTask(task,project));

    titleBack.appendChild(taskTitle);
    titleBack.appendChild(taskStatus);
    titleBack.appendChild(deleteButton);
  }

function getStatusClass(status) {
  let clas = '';
  if (status === 'Draft') {
    clas = 'Draft';
  } else if (status === 'Pending') {
    clas === 'Pending';
  } else if (status === 'Overdue') {
    clas = 'Overdue';
  } else if (status === 'Done') {
    clas = 'Done';
  } else {
    clas = 'Error';
  }
  return clas;
}

function saveTask (task, project) {

  let id = project.id;
  let idString = id.toString();

  let titleInput = document.getElementById('title' + task.id);
  task.title = titleInput.value;

  let taskStatus = document.getElementById('status' + task.id);
  task.status = taskStatus.textContent;

  let taskDescription = document.getElementById('description' + task.id);
  task.description = taskDescription.value;

  let taskDueDate = document.getElementById('dueDate' + task.id);
  task.dueDate = taskDueDate.value;

  let taskCreateDate = document.getElementById('createDate' + task.id);
  task.createdDate = taskCreateDate.value;

  let taskNotes = document.getElementById('notes' + task.id);
  task.notes = taskNotes.value;

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
  let useableDate = createdDate.getFullYear().toString().padStart(4, '0') + '-' + (createdDate.getMonth()+1).toString().padStart(2, '0') + '-' + createdDate.getDate().toString().padStart(2, '0');
  let priority = 'meh';
  let notes = '';
  let checklist = [];

  let taskDatabase = initialzeProjectTaskDatabase(project);

  let projectId = project.id;
  let proIdString = projectId.toString();

  let newTask = new Task(blankTitle,status,description,dueDate,useableDate,priority,notes,checklist,proIdString,idString);
  taskDatabase.push(newTask);



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
