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
})