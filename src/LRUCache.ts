import { DoubleLinkList, Node } from './DoubleLinkList';

class LRUCache<T> {
    private map: Map<string, Node<{ key: string, value: T}>>;
    private list: DoubleLinkList<{ key: string, value: T}>;
    private size: number;

    constructor(size: number) {
        this.map = new Map();
        this.list = new DoubleLinkList();
        this.size = size;
    }

    public set = (key: string, value: T) => {
        const node = this.map.get(key);
        if (!node) {
            if(this.map.size >= this.size) {
                const tailNode = this.list.tail();
                this.list.removeNode(tailNode);
                this.map.delete(tailNode.element.key);
            }
            const node = this.list.append({
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
}

export default LRUCache;