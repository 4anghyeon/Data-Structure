class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // private
  _find(index) {
    // head에서 부터 조회
    if (index < this.size / 2) {
      let node = this.head;
      if (index === 0) return node;
      for (let i = 1; i <= index; i++) {
        node = node.next;
      }
      return node;
    }
    // tail에서부터 조회
    else {
      if (index > this.size) {
        throw new Error("out of index")
      }
      let node = this.tail;
      if (index === this.size) return node;
      for (let i = this.size; i >= index ; i--) {
        node = node.prev;
      }
      return node;
    }
  }

  // 외부에서 호출 용
  get(index) {
    return this._find(index).data;
  }

  // 가장 처음 노드로 추가
  addFirst(value) {
    this.size++;
    if (!this.head) {
      this.head = new Node(value);
      this.tail = new Node(value);
      return;
    }
    let head = this.head;
    let newFirstNode = new Node(value);

    newFirstNode.next = this.head;
    this.head.prev = newFirstNode;

    head.prev = newFirstNode;
    this.head = newFirstNode;
  }

  // 가장 마지막 노드로 추가
  addLast(value) {
    let newNode = new Node(value);
    this.size++;
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  // 특정 인덱스에 추가
  add(value, index) {
    if (index === 0) {
      this.addFirst(value);
      return;
    }
    else if (!index || (index !== 0 && index === this.size)) {
      this.addLast(value);
      return;
    }
    let node = this._find(index);
    let prevNode = node.prev;
    let newNode = new Node(value);
    prevNode.next = newNode;
    node.prev = newNode;
    newNode.prev = prevNode;
    newNode.next = node;
    this.size++;
  }

  // 모든 값 출력
  getAll() {
    let node = this.head;
    let valueList = [];
    for (let i = 0; i < this.size; i++) {
      valueList.push(node.data);
      node = node.next;
    }
    return valueList;
  }

  // 특정 인덱스 삭제
  remove(index) {
    if (Number.isNaN(index)) throw new Error("invalid input");
    this.size--;
    if (index === 0) {
      let headNext = this.head.next;
      headNext.prev = null;
      this.head = headNext;
    } else if (index === this.size) {
      let tailPrev = this.head.prev;
      tailPrev.next = null;
      this.tail = tailPrev;
    } else {
      let findNode = this._find(index);
      let nodeNext = findNode.next;
      let nodePrev = findNode.prev;
      nodePrev.next = nodeNext;
      nodeNext.prev = nodePrev;
    }
  }

  get length() {
    return this.size;
  }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.add(1);
doublyLinkedList.add(2);
doublyLinkedList.addLast(6);
doublyLinkedList.add(3);
doublyLinkedList.addFirst(4);
doublyLinkedList.add(10, 1);
doublyLinkedList.remove(0)

console.log(`getall: ${doublyLinkedList.getAll()}`)
console.log("get: " + doublyLinkedList.get(5));
console.log(doublyLinkedList.length);