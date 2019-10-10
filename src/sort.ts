
export interface ICompare {
    (a: any, b: any): number
}

const defaultCompare: ICompare = (a, b) => {
    return a - b;
}

export function bubbleSort(arr: any[], compare: ICompare = defaultCompare): any[] {
    if(arr.length <= 1) {
        return arr;
    }
    
    for(let i = 0, len = arr.length; i < len; ++i) {
        let hasSwap = false;
        for(let j = 0; j < len - i - 1; ++j) {
            if(compare(arr[j], arr[j+1]) > 0) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                hasSwap = true;
            }    
        }

        if(!hasSwap) {
            break;
        }
    }

    return arr;
}