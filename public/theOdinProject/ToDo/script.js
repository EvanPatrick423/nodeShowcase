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

let database = JSON.parse(localStorage.getItem('localLibrary'));
if (database === null) {
  database = [];
  //console.log(library);
}
