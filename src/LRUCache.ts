import { Node, List } from "./DoublyLinkedList";

type CacheEntry<T> = {
    key: string;
    value: T;
}

class LRUCache<T> {
    private map: Map<string, Node<CacheEntry<T>>>;
    public list: List<CacheEntry<T>>;
    private limit: number;

    constructor(limit: number = 100) {
        this.map = new Map();
        this.list = new List();
        this.limit = limit;
    }

    public set = (key: string, value: T) => {
        const node = this.map.get(key);
        if(node) {
            this.list.remove(node);
            node.data = {
                key,
                value,
            };
            this.list.insertBeginning(node);
            return node;
        }

        if(this.map.size >= this.limit) {
            this.map.delete(this.list.tail.data.key);
            this.list.remove(this.list.tail);
        }

        const newNode = new Node({
            key,
            value,
        });

        this.list.insertBeginning(newNode);

        this.map.set(key, newNode);

        return newNode;
    }

    public get = (key: string): T => {
        const node = this.map.get(key);
        if(!node) {
            return null;            
        }

        this.list.remove(node);
        this.list.insertBeginning(node);
        return node.data.value;
    }

    public size = () => {
        return this.map.size;
    }

    public capacity = () => {
        return this.limit;
    }
}

export default LRUCache;