import { DoubleLinkList, Node } from './DoubleLinkList';

class LRUCache<T> {
    private map: Map<string, Node<{ key: string, value: T}>>;
    public list: DoubleLinkList<{ key: string, value: T}>;
    private limit: number;

    constructor(limit: number = 100) {
        this.map = new Map();
        this.list = new DoubleLinkList();
        this.limit = limit;
    }

    public set = (key: string, value: T) => {
        const node = this.map.get(key);
        if (!node) {
            if(this.map.size >= this.limit) {
                const tailNode = this.list.tail();
                this.list.removeNode(tailNode);
                this.map.delete(tailNode.element.key);
            }
            const node = this.list.insert(this.list.head(), {
                key,
                value,
            });
            this.map.set(key, node);
            return;
        }

        this.list.removeNode(node);
        this.list.insertNode(this.list.head(), node);
    }

    public get = (key: string): T => {
        const node = this.map.get(key);
        if (!node) {
            return null;
        }

        this.list.removeNode(node);
        this.list.insertNode(this.list.head(), node);
        return node.element.value;
    }

    public size = () => {
        return this.map.size;
    }

    public capacity = () => {
        return this.limit;
    }
}

export default LRUCache;