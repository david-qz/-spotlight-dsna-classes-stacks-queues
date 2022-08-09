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

class Queue {}

module.exports = { Stack, Queue };
