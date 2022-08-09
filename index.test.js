const { Stack } = require("./index.js");

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
