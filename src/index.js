import { Node } from '../src/node_class.js';
import { LinkedList } from '../src/LinkedList_class.js';

let test = new LinkedList(new Node('first node'));
console.log(test);

test.append('second node');
test.prepend('new first node');
//console.log(test)
//console.log(test.head);
//console.log(test.at(2))
// test.pop();
console.log(test.toString());
test.removeAt(3);
console.log(test.toString());

