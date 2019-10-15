import { compareSortAlg } from '../src/utils';
import { bubbleSort, insertionSort, shellSort } from '../src/sort';

let res = compareSortAlg(bubbleSort, insertionSort);
console.log(res);

res = compareSortAlg(insertionSort, shellSort);
console.log(res);