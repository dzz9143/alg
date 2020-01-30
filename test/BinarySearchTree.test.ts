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

    it("be able to delete the smallest key in the tree", () => {
        const bst = new BST<number, string>(numberCompare);
        bst.put(10, "foo");
        bst.put(20, "bar");
        bst.put(5, "nice");
        bst.put(0, "hello");
        bst.put(100, "world");

        bst.deleteMin();
        expect(bst.min()).toEqual(5);
        bst.deleteMin();
        expect(bst.min()).toEqual(10);
        expect(bst.size()).toEqual(3);
    });

    it("be able to delete node of given key", () => {
        const bst = new BST<number, string>(numberCompare);
        bst.put(10, "foo");
        bst.put(20, "bar");
        bst.put(5, "nice");
        bst.put(0, "hello");
        bst.put(100, "world");
    
        expect(bst.select(3)).toEqual(20);
        bst.delete(20);
        expect(bst.select(3)).toEqual(100);
        bst.delete(5);
        expect(bst.select(1)).toEqual(10);
        expect(bst.size()).toEqual(3);
    })
});