interface Node {
    left: Node;
    right: Node;
}

interface Tree {
    root: Node;
}

function preOrderTraversal(tree: Tree, callback: any) {
    const root = tree.root;
    const _preOrder = (node: Node) => {
        if(node === null) {
            return;
        }

        callback(node);

        _preOrder(node.left);
        _preOrder(node.right);
    }

    _preOrder(root);
}

function inOrderTraversal(tree: Tree, callback: any) {
    const root = tree.root;
    const _inOrder = (node: Node) => {
        if(node === null) {
            return;
        }
        
        _inOrder(node.left);
        callback(node);
        _inOrder(node.right);
    }

    _inOrder(root);
}

function postOrderTraversal(tree: Tree, callback: any) {
    const root = tree.root;
    const _postOrder = (node: Node) => {
        if(node === null) {
            return;
        }
        
        _postOrder(node.left);
        _postOrder(node.right);
        callback(node);
    }

    _postOrder(root);
}

export {
    preOrderTraversal,
    inOrderTraversal,
    postOrderTraversal,
}