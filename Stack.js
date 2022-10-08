class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    this.size++;
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
    } else {
      node.prev = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.top) {
      let top = this.top;
      this.top = top.prev;
      this.size--;
      return top.value;
    } else {
      return null;
    }
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())