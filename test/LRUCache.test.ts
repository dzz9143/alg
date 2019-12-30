import LRUCache from '../src/LRUCache';

describe('LRU Cache should', () => {
    it('be able to construct successfully', () => {
        const cache = new LRUCache(100);
        expect(cache).not.toBeUndefined();
        expect(cache.size()).toEqual(0);
        expect(cache.capacity()).toEqual(100);
    });

    it('be able to set cache entry', () => {
        const cache = new LRUCache(3);
        cache.set('foo', 1);
        cache.set('bar', 2);
        cache.set('hello', 3);
        expect(cache.size()).toEqual(3);
        expect(cache.get('foo')).toEqual(1);
    });

    it('be able to discard LRU entry when size if full', () => {
        const cache = new LRUCache(3);
        cache.set('foo', 1);
        cache.set('bar', 2);
        cache.set('hello', 3);

        console.log(cache.list.toString((e: any) => e.value));

        cache.set('new', 4);
        expect(cache.get('foo')).toBeNull();
    });
});