interface ArrayListInterface {
    push(el: any): void;
    insert(el: any, idx: number): void;
    ensureCapacity(): void;
    capacity(): number;
    size(): number;
    get(idx: number): any;
    set(idx: number, el: any): any;
    toString(): string;
}

class ArrayList implements ArrayListInterface {
    private _capacity: number;
    private _size: number;
    private _store: Array<any>;

    constructor(capacity: number = 10) {
        this._capacity = capacity;
        this._size = 0;
        this._store = new Array(capacity);
    }

    public ensureCapacity() {
        if (this._size >= this._capacity) {
            this._capacity = this._capacity * 2;
        } else {
            return;
        }
        const prevStore = this._store;
        this._store = new Array(this._capacity);
        for (let i = 0; i < this._size; i++) {
            this._store[i] = prevStore[i];
        }
    }

    public push(el: any): void {
        this.ensureCapacity();
        this._store[this._size++] = el;
    }

    public insert(idx: number, el: any): void {
        if(idx < 0 || idx > this._size) {
            throw new Error('index out of bounds');
        }
        for (let i = this._size; i > idx; i--) {
            this._store[i] = this._store[i - 1];
        }
        this._store[idx] = el;
        this._size++;
    }
    
    public get(idx: number): any {
        if(idx < 0 || idx >= this._size) {
            throw new Error('index out of bounds');
        }
        return this._store[idx];
    }

    public set(idx: number, el: any): any {
        if(idx < 0 || idx >= this._size) {
            throw new Error('index out of bounds');
        }
        const prevEl = this._store[idx];
        this._store[idx] = el;
        return prevEl;
    }

    public size(): number {
        return this._size;
    }

    public capacity(): number {
        return this._capacity;
    }

    public toString(): string {
        let str = '[';
        for (let i = 0; i < this._size; i++) {
            if (i < this._size - 1) {
                str += `${this._store[i]}, `;
            } else {
                str += `${this._store[i]}`;
            }
        }
        str += ']';
        return str;
    }
}

export default ArrayList;
