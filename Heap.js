class Heap {
  constructor() {
    // 구현의 편의성을 위해 첫 번째 인덱스는 사용하지 않는다.
    this.heap = [null];
  }

  add(num) {
    let position = this.heap.push(num) - 1; // 현재 노드 위치
    let parentPosition = Math.floor(position / 2); // 현재 노드의 부모 노드 위치

    // 현재 위치가 루트 노드이거나 부모 노드가 자신보다 크면 중단
    while (position > 1 && this.heap[parentPosition] < num) {

      // 부모 노드가 자신보다 작으면 위치 교체
      if (this.heap[parentPosition] < num) {
        let temp = this.heap[parentPosition];
        this.heap[parentPosition] = num;
        this.heap[position] = temp;
      }

      position = Math.floor(position / 2); // 부모 노드 위치로 이동
      parentPosition = Math.floor(position / 2); // 부모 노드 위치도 그에 따라 이동
    }
  }

  delete() {
    this.heap[1] = this.heap.pop(); // 루트 노드를 말단 노드로 교체
    let position = 1;

    let biggerChildNode = 0;
    while (position < this.heap.length && this.heap[position] > biggerChildNode) {

    }
  }
}

let heap = new Heap();
heap.add(100);
heap.add(36);
heap.add(19);
heap.add(25);
heap.add(1);
heap.add(3);
heap.add(17);
heap.add(2);
heap.add(7);
heap.add(120);
heap.delete();

console.log(heap.heap)