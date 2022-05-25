const assert = require('chai').assert;
const fib = require('../fibonacci2');

// test fabonacci.js
describe("fibonacci", function() {
   it('should return 1 when given 0 as an input', () => {
      assert.strictEqual(fib.fibonacci(0), 1)
      // works for a return value of 1 until you go beyond 1 
      // Whereby the return value of the fibonacci sequence is wrong
      // then the test has to be updated to cover numbers beyond 1.
    });
   it('should return 34 when given 8 as an input', () => {
      assert.strictEqual(fib.fibonacci(8), 34)
   });
   it('should return 89 when given 10 as an input', () => {
      assert.strictEqual(fib.fibonacci(10), 89)
   });
   it('should return 2584 when given 5 as an input', () => {
      assert.strictEqual(fib.fibonacci(17), 2584)
   });
   it('should return 377 when given 13 as an input', () => {
      assert.strictEqual(fib.fibonacci(13), 377)
   });
 });