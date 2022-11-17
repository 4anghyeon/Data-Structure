class MaxHeap {
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
        let lastNodeValue = this.heap.pop();
        this.heap[1] = lastNodeValue; // 루트 노드를 말단 노드로 교체

        let position = 1; // 현재 위치
        let biggerChildPosition = this.compare(2, 3); // 더 큰 값을 갖는 자식노드의 위치

        // 말단 노드로 갈때까지 반복, 중간에 자식 노드 중에서 자신보다 더 작은 값이 없다면 중단.
        while (position < this.heap.length) {
            let leftChildPosition = position * 2; // 좌측 자식 노드 위치
            let rightChildPosition = position * 2 + 1; // 우측 자식 노드 위치
            
            biggerChildPosition = this.compare(leftChildPosition, rightChildPosition);

            // 자식 노드 중 자신보다 큰 값이 있다면 더 큰 값과 위치 교체
            if (this.heap[position] < this.heap[biggerChildPosition]) {
                let temp = this.heap[position];
                this.heap[position] = this.heap[biggerChildPosition];
                this.heap[biggerChildPosition] = temp;
                position = biggerChildPosition;
            } else {
                // 없으면 중단
                break;
            }
        }
    }

    // 두 포지션 중 더 큰 값을 갖는 포지션을 반환
    compare(p1, p2) {
        if (this.heap[p1] > this.heap[p2]) return p1;
        return p2;
    }
}

let heap = new MaxHeap();
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

console.log('before delete', heap.heap);
heap.delete();
console.log('after delete', heap.heap);