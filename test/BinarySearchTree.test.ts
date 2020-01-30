import { BST, Node } from '../src/BinarySearchTree';
import { inOrderTraversal } from '../src/BinaryTree';
const numberCompare = (a: number, b: number): number => {
    return a - b;
}

describe("Binary Search Key should", () => {
    it("be able to `put` key-value pair", () => {
        const bst = new BST<number, string>(numberCompare);
        bst.put(10, "foo");
        bst.put(20, "bar");
        bst.put(5, "nice");
        const keys = [] as number[];
        const values = [] as string[];
        inOrderTraversal(bst, (node: Node<number, string>) => {
            keys.push(node.key);
            values.push(node.value);
        });

        expect(keys).toEqual([5, 10, 20]);
        expect(values).toEqual(["nice", "foo", "bar"]);
    });

    it("be able to `get` value based on key", () => {
        const bst = new BST<number, string>(numberCompare);
        bst.put(10, "foo");
        bst.put(20, "bar");
        bst.put(5, "nice");
        expect(bst.get(5)).toEqual("nice");
        expect(bst.get(10)).toEqual("foo");
        expect(bst.get(20)).toEqual("bar");
        expect(bst.get(100)).toBeNull();
    });


    it("be able to get smallest key", () => {
        const bst = new BST<number, string>(numberCompare);
        bst.put(10, "foo");
        bst.put(20, "bar");
        bst.put(5, "nice");
        expect(bst.min()).toEqual(5);
        bst.put(1, "hello");
        expect(bst.min()).toEqual(1);
        bst.put(0, "world");
        expect(bst.min()).toEqual(0);
    });


    it("be able to get largest key", () => {
        const bst = new BST<number, string>(numberCompare);
        bst.put(10, "foo");
        bst.put(20, "bar");
        bst.put(5, "nice");
        expect(bst.max()).toEqual(20);
        bst.put(100, "hello");
        expect(bst.max()).toEqual(100);
    });

    it("be able to get the floor of given key", () => {
        const bst = new BST<number, string>(numberCompare);
        bst.put(10, "foo");
        bst.put(20, "bar");
        bst.put(5, "nice");
        bst.put(0, "hello");
        bst.put(100, "world");

        expect(bst.floor(50)).toEqual(20);
        expect(bst.floor(10)).toEqual(10);
        expect(bst.floor(9)).toEqual(5);
        expect(bst.floor(4)).toEqual(0);
        expect(bst.floor(-1)).toBeNull();
    });

    it("be able to get the floor of given key", () => {
        const bst = new BST<number, string>(numberCompare);
        bst.put(10, "foo");
        bst.put(20, "bar");
        bst.put(5, "nice");
        bst.put(0, "hello");
        bst.put(100, "world");

        expect(bst.ceil(50)).toEqual(100);
        expect(bst.ceil(10)).toEqual(10);
        expect(bst.ceil(9)).toEqual(10);
        expect(bst.ceil(4)).toEqual(5);
        expect(bst.ceil(-1)).toEqual(0);
        expect(bst.ceil(110)).toBeNull();
    });

    it("be able to return the size of bst", () => {
        const bst = new BST<number, string>(numberCompare);
        expect(bst.size()).toEqual(0);
        bst.put(10, "foo");
        bst.put(20, "bar");
        bst.put(5, "nice");
        expect(bst.size()).toEqual(3);
        bst.put(0, "hello");
        bst.put(100, "world");
        expect(bst.size()).toEqual(5);
    });

    it("be able to get the rank of given key", () => {
        const bst = new BST<number, string>(numberCompare);
        bst.put(10, "foo");
        bst.put(20, "bar");
        bst.put(5, "nice");
        bst.put(0, "hello");
        bst.put(100, "world");

        expect(bst.rank(10)).toEqual(2);
        expect(bst.rank(100)).toEqual(4);
        expect(bst.rank(1)).toEqual(1);
    });

    it("be able to select key of rank k", () => {
        const bst = new BST<number, string>(numberCompare);
        bst.put(10, "foo");
        bst.put(20, "bar");
        bst.put(5, "nice");
        bst.put(0, "hello");
        bst.put(100, "world");

        expect(bst.select(0)).toEqual(0);
        expect(bst.select(1)).toEqual(5);
        expect(bst.select(2)).toEqual(10);
        expect(bst.select(1000)).toBeNull();
        expect(bst.select(-1)).toBeNull();
    });
});

// import { Tree } from '../src/BinarySearchTree';
// import { inOrderTraversal } from '../src/BinaryTree';

// // helpers
// function getInOrderToString<T>(tree: Tree<T>) {
//     const res = [] as T[];
//     inOrderTraversal(tree, (data: T) => {
//         res.push(data);
//     });

//     return res.join(', ');
// }

// function constructFromArray<T>(arr: T[]) {
//     const tree = new Tree<T>();
//     arr.forEach((val: T) => {
//         tree.insert(val);
//     });

//     return tree;
// }

// describe("Binary Search Tree should", () => {
//     it("be able to insert and keep the order", () => {
//         const tree = constructFromArray([20, 1, 100, 2]);
//         expect(getInOrderToString(tree)).toEqual('1, 2, 20, 100');
//     });

//     it("be able to find the node of certain value", () => {
//         const tree = constructFromArray([2, 4, 1, 3, 5]);
//         expect(tree.find(2).data).toEqual(2);
//         expect(tree.find(10)).toBeNull();
//     });

//     it("be able to delete the node of certain value", () => {
//         const tree = constructFromArray([2, 4, 1, 3, 5]);
//         expect(tree.delete(1)).toBeTruthy();
//         expect(getInOrderToString(tree)).toEqual('2, 3, 4, 5');
//         expect(tree.delete(100)).toBeFalsy();
//     });
// });