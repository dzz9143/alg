
export interface ICompare {
    (a: any, b: any): number;
}

export interface ISort {
    (arr: any[], compare: ICompare): any[];
}

export const defaultCompare: ICompare = (a, b) => {
    return a - b;
}

export function bubbleSort(arr: any[], compare: ICompare = defaultCompare): any[] {
    if (arr.length <= 1) {
        return arr;
    }

    for (let i = 0, len = arr.length; i < len; ++i) {
        let hasSwap = false;
        for (let j = 0; j < len - i - 1; ++j) {
            if (compare(arr[j], arr[j + 1]) > 0) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                hasSwap = true;
            }
        }

        if (!hasSwap) {
            break;
        }
    }

    return arr;
}

export function insertionSort(arr: any[], compare: ICompare = defaultCompare): any[] {
    if (arr.length <= 1) {
        return arr;
    }

    for (let i = 1, len = arr.length; i < len; ++i) {
        const val = arr[i];
        let j = i - 1;
        for (; j >= 0 && compare(arr[j], val) > 0; --j) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = val;
    }

    return arr;
}

export function shellSort(arr: any[], compare: ICompare = defaultCompare): any[] {
    if (arr.length <= 0) return arr;
    const len = arr.length;
    let gap = Math.floor(len / 2);

    while (gap >= 1) {
        for (let i = 0; i < len; i += gap) {
            const val = arr[i];
            let j = i;
            for (; j >= gap && compare(arr[j - gap], val) > 0; j -= gap) {
                arr[j] = arr[j - gap];
            }

            arr[j] = val;
        }

        gap = Math.floor(gap / 2);
    }
    return arr;
}

export function selectionSort(arr: any[], compare: ICompare = defaultCompare): any[] {
    if (arr.length <= 1) return arr;

    for (let i = 0, len = arr.length; i < len; i++) {
        let selected = i;
        for (let j = i + 1; j < len; j++) {
            if (compare(arr[selected], arr[j]) > 0) {
                selected = j;
            }
        }
        let tmp = arr[selected];
        arr[selected] = arr[i];
        arr[i] = tmp;
    }

    return arr;
}

export function mergeSort(arr: any[], compare: ICompare = defaultCompare): any[] {
    const _merge = (arr1: any[], arr2: any[]): any[] => {
        const res = [];
        let i = 0, j = 0;

        while(i < arr1.length && j < arr2.length) {
            if(compare(arr1[i], arr2[j]) < 0) {
                res.push(arr1[i++]);
            } else {
                res.push(arr2[j++]);
            }
        }

        while(i < arr1.length) {
            res.push(arr1[i++]);
        }

        while(j < arr2.length){
            res.push(arr2[j++]);
        }

        return res;
    }

    // const _merge = (arr1: any[], arr2: any[]): any[] => {
    //     const res = [];
    //     let i = 0, j = 0;
    //     arr1.push(arr1[arr1.length - 1]);
    //     arr2.push(arr2[arr2.length - 1]);
    //     while (arr1[i] <= arr1[arr1.length - 1] && arr2[j] <= arr2[arr2.length - 1]) {
    //         if(compare(arr1[i], arr2[j]) < 0) {
    //             res.push(arr1[i++]);
    //         }else {
    //             res.push(arr2[j++]);
    //         }
    //     }
    //     return res;
    // }

    const _merge_sort = (arr: any[], left: number, right: number): any[] => {
        if (left > right) return [];
        if (left === right) return [arr[left]];
        const mid = Math.floor(left + (right - left) / 2);
        const arr1 = _merge_sort(arr, left, mid);
        const arr2 = _merge_sort(arr, mid + 1, right);
        return _merge(arr1, arr2);
    }

    return _merge_sort(arr, 0, arr.length - 1);
}