import SinglyLinkedList from '../src/SinglyLinkedList';

describe('SinglyLinkedList', () => {
  it('init successfully', () => {
    const sll = new SinglyLinkedList();
    expect(sll.toString()).toEqual('[]');
  });

  it('should be able to create from a javascript array', () => {
    const sll = SinglyLinkedList.fromArray([1, 2, 3, 4]);
    expect(sll.toString()).toEqual('[1, 2, 3, 4]');
  });

  // push
  it('should be able to push at the end of list', () => {
    const sll = new SinglyLinkedList();
    sll.push(1);
    sll.push(10);
    sll.push(100);
    expect(sll.toString()).toEqual('[1, 10, 100]');
  });

  // insertAfter
  it('should be able to insert after a specific node', () => {
    const sll = new SinglyLinkedList();
    const n1 = sll.push(1);
    const n2 = sll.push(10);

    sll.insertAfter(n1, 100);
    sll.insertAfter(n2, 1000);

    expect(sll.toString()).toEqual('[1, 100, 10, 1000]');
  });

  // remove
  it('should be able to remove specific element from list', () => {
    const sll = SinglyLinkedList.fromArray([1, 3, 5, 4, 7]);
    expect(sll.remove(1)).toBeTruthy;
    expect(sll.toString()).toEqual('[3, 5, 4, 7]');
    expect(sll.remove(100)).toBeFalsy();
    expect(sll.remove(7)).toBeTruthy();
    expect(sll.toString()).toEqual('[3, 5, 4]');
  });

  // removeNode
  it('should be able to remove specific node', () => {
    const sll = new SinglyLinkedList();
    const n1 = sll.push(1);
    const n2 = sll.push(10);

    expect(sll.removeNode(n1)).toBeTruthy();
    expect(sll.toString()).toEqual('[10]');

    expect(sll.removeNode(n2)).toBeTruthy();
    expect(sll.toString()).toEqual('[]');
  });
});