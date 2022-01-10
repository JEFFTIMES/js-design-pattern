export default class Topic {
  constructor(){
    this.subscribers = [];
  }
  subscribe(callback){
    if(typeof callback !== 'function'){
      throw new Error('callback must be a function');
    }
    //this.subscribers.push(callback);
    this.subscribers = [...this.subscribers, callback];
  }
  
  unsubscribe(callback){
    if(typeof callback !== 'function'){
      throw new Error('callback must be a function');
    }
    //this.subscribers.splice(this.subscribers.indexOf(callback),1);
    this.subscribers = this.subscribers.filter(subscriber => subscriber !== callback);
  }

  notify(message){
    for(let subscriber of this.subscribers){
      subscriber(message);
    }
  }

  state(){
    return this.subscribers.length
  }
}
