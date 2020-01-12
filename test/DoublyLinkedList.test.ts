import { Node, List } from '../src/DoublyLinkedList';

describe('List should', () => {
    it('be able to insert at the beginning of list', () => {
        const l = new List();
        l.insertBeginning(new Node(10));
        l.insertBeginning(new Node(5));
        expect(l.toString()).toEqual('[5, 10]');
    });

    it('be able to insert at the end of list', () => {
        const l = new List();
        l.insertEnd(new Node(10));
        l.insertEnd(new Node(5));
        expect(l.toString()).toEqual('[10, 5]');
    });

    it('be able to insert a node before certain node', () => {
        const l = new List();
        const n1 = l.insertBeginning(new Node(1));
        l.insertBefore(l.head, new Node(2));
        l.insertBefore(n1, new Node(3));
        expect(l.toString()).toEqual('[2, 3, 1]');
    });

    it('be able to remove certain node', () => {
        const l = new List();
        l.insertEnd(new Node(1));
        const n = l.insertEnd(new Node(3));
        l.insertEnd(new Node(5));
        expect(l.toString()).toEqual('[1, 3, 5]');
        l.remove(n);
        expect(l.toString()).toEqual('[1, 5]');
    });
});