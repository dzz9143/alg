type Compare<T> = (a: T, b: T) => number;

class BinaryHeap<T> {
    public cmp: Compare<T>;
    public data: T[];
    public compacity: number;
    public count: number;

    public static swim<T>(arr: T[], cmp: Compare<T>, k: number) {
        while (k > 1 && cmp(arr[Math.floor(k / 2) - 1], arr[k - 1]) < 0) {
            const p = Math.floor(k / 2);    // parent index;
            const tmp = arr[k - 1];
            arr[k - 1] = arr[p - 1];
            arr[p - 1] = tmp;
            k = p;
        }
    }

    public static sink<T>(arr: T[], cmp: Compare<T>, k: number, n: number) {
        while (k * 2 <= n) {
            let child = 2 * k;
            if (2 * k < n && cmp(arr[2 * k - 1], arr[2 * k]) < 0) {
                child++;
            }

            if (cmp(arr[child - 1], arr[k - 1]) < 0) {
                break;
            }

            const tmp = arr[k - 1];
            arr[k - 1] = arr[child - 1];
            arr[child - 1] = tmp;

            k = child;
        }
    }

    constructor(compacity: number, cmp: Compare<T>) {
        this.cmp = cmp;
        this.data = [];
        this.compacity = compacity;
        this.count = 0;
    }

    private swim = (k: number) => {
        while (k > 1 && this.compare(Math.floor(k / 2), k) < 0) {
            this.exchange(k, Math.floor(k / 2));
            k = Math.floor(k / 2);
        }
    }

    private sink = (k: number) => {
        while (k * 2 <= this.count) {
            let child = k * 2;
            if (k * 2 < this.count && this.compare(k * 2, k * 2 + 1) < 0) {
                child++;
            }

            if (this.compare(child, k) < 0) {
                break;
            }

            this.exchange(k, child);
            k = child;
        }
    }

    private compare = (i: number, j: number): number => {
        return this.cmp(this.data[i - 1], this.data[j - 1]);
    }

    private exchange = (i: number, j: number) => {
        const tmp = this.data[i - 1];
        this.data[i - 1] = this.data[j - 1];
        this.data[j - 1] = tmp;
    }

    public insert = (val: T) => {
        this.count++;
        this.data[this.count - 1] = val;
        this.swim(this.count);
    }

    // get the min/max 
    public del = (): T => {
        if (this.count === 0) {
            return null;
        }

        const result = this.data[0];
        this.count--;
        this.data[0] = this.data[this.count];
        this.data = this.data.slice(0, this.count);
        this.sink(1);
        return result;
    }
}

export {
    BinaryHeap,
}