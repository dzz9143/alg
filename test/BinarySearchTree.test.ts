import { Tree } from '../src/BinarySearchTree';
import { inOrderTraversal } from '../src/BinaryTree';

// helpers
function getInOrderToString<T>(tree: Tree<T>) {
    const res = [] as T[];
    inOrderTraversal(tree, (data: T) => {
        res.push(data);
    });

    return res.join(', ');
}

function constructFromArray<T>(arr: T[]) {
    const tree = new Tree<T>();
    arr.forEach((val: T) => {
        tree.insert(val);
    });

    return tree;
}

describe("Binary Search Tree should", () => {
    it("be able to insert and keep the order", () => {
        const tree = constructFromArray([20, 1, 100, 2]);
        expect(getInOrderToString(tree)).toEqual('1, 2, 20, 100');
    });

    it("be able to find the node of certain value", () => {
        const tree = constructFromArray([2, 4, 1, 3, 5]);
        expect(tree.find(2).data).toEqual(2);
        expect(tree.find(10)).toBeNull();
    });

    it("be able to delete the node of certain value", () => {
        const tree = constructFromArray([2, 4, 1, 3, 5]);
        expect(tree.delete(1)).toBeTruthy();
        expect(getInOrderToString(tree)).toEqual('2, 3, 4, 5');
        expect(tree.delete(100)).toBeFalsy();
    });
})