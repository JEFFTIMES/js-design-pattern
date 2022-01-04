

class Subject {
  
  constructor(){
    this.observers=[];
  }
  
  get countOfObservers(){
    return this.observers.length;
  }
  
  addObserver(observer) {
    return this.observers.push(observer)
  }

  getObserverByIndex(index) {
    if(index >-1 && index < this.observers.length){
      return this.observers[index]
    }
    return undefined
  }

  indexOf(observer){
    return this.observers.indexOf(observer)
  }

  removeObserver(observer) {
    return this.observers.splice(this.observers.indexOf(observer), 1)
  }

  removeAt(index) {
    return this.observers.splice(index, 1)
  }

  notify(context){
    for(let observer of this.observers){
      observer.update(context)
    }
  }
}
// initialize the subject object.
const subject = new Subject();

// get the document elements.
const controller = document.getElementById('mainCheckbox');
const addButton = document.getElementById('addNewObserver');
const container = document.getElementById('observersContainer');

// register the event listeners.
controller.addEventListener('click', notifyObservers);
addButton.addEventListener('click', addNewObserver);

// event listener for add button, it creates a new checkbox and adds it to the container
// and adds it to the observers list of the subject.
function addNewObserver() {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.update = function(value) {
    this.checked = value
  }
  container.appendChild(checkbox)
  subject.addObserver(checkbox)
}

// call the notify method to notify the observers with the status of the controller.
function notifyObservers(event){
  subject.notify(event.currentTarget.checked)
}