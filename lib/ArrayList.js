"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isNumber_1 = __importDefault(require("lodash/isNumber"));
class ArrayList {
    constructor(capacity = 10) {
        this.capacity = capacity;
        this.size = 0;
        this.store = new Array(capacity);
    }
    ensureCapacity(minCapacity) {
        if (isNumber_1.default(minCapacity)) {
            if (minCapacity > this.capacity) {
                this.capacity = minCapacity;
            }
            else {
                return;
            }
        }
        else if (this.size >= this.capacity) {
            this.capacity = this.capacity * 2;
        }
        const prevStore = this.store;
        this.store = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            this.store[i] = prevStore[i];
        }
    }
    push(el) {
        this.ensureCapacity();
        this.store.push(el);
        this.size++;
    }
    insert(el, idx) {
        this.ensureCapacity(idx + 1);
        if (idx < 0) {
            idx = 0;
        }
        for (let i = this.size; i > idx; i--) {
            this.store[i] = this.store[i - 1];
        }
        this.store[idx] = el;
    }
    getSize() {
        return this.size;
    }
    getCapacity() {
        return this.capacity;
    }
    toString() {
        let str = '[';
        for (let i = 0; i < this.size; i++) {
            if (i < this.size - 1) {
                str += `${this.store[i]}, `;
            }
            else {
                str += `${this.store[i]}]`;
            }
        }
        return str;
    }
}
exports.default = ArrayList;
//# sourceMappingURL=ArrayList.js.map