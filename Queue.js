class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {

  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  // Queue의 뒤에 데이터 추기
  add(value) {
    this.size++;
    let node = new QueueNode(value);
    if (!this.front) {
      this.front = node;
    } else if (!this.back) {
      this.front.next = node;
      this.back = node;
    } else {
      let back = this.back;
      back.next = node;
      this.back = node;
    }
  }

  // 맨 앞 데이터 출력
  peek() {
    if (this.front) {
      return this.front.value;
    } else {
      return null;
    }
  }

  // 맨 앞 데이터 출력 하고 삭제
  poll() {
    if (this.front) {
      this.size--;
      let front = this.front;
      this.front = front.next;
      return front.value;
    } else {
      return null;
    }
  }
}

const queue = new Queue();

queue.add(1);
queue.add(2);
queue.add(4)
console.log(queue.peek());
console.log(queue.poll());
console.log(queue.poll());
console.log(queue.poll());
console.log(`size: ${queue.size}`);