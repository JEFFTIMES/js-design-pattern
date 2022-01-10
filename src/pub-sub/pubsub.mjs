
import Topic from './Topic.mjs';

class PubSub {
  constructor(){
    this.topics = [];
  }

  addTopic(topicName){
    let topic = this.topics.filter(topic=>topic.name === topicName)[0]
    if(topic){
      console.log('Topic ' + topicName + ' already exists')
      return topic
    } else {
      topic = { 
        name: topicName,
        instance: new Topic()
      }
      this.topics.push(topic);
      return topic
    } 
  }
  removeTopic(topicName){
    this.topics = this.topics.filter(t=>t.name !== topicName);
  }

  subscribe(topicName, observer){
    // topicName does not exist, addTopic(), then topic.instance.subscribe() the observer.
    let topic
    const topics = this.topics.filter(topic => topic.name === topicName)
    if (topics[0] === undefined){
      topic = this.addTopic(topicName);
    } else {
      topic = topics[0];
    }
    topic.instance.subscribe(observer)
  }

  unsubscribe(topicName, observer){
    const topics = this.topics.filter(topic => topic.name === topicName)
    if( topics[0] === undefined) {
      console.log('Topic' + topicName + 'does not exist.')
      return undefined
    } 
    topics[0].instance.unsubscribe(observer)
    return observer
    
  }

  publish(topicName, message, publisher){
    const topics = this.topics.filter(topic => topic.name === topicName)
    if( topics[0] === undefined) {
      console.log('Topic' + topicName + 'does not exist.')
      return undefined
    }

    topics[0].instance.notify(message + '{ from ' + publisher.name + ' through ' + topicName + '}')
  }
}

export default PubSub;