class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  getAllNodes() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
  getSize() {
    let count = 0;
    let temp = this.head;
    while (temp !== null) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  addNode(data) {
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = new Node(data);
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let list = new LinkedList(node1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
list.getAllNodes();
