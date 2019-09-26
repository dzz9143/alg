interface ArrayListInterface {
    push(el: any): void;
    insert(el: any, idx: number): void;
    ensureCapacity(): void;
    toString(): string;
}
declare class ArrayList implements ArrayListInterface {
    private capacity;
    private size;
    private store;
    constructor(capacity?: number);
    ensureCapacity(minCapacity?: number): void;
    push(el: any): void;
    insert(el: any, idx: number): void;
    getSize(): number;
    getCapacity(): number;
    toString(): string;
}
export default ArrayList;
