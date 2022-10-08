class HastTable {

  constructor() {
    this.size = 3;
    this.buckets = new Array(this.size);
  }

  // 데이터 삽입
  put(key, value) {
    if (!key || !value) {
      throw new Error("invalid Input")
    }
    let index = this.hash(key);
    let item = this.buckets[index];
    if (item) {
      // hash값이 충돌이 날 경우 단순 값 대신 key와 value를 객체로 갖는 배열을 넣어준다...
      // 분리 연결법
      if (Array.isArray(item)) {
        item.push([key, value]);
        return;
      }
      let arr = [item];
      arr.push([key, value]);
      this.buckets[index] = arr;
    } else {
      this.buckets[index] = [[key, value]];
    }
  }

  // 데이터 추출
  get(key) {
    if (!key) throw new Error("invalid Input");
    let item = this.buckets[this.hash(key)];

    // type이 array면 중첩된 키가 들어갔다는 뜻
    if (Array.isArray(item)) {
      return item.find(i => i[0] === key)[1];

    }
    return this.buckets[this.hash(key)];
  }

  hash(key) {
    let hashed = 0;
    key.split("").forEach((c, idx) => {
      hashed += c.charCodeAt(0) + idx + key.length;
    })
    return hashed % this.size;
  }
}

const hashTable = new HastTable();
hashTable.put("test", 1);
hashTable.put("test1", 2);
hashTable.put("test2", 3);
console.log(hashTable.get("test"))
console.log(hashTable.get("test1"))
console.log(hashTable.get("test2"))