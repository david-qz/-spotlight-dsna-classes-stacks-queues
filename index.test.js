const { Stack, Queue } = require("./index.js");

describe("Stack Class", () => {

  it("#push should add a new item to the stack", () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    expect(stack.count).toEqual(2);
  });

  it("#peek should return the top of the stack without modifying it", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });

  it("#pop should remove the item at the top of the stack and remove it", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.count).toEqual(2);
    expect(stack.peek()).toEqual(2);
  });
});

describe("Queue Class", () => {

  it('#enqueue should add an item to the back', () => {
    const queue = new Queue();
    queue.enqueue('fox');
    queue.enqueue('goose')
    expect(queue.count).toEqual(2);
    expect(queue.next).toEqual('fox');
  });

  it('#dequeue should remove an item from the front and return it', () => {
    const queue = new Queue();
    queue.enqueue('fox');
    queue.enqueue('goose')
    expect(queue.count).toEqual(2);
    expect(queue.dequeue()).toEqual('fox');
    expect(queue.count).toEqual(1);
    expect(queue.dequeue()).toEqual('goose');
    expect(queue.count).toEqual(0);
    expect(queue.dequeue()).toEqual(undefined);
    expect(queue.count).toEqual(0);
  });

});
