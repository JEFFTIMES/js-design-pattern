import assert from 'assert';

// Closure + IIFE


type AvailablePropTypes = string | number; 

interface addProp {
  (key: string, value: AvailablePropTypes): void;
}

interface readProp {
  (key: string): AvailablePropTypes;
}

interface Instance {
  [index: string] : string | number | addProp | readProp;
  publicTitle: string;
  publicAmount: number;
  addPublicProp: addProp;
  getPrivateProp: readProp;
  addPrivateProp: addProp;
}

type GetInstance = { fn: () => Instance }

const Singleton = (function (){
  let instance: Instance ;

  function addPublicProp(key: string, value: AvailablePropTypes ) : void {
    instance[key] = value
    
  }

  function createInstance(): Instance {
    const privateProps : { 
      [index: string]: string | number, 
      privateTitle: string, 
      privateAmount: number
    } = { 
      privateTitle: 'Private', 
      privateAmount: 0
    }

    function readPrivateProp(key: string): AvailablePropTypes { 
      console.log(`${key}:`, privateProps[key]) 
      return privateProps[key]
    }

    function addPrivateProp(key: string, value: string | number): void {
      privateProps[key] = value
    }

    return {
      publicTitle: 'single',
      publicAmount: 0,
      addPublicProp: addPublicProp,
      getPrivateProp: readPrivateProp,
      addPrivateProp: addPrivateProp
    }
  }

  function getInstance(): Instance {
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

s1.addPublicProp('newPublicProp', 'approachable')
console.log(s1)

console.log(s1.getPrivateProp('privateName'))

s1.addPrivateProp('privateTitle', 'nothing')
console.log(s1.getPrivateProp('privateTitle'))
let s2 = Singleton.getInstance()
assert.equal(s1, s2)