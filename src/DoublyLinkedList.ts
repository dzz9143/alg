class Node<T> implements DoublyLinkedNode<T> {
    public data: T;
    public prev: Node<T>;
    public next: Node<T>;

    constructor(data: T) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}


class List<T> implements DoublyLinkedList<T> {
    public head: Node<T>;
    public tail: Node<T>;
    
    constructor() {
        this.head = null;
        this.tail = null;    
    }

    // assume node & newNode is not null
    public insertBefore = (node: Node<T>, newNode: Node<T>) => {
        newNode.next = node;
        if(!node.prev) {
            newNode.prev = null;
            this.head = newNode;
        } else {
            node.prev.next = newNode;
            newNode.prev = node.prev;
        }

        node.prev = newNode;
        return newNode;
    }

    public insertAfter = (node: Node<T>, newNode: Node<T>) => {
        newNode.prev = node;
        if(!node.next) {
            newNode.next = null;
            this.tail = newNode;
        } else {
            node.next.prev = newNode;
            newNode.next = node.next;
        }

        node.next = newNode;
        return newNode;
    }

    public insertBeginning = (node: Node<T>) => {
        if(!this.head) {
            this.head = node;
            this.tail = node;
            node.prev = null;
            node.next = null;
            return node;
        }

        return this.insertBefore(this.head, node);
    }

    public insertEnd = (node: Node<T>) => {
        if(!this.tail) {
            this.head = node;
            this.tail = node;
            node.prev = null;
            node.next = null;
            return node;
        }

        return this.insertAfter(this.tail, node);
    }

    public remove = (node: Node<T>) => {
        if(!node.prev) {
            this.head = node.next;
        } else {
            node.prev.next = node.next;
        }

        if(!node.next) {
            this.tail = node.prev;
        } else {
            node.next.prev = node.prev;
        }

        return node;
    }

    public toString = () => {
        let p = this.head;
        const arr = [];
        while(p) {
            arr.push(p.data);
            p = p.next;
        }
        return `[${arr.join(', ')}]`;
    }

}

export {
    Node,
    List,
}