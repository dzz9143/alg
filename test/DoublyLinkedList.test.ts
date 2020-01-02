import DoublyLinkedList from '../src/DoublyLinkedList';

const { Node, List } = DoublyLinkedList;

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
});