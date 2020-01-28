import * as  BinaryTree from "./BinaryTree";

// implement `find`, `insert`, `delete`
class Node<T> implements BinaryTree.Node<T> {
    public data: T;
    public left: Node<T>;
    public right: Node<T>;

    constructor(data: T, left: Node<T> = null, right: Node<T> = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree<T> implements BinaryTree.Tree<T> {
    public root: Node<T>;
    constructor() {
        this.root = null;
    }

    public insert = (val: T) => {
        if (!this.root) {
            this.root = new Node(val);
        } else {
            let p = this.root;
            while (p) {
                if (val > p.data) {
                    if (!p.right) {
                        p.right = new Node(val);
                        return;
                    }

                    p = p.right;
                } else {
                    if (!p.left) {
                        p.left = new Node(val);
                        return;
                    }

                    p = p.left;
                }
            }
        }
    }

    public find = (val: T): Node<T> => {
        let p = this.root;
        while (p) {
            if (val > p.data) {
                p = p.right;
            } else if (val < p.data) {
                p = p.left;
            } else {
                return p;
            }
        }
        return null;
    }

    public delete = (val: T): boolean => {
        let p = this.root;
        let pp = null;

        while (p && p.data !== val) {
            pp = p;
            if (val > p.data) {
                p = p.right;
            } else {
                p = p.left;
            }
        }

        if(!p) {
            return false;
        }

        // handle delete with two children
        if (p.left && p.right) {
            let minP = p.left;
            let minPP = p;

            while(minP.left) {
                minPP = minP;
                minP = minP.left;
            }

            p.data = minP.data;
            p = minP;
            pp = minPP;
        }

        // handle delete with only one child
        let child = null;
        if(p.left) {
            child = p.left;
        } else if(p.right) {
            child = p.right;
        }

        if (!pp) {
            // handle delete with root
            this.root = child;
        } else if (pp.left === p) {
            pp.left = child;
        } else {
            pp.right = child;
        }

        return true;
    }
}

export {
    Node,
    Tree,
}