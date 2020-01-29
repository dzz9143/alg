import { BinaryHeap } from '../src/BinaryHeap';

describe("BinaryHeap should", () => {
    it("be able to create a max heap", () => {
        const heap = new BinaryHeap<number>(5, (a, b) => {
            return a - b;
        });

        heap.insert(10);
        heap.insert(2);
        expect(heap.data).toEqual([10, 2]);
        heap.insert(11);
        expect(heap.data).toEqual([11, 2, 10]);
        heap.insert(5);
        expect(heap.data).toEqual([11, 5, 10, 2]);
    });

    it("be able to delMax for max heap", () => {
        const heap = new BinaryHeap<number>(5, (a, b) => {
            return a - b;
        });
        heap.insert(10);
        heap.insert(2);
        heap.insert(11);
        heap.insert(5);

        expect(heap.del()).toEqual(11);
        expect(heap.data).toEqual([10, 5, 2]);
        expect(heap.del()).toEqual(10);
        expect(heap.data).toEqual([5, 2]);
    });

    it("be able to create a min heap", () => {
        const heap = new BinaryHeap<number>(5, (a, b) => {
            return b - a;
        });

        heap.insert(10);
        heap.insert(2);
        expect(heap.data).toEqual([2, 10]);
        heap.insert(11);
        expect(heap.data).toEqual([2, 10, 11]);
        heap.insert(5);
        expect(heap.data).toEqual([2, 5, 11, 10]);
    });

    it("be able to delMin for min heap", () => {
        const heap = new BinaryHeap<number>(5, (a, b) => {
            return b - a;
        });

        heap.insert(10);
        heap.insert(2);
        heap.insert(11);
        heap.insert(5);
        expect(heap.del()).toEqual(2);
        expect(heap.data).toEqual([5, 10, 11]);
        expect(heap.del()).toEqual(5);
        expect(heap.data).toEqual([10, 11]);
    });

});