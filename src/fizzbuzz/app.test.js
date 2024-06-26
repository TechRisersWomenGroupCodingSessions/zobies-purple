const fizzbuzz = require('./app');

test('prints out the number 1', () => {
  expect(fizzbuzz(1)).toBe("1");
});

test('prints out Fizz when number is divisible by 3', () => {
  expect(fizzbuzz(3)).toBe('1\n2\nFizz');
});

test('prints out Buzz when number is divisible by 5', () => {
  expect(fizzbuzz(5)).toBe('1\n2\nFizz\n4\nBuzz');
});