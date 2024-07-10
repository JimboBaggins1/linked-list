import { Node } from '../src/node_class';

// Linked list
class LinkedList {
    constructor (head) {
        this.head = head;
    }


    // add a node to the end of the list
    append(value) {
        let tmp = this.head;
        while (tmp.next !== null) {
            tmp = tmp.next;
        }
        tmp.next = new Node(value, null)
    }

    prepend(value) {
        this.head = new Node(value, this.head);
    }

    get size() {
        let tmp = this.head;
        let count = 0;
        while (tmp !== null) {
            tmp = tmp.next;
            count++;
        }
        return count;
    }

    get tail() {
        let tmp = this.head;
        while (tmp.next !== null) {
            tmp = tmp.next;
        }
        return tmp;
    }

    at(index) {
        if (index < 0 || index % 1 !== 0) {
            console.warn('Index must be a whole number.');
            return
        }
        let tmp = this.head;

        for (let i = 0; i < index; i++) {
            tmp = tmp.next;
            if (!tmp) {
                console.warn('Index is greater than size of list.');
                return;
            }
        }
        return tmp;
    }

    pop() {
        let tmp = this.head;
        let prev = null;

        // special case - list only has one node
        if (!tmp.next) {
            return this.head = null;
        }

        while (tmp.next) {
            prev = tmp;
            tmp = tmp.next;
        }

        return prev.next = null;
    }

    contains(value) {
        let tmp = this.head;

        while (tmp) {
            if (tmp.value === value) {
                return true;
            }
            tmp = tmp.next;
        }

        return false;
    }

    find(value) {
        let tmp = this.head;
        let count = 0;

        while (tmp) {
            if (tmp.value === value) {
                return count;
            }
            tmp = tmp.next;
            count++;
        }
        return null;
    }

    toString() {
        let tmp = this.head;
        let stringView = '';

        while (tmp) {
            stringView = stringView + `( ${tmp.value} ) -> `;
            tmp = tmp.next;
        }

        return stringView + 'null';
    }

    insertAt(value, index) {
        let tmp = this.head;
        let prev = null;

        // check index is inside bounds
        if (index > this.size) {
            console.warn('Index is greater than size of list.')
            return -1;
        }

        if (index < 0) {
            console.warn('Index must be a whole number.');
            return -1;
        }

        // special case - adding new head node
        if (index === 0) {
            return this.head = new Node(value, tmp);
        }

        // special case - adding new tail node
        if (index === this.size) {
            return this.append(value);
        }

        for (let i = 0; i < index; i++) {
            prev = tmp;
            tmp = tmp.next;
        }

        prev.next = new Node(value, tmp);
        console.log(`prev = ${prev.value}. tmp = ${tmp.value}.`);
    }

    removeAt(index) {
        let tmp = this.head;
        let prev = null;
        let follower = tmp.next;

        // check index is inside bounds
        if (index > this.size) {
            console.warn('Index is greater than size of list.')
            return -1;
        }
        
        if (index < 0) {
            console.warn('Index must be a whole number.');
            return -1;
        }

        // special case - removing head node
        if (index === 0) {
            return this.head = follower;
        }

        // special case - removing tail node
        if (index === this.size) {
            return this.pop();
        }

        // general case
        for (let i = 0; i < index; i++) {
            prev = tmp;
            tmp = tmp.next;
            follower = follower.next;
        }

        tmp = null;
        prev.next = follower;
        //console.log(`prev = ${prev.value}. tmp = ${tmp.value}. follower = ${follower.value}.`);
    }
}

export { LinkedList };