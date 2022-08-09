const { Stack, Queue } = require("./index.js");

describe("Stack Class", () => {

  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });

  it('#pop should remove the top of the stack', () => {
    const stack = new Stack([1, 2, 3]);
    expect(stack.pop()).toEqual(3);
    expect(stack.list).toEqual([1, 2]);
  });

  it('#peek should return the top of the stack without changing it', () => {
    const stack = new Stack([1, 2, 3]);
    expect(stack.peek()).toEqual(3);
    expect(stack.list).toEqual([1, 2, 3]);
  });

});

describe("Queue Class", () => {

  it("#enqueue should add a new item to the end of the array", () => {
    const queue = new Queue();
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.list).toEqual([3, 2 ,1])
  })

  it('#denqueue should remove an item from the end of the array', () => {
    const queue = new Queue();
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.dequeue()).toEqual(1)
    expect(queue.list).toEqual([3, 2])
  })

  it('#hasnext should return true or false if the list is greater than 0', () => {
    const queue = new Queue();
    expect(queue.hasNext()).toEqual(false)
  })
})


