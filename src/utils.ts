import {
    ISort,
    defaultCompare,
} from './sort';

import {
    cloneDeep,
} from 'lodash';

export function createRandomArray(size: number): number[] {
    const arr = [];
    for(let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 1000));
    }

    return arr;
}

export function compareSortAlg(alg1: ISort, alg2: ISort) {
    const dataSet = []
    // create 1000 arrays with 1000 elements
    for(let i = 0; i < 1000; i++) {
        dataSet.push(createRandomArray(1000));
    }
    let timestamp;
    const ds1 = cloneDeep(dataSet);
    const ds2 = cloneDeep(dataSet);

    timestamp = Date.now();
    for(let i = 0, len = ds1.length; i < len; i++){
        const arr = ds1[i];
        alg1(arr, defaultCompare);
    }
    const t1 = Date.now() - timestamp;

    timestamp = Date.now();
    for(let i = 0, len = ds2.length; i < len; i++){
        const arr = ds2[i];
        alg2(arr, defaultCompare);
    }
    const t2 = Date.now() - timestamp;
    return {
        t1,
        t2,
    };
}
