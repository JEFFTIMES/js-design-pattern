export default class Publisher {
  constructor(name){
    this.name = name
  }
  publish(pubSub, topic, message){
    pubSub.publish(topic, message, this)
  }
}