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

}

module.exports = { Stack, Queue };
