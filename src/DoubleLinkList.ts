class Node<T> {
    public element: T;
    public prev: Node<T>;
    public next: Node<T>;
    constructor(v: T = null, prev: Node<T> = null, next: Node<T> = null) {
        this.element = v;
        this.prev = prev || null;
        this.next = next || null;
    }
}

class DoubleLinkList<T> {
    public static createFromArray<T> (arr: T[]) {
        const list = new DoubleLinkList<T>();
        arr.forEach(v => {
            list.append(v);
        });
        return list;
    }

    private dumpHead: Node<T>;

    constructor(arr?: T[]) {
        this.dumpHead = new Node<T>();
        this.dumpHead.next = this.dumpHead;
        this.dumpHead.prev = this.dumpHead;

        if(arr && arr.length > 0) {
            arr.forEach(elem => {
                this.append(elem);
            });
        }
    }

    private createNode = (v: T) => {
        const node = new Node(v);

        return node;
    }

    public head = () => {
        return this.dumpHead.next;
    }

    public tail = () => {
        return this.dumpHead.prev;
    }

    public append = (v: T) => {
        const node = this.createNode(v);
        const tail = this.dumpHead.prev;
        // involve 3 nodes: previous tail node, newly created node & dump head
        tail.next = node;
        node.prev = tail;
        node.next = this.dumpHead;
        this.dumpHead.prev = node;
        return node;
    }

    public insert = (prevNode: Node<T>, v: T) => {
        // consider error cases
        // 1. prevNode is null
        // 2. prevNode is not in current list
        const node = this.createNode(v);
        const nextNode = prevNode.next;
        prevNode.next = node;
        node.prev = prevNode;
        node.next = nextNode;
        nextNode.prev = node;
        return node;
    }

    public insertNode = (prevNode: Node<T>, node: Node<T>) => {
        const nextNode = prevNode.next;
        prevNode.next = node;
        node.prev = prevNode;
        node.next = nextNode;
        nextNode.prev = node;
        return node;
    }

    public removeNode = (node: Node<T>) => {
        if(!node) {
            return node;
        }
        const preNode = node.prev;
        const nextNode = node.next;

        preNode.next = nextNode;
        nextNode.prev = preNode;

        node.next = null;
        node.prev = null;
        return node;
    }

    public find = (v: T) => {
        let p = this.dumpHead.next;
        while(p !== this.dumpHead) {
            if(p.element === v) {
                return p;
            }

            p = p.next;
        }

        return null;
    }

    public toString = () => {
        const arr = [];
        let p = this.dumpHead.next;
        while(p !== this.dumpHead) {
            arr.push(p.element);
            p = p.next;
        }

        return `[${arr.join(', ')}]`;
    }

}

export {
    Node,
    DoubleLinkList,
}