import { equal } from 'assert';

// Closure + IIFE

const Singleton = (function(){
  let instance;

  function addPublicProp(key, value){
    instance['public'+ key] = value
  }

  function createInstance(){
    const privateProp = new Object({privateName:'ton'})
    function readPrivateProp(key){ 
      console.log(`${key}:`, privateProp[key]) 
    }
    function updatePrivateProp(key, value){
      privateProp[key] = value
    }

    return {
      publicName: 'single',
      addPublicProp: addPublicProp,
      getPrivatePropByKey: readPrivateProp,
      updatePrivateProp: updatePrivateProp
    }
  }

  function getInstance(){
    if(!instance){
      instance = createInstance()
    }
    return instance
  }

  return { 
    getInstance
  }
})()

let s1 = Singleton.getInstance()
console.log(s1.publicName)

s1.publicName = 'publicProp'
console.log(s1)

s1.addPublicProp('Title', 'approachable')
console.log(s1)

console.log(s1.getPrivatePropByKey('privateName'))

s1.updatePrivateProp('privateTitle', 'nothing')
console.log(s1.getPrivatePropByKey('privateTitle'))
s2 = Singleton.getInstance()
equal(s1, s2)