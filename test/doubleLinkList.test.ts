import { Node, DoubleLinkList } from '../src/DoubleLinkList';

describe('Node should', () => {
    it('be able to construct successfully', () => {
        const node = new Node();
        expect(node).not.toBeUndefined();
    });

    it('set prev and next pointer to null by default', () => {
        const node = new Node(10);
        expect(node.value).toEqual(10);
        expect(node.prev).toBeNull();
        expect(node.next).toBeNull();
    });
});

describe('DoubleLinkList\'s', () => {
    describe('constructor should', () => {
        it('be able to construct successfully', () => {
            const list = new DoubleLinkList();
            expect(list.toString()).toEqual('[]');
        });

        it('be able to construct from element array', () => {
            const list = new DoubleLinkList([1, 2, 3]);
            expect(list.toString()).toEqual('[1, 2, 3]');
        });

        it('be able to construct from empty array', () => {
            const list = new DoubleLinkList([]);
            expect(list.toString()).toEqual('[]');
        })
    });

    describe('static method createFromArray should', () => {
        it('be able to create a list from element array', () => {
            const list = DoubleLinkList.createFromArray([1, 2, 3]);
            expect(list.toString()).toEqual('[1, 2, 3]');
        });

        it('be able to create a list from empty array', () => {
            const list = DoubleLinkList.createFromArray([]);
            expect(list.toString()).toEqual('[]');
        });
    });

    // more to come
    describe('append method should', () => {
        it('be able to append a element at the end of list', () => {
            const list = new DoubleLinkList();
            list.append(1);
            list.append(10);
            expect(list.toString()).toEqual('[1, 10]');
        });

        it('be able to return the node after append it', () => {
            const list = new DoubleLinkList();
            const node = list.append(1);
            expect(list.toString()).toEqual('[1]');
            expect(node.value).toEqual(1);
        })
    });

    describe('insert method should', () => {
        it('be able to insert a value after a node', () => {
            const list = new DoubleLinkList();
            const node = list.append(1);
            const node2 = list.insert(node, 233);
            expect(list.toString()).toEqual('[1, 233]');
            expect(node2.value).toEqual(233);
        });
    });

    describe('find method should', () => {
        it('return a node directly if its value match the passed value', () => {
            const list = new DoubleLinkList([1, 2, 3, 4]);
            const node = list.find(3);
            expect(node.value).toEqual(3);
            expect(node.next.value).toEqual(4);
            expect(node.prev.value).toEqual(2);
        });

        it('return null if no node match the value', () => {
            const list = new DoubleLinkList([1, 2]);
            let node = list.find(4);
            expect(node).toBeNull();
            list.append(4);
            node = list.find(4);
            expect(node.value).toEqual(4);
        });
    });

    describe('delete method should', () => {
        it('be able to remove a given node', () => {
            const list = new DoubleLinkList([1, 2, 3, 4, 5]);
            const node = list.find(2);
            list.remove(node);
            expect(list.toString()).toEqual('[1, 3, 4, 5]');
        });

        it('be able to get the remove node', () => {
            const list = new DoubleLinkList([1, 2, 3]);
            const node = list.find(2);
            const removed = list.remove(node);
            expect(list.toString()).toEqual('[1, 3]')
            expect(removed.value).toEqual(2);
            expect(removed.next).toBeNull();
            expect(removed.prev).toBeNull();
        });
    });
});