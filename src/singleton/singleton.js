"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const Singleton = (function () {
    let instance;
    function addPublicProp(key, value) {
        instance[key] = value;
    }
    function createInstance() {
        const privateProps = {
            privateTitle: 'Private',
            privateAmount: 0
        };
        function readPrivateProp(key) {
            console.log(`${key}:`, privateProps[key]);
            return privateProps[key];
        }
        function addPrivateProp(key, value) {
            privateProps[key] = value;
        }
        return {
            publicTitle: 'single',
            publicAmount: 0,
            addPublicProp: addPublicProp,
            getPrivateProp: readPrivateProp,
            addPrivateProp: addPrivateProp
        };
    }
    function getInstance() {
        if (!instance) {
            instance = createInstance();
        }
        return instance;
    }
    return {
        getInstance
    };
})();
let s1 = Singleton.getInstance();
console.log(s1.publicName);
s1.publicName = 'publicProp';
console.log(s1);
s1.addPublicProp('newPublicProp', 'approachable');
console.log(s1);
console.log(s1.getPrivateProp('privateName'));
s1.addPrivateProp('privateTitle', 'nothing');
console.log(s1.getPrivateProp('privateTitle'));
let s2 = Singleton.getInstance();
assert_1.default.equal(s1, s2);
