import { compareSortAlg } from '../src/utils';
import { bubbleSort, insertionSort } from '../src/sort';

let res = compareSortAlg(bubbleSort, insertionSort);
console.log(res);