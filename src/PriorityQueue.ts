interface MaxPriorityQueue<T> {
    insert(key: T): void;
    delMax():T;
    isEmpty():boolean;
    max(): T;
    size(): number;
}

interface MinPriorityQueue<T> {
    insert(key: T): void;
    delMin():T;
    isEmpty():boolean;
    min(): T;
    size(): number;
}

class MaxBinaryHeap<T> {
    
}