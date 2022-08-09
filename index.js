class Stack {}

class Queue {
    #list;

    constructor(initalList = []) {
        this.#list = initalList
    }

    enqueue(item) {
        this.#list.unshift(item)
    }

    deenqueue() {
        return this.#list.pop() 
    }

    hasNext() {
        return this.#list.length > 0;
    }
}

module.exports = { Stack, Queue };
