const { Stack } = require("./index.js");

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
