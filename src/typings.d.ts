
declare interface DoublyLinkedNode<T> {
    data: T;
    prev: DoublyLinkedNode<T>;
    next: DoublyLinkedNode<T>;
}

declare interface DoublyLinkedList<T> {
    head: DoublyLinkedNode<T>;
    tail: DoublyLinkedNode<T>;    
}