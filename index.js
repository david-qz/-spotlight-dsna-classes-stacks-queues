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
        this.#list.push(item)
    }

    dequeue() {
        return this.#list.shift() 
    }

    hasNext() {
        return this.#list.length > 0;
    }

    get list() {
        return [...this.#list];
    }
}

module.exports = { Stack, Queue };
