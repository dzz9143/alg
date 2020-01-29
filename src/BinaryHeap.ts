type Compare<T> = (a: T, b: T) => number;

class BinaryHeap<T> {
    public cmp: Compare<T>;
    public data: T[];
    public compacity: number;
    public count: number;
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

            if (this.compare(k, child) >= 0) {
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