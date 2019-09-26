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
})