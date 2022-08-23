// Linked List 구현
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst(data) {
        if (!this.head) this.head = new Node(data)
        else {
            const node = new Node(data, this.head);
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    addLast(data) {
        let current = this.head;
        if (!current) current = new Node(data);
        else {
            while(current.next) {
                current = current.next;
            }
            current.next = new Node(data);
        }
        this.size++;
    }

    add(data, index = null) {
        if (!this.head) this.head = new Node(data);
        else {
            let current = this.head;
            let i = 0;
            if (index > this.size) throw "out of index"
            if (index !== null) {
                if (index === 0) {
                    let temp = this.head;
                    this.head = new Node(data);
                    this.head.next = temp;
                    this.size++;
                    return;
                }
            }
            while (current.next !== null) {
                i++;
                if (index === i) {
                    let temp = current.next;
                    let node = new Node(data);
                    node.next = temp;
                    current.next = node;
                    break;
                }
                current = current.next;

            }
            if (index === null) current.next = new Node(data);
        }
        this.size++;
    }

    remove(index = null) {
        let current = this.head;
        if (current) {
            let prev = current;
            let i = 0;
            if (index !== null) {
                if (index === 0) {
                    this.head = current.next
                    this.size--;
                    return;
                }
            }
            while (current.next) {
                i++;
                prev = current;
                current = current.next;
                if (i === index) break;
            }
            prev.next = current.next;
            this.size--;
        }
    }

    get(index = null) {
        let current = this.head;
        let i = 0;
        while (current) {
            if (index === null) console.log(current.data);
            else {
                if (i === index) {
                    console.log(current.data);
                    break;
                }
            }
            current = current.next;
            i++;
        }
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.data === value) return true;
            current = current.next;
        }
        return false;
    }
}
let list = new LinkedList();
list.add("1")
list.add("2")
list.addFirst("3")
list.addLast("4")
list.add("5", 1)
list.remove(2);
list.get();
console.log(list.contains("3"));
console.log(list.contains("4"));
