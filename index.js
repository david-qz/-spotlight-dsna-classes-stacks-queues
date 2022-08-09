class Stack {
    #list;

    constructor(initialList = []) {
        this.#list = initialList;
    }

    push(item) {
        this.#list.push(item)
    }

    pop() {
        return this.#list.pop();
    }

    peek() {
        const lastIndex = this.#list.length - 1;
        return this.#list[lastIndex];
    }

    get list() {
        return [...this.#list];
    }
}

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
