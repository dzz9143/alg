import {
    bubbleSort,
    insertionSort,
    shellSort,
    selectionSort,
} from '../src/sort';


describe('bubbleSort should', () => {
    it('be able to directly return when array is empty or has only one element', () => {
        let arr: any[] = [];
        expect(bubbleSort(arr)).toEqual([]);
        arr = [1];
        expect(bubbleSort(arr)).toEqual([1]);
    });

    it('be able to sort reverted array', () => {
        let arr: any[] = [5, 4, 3, 2, 1];
        const res = bubbleSort(arr);
        expect(res).toEqual([1, 2, 3, 4, 5]);
    });

    it('be able to sort a fully sorted array', () => {
        let arr: any[] = [1, 2, 3, 4, 5];
        const res = bubbleSort(arr);
        expect(res).toEqual([1, 2, 3, 4, 5]);
    });

    it('be able to use compare function to change the sort order', () => {
        let arr: any[] = [1, 2, 3, 4, 5];
        let res = bubbleSort(arr, (a, b) => b - a);
        expect(res).toEqual([5, 4, 3, 2, 1]);
        res = bubbleSort(res, (a, b) => a - b);
        expect(res).toEqual([1, 2, 3, 4, 5]);
    });
});

describe('insertionSort should', () => {
    it('be able to directly return when array is empty or has only one element', () => {
        let arr: any[] = [];
        expect(insertionSort(arr)).toEqual([]);
        arr = [1];
        expect(insertionSort(arr)).toEqual([1]);
    });

    it('be able to sort reverted array', () => {
        let arr: any[] = [5, 4, 3, 2, 1];
        const res = insertionSort(arr);
        expect(res).toEqual([1, 2, 3, 4, 5]);
    });

    it('be able to sort a fully sorted array', () => {
        let arr: any[] = [1, 2, 3, 4, 5];
        const res = insertionSort(arr);
        expect(res).toEqual([1, 2, 3, 4, 5]);
    });

    it('be able to use compare function to change the sort order', () => {
        let arr: any[] = [1, 2, 3, 4, 5];
        let res = insertionSort(arr, (a, b) => b - a);
        expect(res).toEqual([5, 4, 3, 2, 1]);
        res = insertionSort(res, (a, b) => a - b);
        expect(res).toEqual([1, 2, 3, 4, 5]);
    });
});

describe('shellSort should', () => {
    it('be able to directly return when array is empty or has only one element', () => {
        let arr: any[] = [];
        expect(shellSort(arr)).toEqual([]);
        arr = [1];
        expect(shellSort(arr)).toEqual([1]);
    });

    it('be able to sort reverted array', () => {
        let arr: any[] = [5, 4, 3, 2, 1];
        const res = shellSort(arr);
        expect(res).toEqual([1, 2, 3, 4, 5]);
    });

    it('be able to sort a fully sorted array', () => {
        let arr: any[] = [1, 2, 3, 4, 5];
        const res = shellSort(arr);
        expect(res).toEqual([1, 2, 3, 4, 5]);
    });

    it('be able to use compare function to change the sort order', () => {
        let arr: any[] = [1, 2, 3, 4, 5];
        let res = shellSort(arr, (a, b) => b - a);
        expect(res).toEqual([5, 4, 3, 2, 1]);
        res = shellSort(res, (a, b) => a - b);
        expect(res).toEqual([1, 2, 3, 4, 5]);
    });
});

describe('selectionSort should', () => {
    it('be able to directly return when array is empty or has only one element', () => {
        let arr: any[] = [];
        expect(selectionSort(arr)).toEqual([]);
        arr = [1];
        expect(selectionSort(arr)).toEqual([1]);
    });

    it('be able to sort reverted array', () => {
        let arr: any[] = [5, 4, 3, 2, 1];
        const res = selectionSort(arr);
        expect(res).toEqual([1, 2, 3, 4, 5]);
    });

    it('be able to sort a fully sorted array', () => {
        let arr: any[] = [1, 2, 3, 4, 5];
        const res = selectionSort(arr);
        expect(res).toEqual([1, 2, 3, 4, 5]);
    });

    it('be able to use compare function to change the sort order', () => {
        let arr: any[] = [1, 2, 3, 4, 5];
        let res = selectionSort(arr, (a, b) => b - a);
        expect(res).toEqual([5, 4, 3, 2, 1]);
        res = selectionSort(res, (a, b) => a - b);
        expect(res).toEqual([1, 2, 3, 4, 5]);
    });
});