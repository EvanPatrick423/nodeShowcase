export function startToDo() {
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
      console.log(this.createDate);
      console.log(this.priority);
      console.log(this.notes);
      console.log(this.checklist);
      console.log(this.project);
      console.log(this.id);
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
    constructor(title,done,id,task) {
      this.title = title;
      this.done = done;
      this.id = id;
      this.task = task;
    }

    showCheckListItem() {
      console.log(this.title);
      console.log(this.done);
      console.log(this.id);
      console.log(this.task);
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
      let createdDate = new Date();
      let useableDate = createdDate.getFullYear().toString().padStart(4, '0') + '-' + (createdDate.getMonth()+1).toString().padStart(2, '0') + '-' + createdDate.getDate().toString().padStart(2, '0');
      let exTask = new Task('Double Click to Reveal Input Box','Draft','Put a description here',
       '', useableDate,'priority', 'notes', [],
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
    header.classList.add('taskBoardHeader','row');

    const projectTitle = document.createElement('div');
    projectTitle.classList.add('projectTitleHeader','col-lg-4', 'col-md-4', 'col-sm-4', 'col-xs-3');
    projectTitle.textContent = project.title;

    const addButton = document.createElement('button');
    addButton.classList.add('addTask', 'col-lg-2', 'col-md-2', 'col-sm-4', 'col-xs-4');
    addButton.textContent = '+ Task';
    addButton.addEventListener('click', () => createTask(project));

    //const exportButton = document.createElement('button');
    //exportButton.classList.add('exportButton');
    //exportButton.textContent = 'Export to CSV';

    header.appendChild(addButton);
    //header.appendChild(exportButton);
    header.appendChild(projectTitle);
    taskBoard.appendChild(header);

  }

  function populateTask (task,project) {

    function deleteCheckItem (checkItem,task,project) {

      let taskDatabase = initialzeProjectTaskDatabase(project);

      for (let x = 0; x < taskDatabase.length; x++) {
        let y = taskDatabase[x].checklist.length
        for (let z = 0; z < y; z++) {
          if (checkItem.id === taskDatabase[x].checklist[z].id) {
            let checklist = taskDatabase[x].checklist;
            checklist.splice(z,1);
            taskDatabase[x].checklist = checklist;
            task.checklist = taskDatabase[x].checklist;
            break;
          }
        }
      }

      let id = project.id;
      let idString = id.toString();

      if(storageAvailable('localStorage')) {
        localStorage.setItem(idString, JSON.stringify(taskDatabase));
      }

      let checklistBack = document.getElementById('checklistBack' + task.id);

      while (checklistBack.firstChild) {
        checklistBack.removeChild(checklistBack.lastChild)
      }

      createChecklistHeader(task,project);

      for (let x = 0; x < task.checklist.length; x++) {
        populateCheckItem(task.checklist[x],task,project);
      }

      saveTask(task,project);
    }

    function createChecklistHeader(task,project) {
      const checklistHeader = document.createElement('div');
      checklistHeader.classList.add('checklistHeader');

      const addCheckItemButton = document.createElement('button');
      addCheckItemButton.textContent = 'Add Check List Item';
      addCheckItemButton.addEventListener('click', () => addCheckItem(task,project));

      checklistHeader.appendChild(addCheckItemButton);
      checklistBack.appendChild(checklistHeader);
    }

    function showCheckItemDiv(task,project) {
      let checklistBack = document.getElementById('checklistBack' + task.id);

      while (checklistBack.firstChild) {
        checklistBack.removeChild(checklistBack.lastChild)
      }

      createChecklistHeader(task,project);

      for (let x = 0; x < task.checklist.length; x++) {
        populateCheckItem(task.checklist[x],task,project);
      }

    }

    function addCheckItem(task,project) {
      let blankTitle = '';
      let id = Date.now();
      let idString = id.toString();
      let taskIdString = task.id.toString();
      let done = false;

      let newCheckItem = new CheckListItem(blankTitle,done,idString,taskIdString);
      task.checklist.push(newCheckItem);

      while (checklistBack.firstChild) {
        checklistBack.removeChild(checklistBack.lastChild)
      }

      createChecklistHeader(task,project);

      for (let x = 0; x < task.checklist.length; x++) {
        populateCheckItem(task.checklist[x],task,project);
      }

      saveTask(task,project);
    }

    function showCheckItemInput (checkItem,task,project) {
      let checklistBack = document.getElementById('checklistBack' + task.id);
      let checkListItem = document.getElementById(checkItem.id);

      while (checklistBack.firstChild) {
        checklistBack.removeChild(checklistBack.lastChild)
      }

      createChecklistHeader(task,project);

      for (let x = 0; x < task.checklist.length; x++) {
        const checkItemBack = document.createElement('div');
        checkItemBack.classList.add('checkItemBack');

        if (checkItem.id === task.checklist[x].id) {
          const checkItemText = document.createElement('input');
          checkItemText.classList.add('checkItemTextInput');
          checkItemText.setAttribute('id', task.checklist[x].id);
          console.log(task.checklist[x].title);
          checkItemText.value = deHash(task.checklist[x].title);
          checkItemText.addEventListener('keyup', () => saveTask(task, project));
          checkItemText.addEventListener('focusout', () => showCheckItemDiv(task,project));
          checkItemBack.appendChild(checkItemText);
          checklistBack.appendChild(checkItemBack);
          checkItemText.focus();
        } else {
          populateCheckItem(task.checklist[x],task,project);
        }
      }
    }

    function checkTaskItem (checklistItem) {
      if (checklistItem.done) {
        checklistItem.done = false;
      } else if (checklistItem.done === false) {
        checklistItem.done = true;
      } else {
        console.log('there was an error checking the task item');
      }
    }

    function populateCheckItem(checkItem,task,project){
      const checkItemBack = document.createElement('div');
      checkItemBack.classList.add('checkItemBack');

      const checkItemText = document.createElement('div');
      checkItemText.classList.add('checkItemText');
      checkItemText.setAttribute('id', checkItem.id);
      checkItemText.textContent = deHash(checkItem.title);
      checkItemText.addEventListener('dblclick', () => showCheckItemInput(checkItem,task,project));

      const checkButton = document.createElement('button');
      checkButton.addEventListener('click', () => checkTaskItem(checkItem));

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.addEventListener('click',() => deleteCheckItem(checkItem,task,project));

      checkItemBack.appendChild(checkItemText);
      checkItemBack.appendChild(checkButton);
      checkItemBack.appendChild(deleteButton);
      checklistBack.appendChild(checkItemBack);
    }

    let taskBoard = document.getElementById('taskBoard');

    const taskBack = document.createElement('div');
    taskBack.classList.add('taskBackBoard','row', 'padding-0');
    taskBack.setAttribute('id',task.id);

    const titleBack = document.createElement('div');
    titleBack.setAttribute('id', 'titleBack' + task.id);
    titleBack.classList.add('titleBack','col-lg-12', 'col-md-12', 'col-sm-12', 'col-xs-12','padding-0');

    const titleBackRow = document.createElement('div');
    titleBackRow.classList.add('row','padding-0','full-height');

    const taskTitle = document.createElement('div');
    taskTitle.setAttribute('id', 'title' + task.id);
    taskTitle.classList.add('taskTitle', 'col-lg-6', 'col-md-6', 'col-sm-6', 'col-xs-6');
    //console.log(deHash(task.title));
    taskTitle.textContent = deHash(task.title);
    taskTitle.addEventListener('dblclick', () => showInput(task,project));
    taskTitle.addEventListener('keyup', () => saveTask(task, project));

    const statusTab = document.createElement('div');
    statusTab.classList.add('statusTab', 'col-lg-6', 'col-md-6', 'col-sm-6', 'col-xs-6');

    const statusTabRow = document.createElement('div');
    statusTabRow.classList.add('row', 'padding-0','full-height');

    const taskStatus = document.createElement('div');
    taskStatus.setAttribute('id','status'+task.id);
    let statusClass = getStatusClass(task.status);
    taskStatus.classList.add(statusClass,'col-lg-6', 'col-md-6', 'col-sm-6', 'col-xs-6');
    taskStatus.textContent = task.status;
    taskStatus.addEventListener('keyup', () => saveTask(task, project));

    const deleteButton = document.createElement('div');
    deleteButton.classList.add('toDoDeleteButton','col-lg-6', 'col-md-6', 'col-sm-6', 'col-xs-6');
    deleteButton.textContent = 'x';
    deleteButton.addEventListener('click', () => deleteTask(task,project));

    const taskMain = document.createElement('div');
    taskMain.classList.add('taskMain','col-lg-12', 'col-md-12', 'col-sm-12', 'col-xs-12');

    const taskRow = document.createElement('div');
    taskRow.classList.add('taskRow','row','padding-0');

    const dateHolder = document.createElement('div');
    dateHolder.classList.add('dateHolder','col-lg-3', 'col-md-3', 'col-sm-3', 'col-xs-3','padding-0');

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


    const descriptionCol = document.createElement('div');
    descriptionCol.classList.add('descriptionCol','col-lg-3', 'col-md-3', 'col-sm-3', 'col-xs-3','padding-0');

    const taskDescription = document.createElement('textarea');
    taskDescription.setAttribute('type', 'text');
    taskDescription.setAttribute('id','description'+ task.id);
    taskDescription.classList.add('taskDescription','col-lg-12', 'col-md-12', 'col-sm-12', 'col-xs-12');
    taskDescription.value = deHash(task.description);
    taskDescription.addEventListener('keyup', () => saveTask(task, project));

    const notesCol = document.createElement('notesCol');
    notesCol.classList.add('notesCol','col-lg-3', 'col-md-3', 'col-sm-3', 'col-xs-3','padding-0');

    const notes = document.createElement('textarea');
    notes.setAttribute('type', 'text');
    notes.setAttribute('id','notes' + task.id);
    notes.classList.add('full-height','col-lg-12', 'col-md-12', 'col-sm-12', 'col-xs-12')
    notes.value = deHash(task.notes);
    notes.addEventListener('keyup', () => saveTask(task,project));

    const checklistBack = document.createElement('div');
    checklistBack.classList.add('checklistBack','col-lg-3', 'col-md-3', 'col-sm-3', 'col-xs-3','padding-0');
    checklistBack.setAttribute('id','checklistBack' + task.id);

    createChecklistHeader(task,project);

    for (let x = 0; x < task.checklist.length; x++) {
      populateCheckItem(task.checklist[x],task,project);
      }


    statusTabRow.appendChild(taskStatus);
    statusTabRow.appendChild(deleteButton);
    statusTab.appendChild(statusTabRow);

    titleBackRow.appendChild(taskTitle);
    titleBackRow.appendChild(statusTab);
    titleBack.appendChild(titleBackRow);

    taskBack.appendChild(titleBack);

    descriptionCol.appendChild(taskDescription);

    notesCol.appendChild(notes);

    dateHolder.appendChild(createDate);
    dateHolder.appendChild(dueDate);

    taskRow.appendChild(descriptionCol);
    taskRow.appendChild(notesCol);
    taskRow.appendChild(dateHolder);
    taskRow.appendChild(checklistBack);

    taskMain.appendChild(taskRow);
    taskBack.appendChild(taskMain);

    taskBoard.appendChild(taskBack);


  }

  function hash(x) {
    if(x != undefined){
      if (x === '"') {
        alert('>:(');
      }
      return x.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    } else {}
  }

  function deHash(x) {
    if (x != undefined) {
      return x.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    } else {}
  }

    function showInput (task,project) {
      let titleBack = document.getElementById('titleBack' + task.id);
      while (titleBack.firstChild) {
        titleBack.removeChild(titleBack.lastChild);
      }
      const taskTitle = document.createElement('input');
      taskTitle.setAttribute('id', 'title' + task.id);
      taskTitle.value = deHash(task.title);
      taskTitle.addEventListener('focusout', () => showTitle(task,project));
      taskTitle.addEventListener('keyup', () => saveTask(task, project));


      const taskStatus = document.createElement('div');
      taskStatus.setAttribute('id','status'+task.id);
      let statusClass = getStatusClass(task.status);
      taskStatus.classList.add(statusClass);
      taskStatus.textContent = task.status;
      taskStatus.addEventListener('keyup', () => saveTask(task, project));

      const deleteButton = document.createElement('div');
      deleteButton.classList.add('toDoDeleteButton');
      deleteButton.textContent = 'x';
      deleteButton.addEventListener('click', () => deleteTask(task,project));

      titleBack.appendChild(taskTitle);
      titleBack.appendChild(taskStatus);
      titleBack.appendChild(deleteButton);

      taskTitle.focus();
    }

    function showTitle (task,project) {
      let titleBack = document.getElementById('titleBack' + task.id);

      while (titleBack.firstChild) {
        titleBack.removeChild(titleBack.lastChild);
      }

      const taskTitle = document.createElement('div');
      taskTitle.setAttribute('id', 'title' + task.id);
      taskTitle.classList.add('taskTitle');
      //console.log(deHash(task.title));
      taskTitle.textContent = deHash(task.title);
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
      deleteButton.classList.add('toDoDeleteButton');
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
    //console.log(titleInput);
    if (titleInput.nodeName === 'DIV') {
      task.title = titleInput.textContent;
    } else if (titleInput.nodeName === 'INPUT') {
      //console.log(hash(titleInput.value));
      task.title = hash(titleInput.value);
    }

    let taskStatus = document.getElementById('status' + task.id);
    task.status = taskStatus.textContent;

    let taskDescription = document.getElementById('description' + task.id);
    task.description = hash(taskDescription.value);

    let taskDueDate = document.getElementById('dueDate' + task.id);
    task.dueDate = taskDueDate.value;

    let taskCreateDate = document.getElementById('createDate' + task.id);
    task.createdDate = taskCreateDate.value;

    let taskNotes = document.getElementById('notes' + task.id);
    task.notes = hash(taskNotes.value);

    if (task.checklist.length > 0) {
      for (let x=0;x<task.checklist.length;x++) {
        let checklistItem = document.getElementById(task.checklist[x].id)
        if (checklistItem.nodeName === 'DIV') {
          //task.checklist[x].title = checklistItem.textContent;    Is this really needed??
        } else if (checklistItem.nodeName ==='INPUT') {
          task.checklist[x].title = hash(checklistItem.value);
        } else {
          console.log('there was an error finding the checklist DOM type for checkList item ' + task.checklist[x] + ' node name was found to be ' + checkListItem.nodeName);
        }
      }
    } else {}

    let taskDatabase = initialzeProjectTaskDatabase(project);
    for (let x = 0; x < taskDatabase.length; x++) {
      //console.log(task.id + ' ' + taskDatabase[x].id);
      if (task.id === taskDatabase[x].id) {
        //console.log('hit');
        taskDatabase[x] = task;
      }
    }

    //console.log(taskDatabase);

    if(storageAvailable('localStorage')) {
      localStorage.setItem(idString, JSON.stringify(taskDatabase)); //Push to localDatabase of project id
    }
  }

  function saveProject (project) {
    let projectId = project.id;
    let titleInput = document.getElementById(projectId);
    project.title = hash(titleInput.value);
    if(storageAvailable('localStorage')) {
      localStorage.setItem('projectDatabase', JSON.stringify(projectDatabase)); //push to local storage
    }
  }
  //-------------------- Left hand column boxes ----------------------------------

  function updateLeftCol (projectDatabase) {
    //console.log('hit');
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
    tabBack.classList.add('projectTabBackground', 'row');
    tabBack.addEventListener('click', () => changeProject(project));

    const projectTitle = document.createElement('input');
    projectTitle.classList.add('projectText', 'col-lg-10', 'col-md-10', 'col-sm-8', 'col-xs-6', 'padding-0');
    projectTitle.value = project.title;
    projectTitle.setAttribute('id',project.id);
    projectTitle.addEventListener('keyup', () => renameProject(project,projectTitle));

    const deleteButton = document.createElement('div');
    deleteButton.classList.add('toDoDeleteButton', 'col-lg-2', 'col-md-2', 'col-sm-4', 'col-xs-6', 'padding-0');
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
    headerBack.classList.add('headerBack', 'row');

    let addButton = document.createElement('button');
    addButton.classList.add('addButton', 'col-lg-6', 'col-md-6', 'col-sm-6', 'col-xs-6');
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

  //-------------------------------Add Task to database -----------------------
  function addTask (task) {
    console.log('Task = ' + task);
    database.push(task);

    if(storageAvailable('localStorage')) {
      localStorage.setItem('localLibrary', JSON.stringify(database));
    }
  }
  //------------------------- Can Use Local Storage Function -----------
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


  updateLeftCol (projectDatabase);

}
