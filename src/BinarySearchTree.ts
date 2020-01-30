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

    private _put = (cur: Node<K, V>, key: K, value: V) => {
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
        return this._min(this.root);
    }

    private _min = (cur: Node<K, V>): K => {
        if (cur === null) {
            return null;
        }
        const leftMin = this._min(cur.left);
        return leftMin !== null ? leftMin : cur.key;
    }

    // largest key
    public max = () => {
        return this._max(this.root);
    }

    private _max = (cur: Node<K, V>): K => {
        if (cur === null) {
            return null;
        }

        const rightMax = this._max(cur.right);
        return rightMax !== null ? rightMax : cur.key;
    }

    // floor -> largest key that small than or equal to the given key
    public floor = (key: K): K => {
        return this._floor(this.root, key);
    }

    private _floor = (cur: Node<K, V>, key: K): K => {
        if (cur === null) {
            return null;
        }

        const cmp = this.compare(cur.key, key);
        if (cmp < 0) {
            // two case, current node or in right tree
            const rightFloor = this._floor(cur.right, key);
            return rightFloor !== null ? rightFloor : cur.key;
        } else if (cmp > 0) {
            return this._floor(cur.left, key);
        } else {
            return key;
        }
    }

    // ceil -> smallest key that great than or equal to the given key
    public ceil = (key: K): K => {
        return this._ceil(this.root, key);
    }

    private _ceil = (cur: Node<K, V>, key: K): K => {
        if (cur === null) {
            return null;
        }

        const cmp = this.compare(cur.key, key);
        if (cmp < 0) {
            return this._ceil(cur.right, key);
        } else if (cmp > 0) {
            // two case, current node or in left tree
            const leftCeil = this._ceil(cur.left, key);
            return leftCeil !== null ? leftCeil : cur.key;
        } else {
            return key;
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
        return this._select(this.root, rank);
    }

    private _select = (cur: Node<K, V>, rank: number): K => {
        if (cur === null) {
            return null;
        }

        const leftSize = this._size(cur.left);

        if (leftSize < rank) {
            return this._select(cur.right, rank - 1 - leftSize);
        } else if (leftSize > rank) {
            return this._select(cur.left, rank);
        } else {
            return cur.key;
        }
    }
}

export {
    BST,
    Node,
};



// import * as  BinaryTree from "./BinaryTree";

// implement `find`, `insert`, `delete`
// class Node<T> implements BinaryTree.Node<T> {
//     public data: T;
//     public left: Node<T>;
//     public right: Node<T>;

//     constructor(data: T, left: Node<T> = null, right: Node<T> = null) {
//         this.data = data;
//         this.left = left;
//         this.right = right;
//     }
// }

// class Tree<T> implements BinaryTree.Tree<T> {
//     public root: Node<T>;
//     constructor() {
//         this.root = null;
//     }

//     private _find = (node: Node<T>, val: T): Node<T> => {
//         if (!node) {
//             return null;
//         }
//     }

//     public find = (): T => {

//     }
// }

// class Tree<T> implements BinaryTree.Tree<T> {
//     public root: Node<T>;
//     constructor() {
//         this.root = null;
//     }

//     public insert = (val: T) => {
//         if (!this.root) {
//             this.root = new Node(val);
//         } else {
//             let p = this.root;
//             while (p) {
//                 if (val > p.data) {
//                     if (!p.right) {
//                         p.right = new Node(val);
//                         return;
//                     }

//                     p = p.right;
//                 } else {
//                     if (!p.left) {
//                         p.left = new Node(val);
//                         return;
//                     }

//                     p = p.left;
//                 }
//             }
//         }
//     }

//     public find = (val: T): Node<T> => {
//         let p = this.root;
//         while (p) {
//             if (val > p.data) {
//                 p = p.right;
//             } else if (val < p.data) {
//                 p = p.left;
//             } else {
//                 return p;
//             }
//         }
//         return null;
//     }

//     public delete = (val: T): boolean => {
//         let p = this.root;
//         let pp = null;

//         while (p && p.data !== val) {
//             pp = p;
//             if (val > p.data) {
//                 p = p.right;
//             } else {
//                 p = p.left;
//             }
//         }

//         if(!p) {
//             return false;
//         }

//         // handle delete with two children
//         if (p.left && p.right) {
//             let minP = p.left;
//             let minPP = p;

//             while(minP.left) {
//                 minPP = minP;
//                 minP = minP.left;
//             }

//             p.data = minP.data;
//             p = minP;
//             pp = minPP;
//         }

//         // handle delete with only one child
//         let child = null;
//         if(p.left) {
//             child = p.left;
//         } else if(p.right) {
//             child = p.right;
//         }

//         if (!pp) {
//             // handle delete with root
//             this.root = child;
//         } else if (pp.left === p) {
//             pp.left = child;
//         } else {
//             pp.right = child;
//         }

//         return true;
//     }
// }

// export {
//     Node,
//     Tree,
// }