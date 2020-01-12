import LRUCache from '../src/LRUCache';

describe('LRU Cache should', () => {
    it('be able to construct successfully', () => {
        const cache = new LRUCache(100);
        expect(cache).not.toBeUndefined();
        expect(cache.size()).toEqual(0);
        expect(cache.capacity()).toEqual(100);
    });

    it('be able to set&get cache entry', () => {
        const cache = new LRUCache();
        cache.set('foo', 1);
        expect(cache.get('foo')).toEqual(1);
    });

    it('multiple set to same key will prompt the cache entry', () => {
        const cache = new LRUCache();
        cache.set('foo', 1);
        cache.set('bar', 100);
        expect(cache.list.tail.data.key).toEqual('foo');
        expect(cache.list.head.data.key).toEqual('bar');
        cache.set('foo', 2);
        expect(cache.list.head.data.key).toEqual('foo');
        expect(cache.list.head.data.value).toEqual(2);
    });

    it('muliple get to same key will prompt the cache entry', () => {
        const cache = new LRUCache();
        cache.set('foo', 1);
        cache.set('bar', 100);
        expect(cache.list.tail.data.key).toEqual('foo');
        expect(cache.list.head.data.key).toEqual('bar');
        expect(cache.get('foo')).toEqual(1);
        expect(cache.list.head.data.key).toEqual('foo');
    });

    it('will remove LRU entry when add an entry to a full size cache', () => {
        const cache = new LRUCache(3);
        cache.set('a' ,1);
        cache.set('b' ,10);
        cache.set('c' ,100);
        expect(cache.list.tail.data.key).toEqual('a');
        expect(cache.size()).toEqual(3);
        cache.set('d', 1000);
        expect(cache.size()).toEqual(3);
        expect(cache.get('a')).toBeNull();
    });
});