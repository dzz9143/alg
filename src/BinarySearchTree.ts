import { Compare } from "./typings";

class Node<K, V> {
    public key: K;
    public value: V;
    public right: Node<K, V>;
    public left: Node<K, V>;
    public compare: Compare<K>;
    public count: number;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}

class BST<K, V> {
    public root: Node<K, V>;
    public compare: Compare<K>;

    constructor(compare: Compare<K>) {
        this.compare = compare;
        this.root = null;
    }

    public get = (key: K): V => {
        let p = this.root;
        while (p !== null) {
            const cmp = this.compare(key, p.key);
            if (cmp < 0) {
                p = p.left;
            } else if (cmp > 0) {
                p = p.right;
            } else {
                return p.value;
            }
        }

        return null;
    }

    public put = (key: K, value: V) => {
        this.root = this._put(this.root, key, value);
    }

    private _put = (cur: Node<K, V>, key: K, value: V): Node<K, V> => {
        if (cur === null) {
            return new Node<K, V>(key, value);
        }
        const cmp = this.compare(key, cur.key);
        if (cmp < 0) {
            cur.left = this._put(cur.left, key, value);
        } else if (cmp > 0) {
            cur.right = this._put(cur.right, key, value);
        } else {
            cur.value = value;
        }
        cur.count = 1 + this._size(cur.left) + this._size(cur.right);
        return cur;
    }

    // smallest key
    public min = () => {
        const node = this._min(this.root);
        return node && node.key;
    }

    private _min = (cur: Node<K, V>): Node<K, V> => {
        if (cur === null) {
            return null;
        }
        const leftMin = this._min(cur.left);
        return leftMin !== null ? leftMin : cur;
    }

    // largest key
    public max = () => {
        const node = this._max(this.root);
        return node && node.key;
    }

    private _max = (cur: Node<K, V>): Node<K, V> => {
        if (cur === null) {
            return null;
        }

        const rightMax = this._max(cur.right);
        return rightMax !== null ? rightMax : cur;
    }

    // floor -> largest key that small than or equal to the given key
    public floor = (key: K): K => {
        const node = this._floor(this.root, key);
        return node && node.key;
    }

    private _floor = (cur: Node<K, V>, key: K): Node<K, V> => {
        if (cur === null) {
            return null;
        }

        const cmp = this.compare(cur.key, key);
        if (cmp < 0) {
            // two case, current node or in right tree
            const right = this._floor(cur.right, key);
            return right !== null ? right : cur;
        } else if (cmp > 0) {
            return this._floor(cur.left, key);
        } else {
            return cur;
        }
    }

    // ceil -> smallest key that great than or equal to the given key
    public ceil = (key: K): K => {
        const node = this._ceil(this.root, key);
        return node && node.key;
    }

    private _ceil = (cur: Node<K, V>, key: K): Node<K, V> => {
        if (cur === null) {
            return null;
        }

        const cmp = this.compare(cur.key, key);
        if (cmp < 0) {
            return this._ceil(cur.right, key);
        } else if (cmp > 0) {
            // two case, current node or in left tree
            const left = this._ceil(cur.left, key);
            return left !== null ? left : cur;
        } else {
            return cur;
        }

    }

    // size
    public size = (): number => {
        return this._size(this.root);
    }
    private _size = (cur: Node<K, V>): number => {
        if (cur === null) {
            return 0;
        }

        return cur.count;
    }

    // rank - number of keys less than the given key
    public rank = (key: K): number => {
        return this._rank(this.root, key);
    }

    private _rank = (cur: Node<K, V>, key: K): number => {
        if (cur === null) {
            return 0;
        }

        const cmp = this.compare(cur.key, key);

        if (cmp < 0) {
            return 1 + this._size(cur.left) + this._rank(cur.right, key);
        } else if (cmp > 0) {
            return this._rank(cur.left, key);
        } else {
            return this._size(cur.left);
        }
    }

    // select - key of rank K
    public select = (rank: number): K => {
        const node = this._select(this.root, rank);
        return node && node.key;
    }

    private _select = (cur: Node<K, V>, rank: number): Node<K, V> => {
        if (cur === null) {
            return null;
        }

        const leftSize = this._size(cur.left);

        if (leftSize < rank) {
            return this._select(cur.right, rank - 1 - leftSize);
        } else if (leftSize > rank) {
            return this._select(cur.left, rank);
        } else {
            return cur;
        }
    }

    // deleteMin - delete node of smallest key in the tree
    public deleteMin = () => {
        this._deleteMin(this.root);
    }

    private _deleteMin = (cur: Node<K, V>): Node<K, V> => {
        if (cur === null) {
            return null;
        }

        if (cur.left === null) {
            return cur.right;
        }

        cur.left = this._deleteMin(cur.left);
        cur.count = 1 + this._size(cur.left) + this._size(cur.right);
        return cur;
    }

    // delete 
    public delete = (key: K) => {
        this._delete(this.root, key);        
    }

    private _delete = (cur: Node<K, V>, key: K): Node<K, V> => {
        if (cur === null) {
            return null;
        }

        const cmp = this.compare(cur.key, key);

        if (cmp < 0) {
            cur.right = this._delete(cur.right, key);
        } else if (cmp > 0) {
            cur.left = this._delete(cur.left, key);
        } else {
            if (cur.left !== null && cur.right !== null) {
                const rightMinNode = this._min(cur.right);
                rightMinNode.left = cur.left;
                rightMinNode.right = this._deleteMin(cur.right);;
                cur = rightMinNode;
            } else {
                return cur.left || cur.right;
            }
        }

        cur.count = 1 + this._size(cur.left) + this._size(cur.right);

        return cur;
    }
}

export {
    BST,
    Node,
};