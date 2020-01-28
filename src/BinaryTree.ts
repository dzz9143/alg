interface Node<T> {
    data: T;
    left: Node<T>;
    right: Node<T>;
}

interface Tree<T> {
    root: Node<T>;
}

function preOrderTraversal(tree: Tree<any>, callback: any) {
    const root = tree.root;
    const _preOrder = (node: Node<any>) => {
        if(root === null) {
            return;
        }

        callback(node.data, node);

        _preOrder(node.left);
        _preOrder(node.right);
    }

    _preOrder(root);
}

function inOrderTraversal(tree: Tree<any>, callback: any) {
    const root = tree.root;
    const _inOrder = (node: Node<any>) => {
        if(root === null) {
            return;
        }
        
        _inOrder(node.left);
        callback(node.data, node);
        _inOrder(node.right);
    }

    _inOrder(root);
}

function postOrderTraversal(tree: Tree<any>, callback: any) {
    const root = tree.root;
    const _postOrder = (node: Node<any>) => {
        if(root === null) {
            return;
        }
        
        _postOrder(node.left);
        _postOrder(node.right);
        callback(node.data, node);
    }

    _postOrder(root);
}

export {
    Node,
    Tree,

    preOrderTraversal,
    inOrderTraversal,
    postOrderTraversal,
}