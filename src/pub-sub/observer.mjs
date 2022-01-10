export default class Observer {
  constructor(name){
    this.name = name;
    this.notified = this.notified.bind(this);
  }
  notified(message){
    console.log(this.name + ' receives : ' + message);
  };
  
}