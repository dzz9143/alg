import ArrayList from '../../src/data-structures/ArrayList';

describe('ArrayList', () => {
    it('should be able to create a new ArrayList with default capacity', () => {
        const al = new ArrayList();
        expect(al.capacity()).toEqual(10);
        expect(al.size()).toEqual(0);
        expect(al.toString()).toEqual('[]');
    });

    it('should be able to create a new ArrayList with specified capacity', () => {
        const al = new ArrayList(2);
        expect(al.capacity()).toEqual(2);
        expect(al.size()).toEqual(0);
        expect(al.toString()).toEqual('[]');        
    });

    // push
    it('should be able to push element at the end of arrayList', () => {
        const al = new ArrayList();
        al.push(1);
        al.push(2);
        expect(al.toString()).toEqual('[1, 2]');
    });

    // insert
    it('should be able to insert element', () => {
        const al = new ArrayList();
        al.insert(0, 1);
        al.insert(0, 2);
        expect(al.toString()).toEqual('[2, 1]');
    });

    it('should throw if index out of bound', () => {
        const al = new ArrayList(2);
        expect(() => {
            al.insert(3, 1);
        }).toThrowError('index out of bounds');
    });

    // indexOf
    it('should be able to return the index of first occurrence of element', () => {
        const al = new ArrayList();
        al.push(1);
        al.push(10);
        al.push(100);

        expect(al.indexOf(1)).toEqual(0);
        expect(al.indexOf(10)).toEqual(1);
        expect(al.indexOf(100)).toEqual(2);
        expect(al.indexOf(-1)).toEqual(-1);

        al.insert(0, -1);
        expect(al.indexOf(-1)).toEqual(0);
        expect(al.indexOf(1)).toEqual(1);
    });

    // removeIndex
    it('should be able to remove element at specified index', () => {
        const al = new ArrayList();
        al.push(1);
        al.push(2);
        al.push(3);

        al.removeIndex(1);
        expect(al.toString()).toEqual('[1, 3]');
        
        al.removeIndex(1);
        expect(al.toString()).toEqual('[1]');

        expect(() => {
            al.removeIndex(3);
        }).toThrowError('index out of bounds');
    });

    // remove
    it('should be able to remove element', () => {
        const al = new ArrayList();
        al.push(1);
        al.push(2);
        al.push(3);

        expect(al.remove(1)).toBeTruthy();
        expect(al.toString()).toEqual('[2, 3]');
        expect(al.remove(0)).toBeFalsy();
    });
})