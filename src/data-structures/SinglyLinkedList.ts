interface ListNode {
  value: any;
  next: ListNode | null;
}

interface LinkedList {
  push(el: any): ListNode;
  insertAfter(node: ListNode, el: any): ListNode;
  remove(el: any): boolean;
  removeNode(node: ListNode): boolean;
  toString(): string;
}

class Node implements ListNode {
  public value: any;
  public next: ListNode;
  constructor(value: any, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList implements LinkedList {
  private dummyHead: ListNode;

  static fromArray(arr: any[]): LinkedList {
    const sll = new SinglyLinkedList();
    arr.forEach(el => {
      sll.push(el);
    });
    return sll;
  }

  constructor() {
    this.dummyHead = new Node(0);
  }

  public push(el: any): ListNode {
    let p = this.dummyHead;
    while (p.next !== null) {
      p = p.next;
    }
    const newNode = new Node(el);
    p.next = newNode;
    return newNode;
  }

  public insertAfter(node: ListNode, el: any): ListNode {
    const newNode = new Node(el, node.next);
    node.next = newNode;
    return newNode;
  }

  public remove(el: any): boolean {
    let removed = false;
    let p1 = this.dummyHead;
    let p2 = this.dummyHead.next;
    while (p2 !== null) {
      if (el === p2.value) {
        p1.next = p2.next;
        removed = true;
        break;
      }

      p1 = p1.next;
      p2 = p2.next;
    }

    return removed;
  }

  public removeNode(node: ListNode): boolean {
    let removed = false;
    let p1 = this.dummyHead;
    let p2 = this.dummyHead.next;
    while (p2 !== null && p2 !== node) {
      p2 = p2.next;
      p1 = p1.next;
    }

    if (p2 !== null) {
      removed = true;
      p1.next = p2.next;
    }

    return removed;
  }

  public toString(): string {
    let p = this.dummyHead.next;
    let str = '[';
    while(p !== null) {
      if(p.next !== null) {
        str += `${p.value}, `;
      } else {
        str += `${p.value}`;
      }
      p = p.next;
    }
    str += ']';
    return str;
  }
}

export default SinglyLinkedList;