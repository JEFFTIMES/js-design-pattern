import PubSub from "./pubsub.mjs";
import Observer from "./observer.mjs";
import Publisher from "./publisher.mjs";

const pubSub = new PubSub();
const doctor = new Publisher('doctor');
const teacher = new Publisher('teacher');
const student = new Observer('student');
const parent = new Observer('parent');

pubSub.subscribe('Back to school',student.notified)
pubSub.subscribe('Back to school',parent.notified)

pubSub.subscribe('Stay at home',student.notified)
pubSub.subscribe('Stay at home',parent.notified)

teacher.publish(pubSub, 'Back to school', 'welcome back to school.');
doctor.publish(pubSub, 'Stay at home', 'please do not go back to school.');

pubSub.unsubscribe('Back to school', parent.notified)
teacher.publish(pubSub, 'Back to school', 'welcome back to school.');

pubSub.subscribe('Back to school',student.notified)
teacher.publish(pubSub, 'Back to school', 'welcome back to school.')