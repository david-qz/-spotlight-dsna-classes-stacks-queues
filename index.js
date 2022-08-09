class Stack {
    #list;

    constructor(initialList = []) {
        this.#list = initialList;
    }

    get count() {
        return this.#list.length;
    }

    push(item) {
        this.#list.push(item);
    }

    pop() {
        return this.#list.pop();
    }

    peek() {
        return this.#list[this.#list.length - 1];
    }
}

class Queue {
    #list;

    constructor(initialList = []) {
        this.#list = initialList;
    }

    get count() {
        return this.#list.length;
    }

    get next() {
        return this.#list[0];
    }

    enqueue(item) {
        this.#list.push(item);
    }

    dequeue() {
        return this.#list.shift();
    }
}

module.exports = { Stack, Queue };
