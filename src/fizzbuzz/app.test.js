const fizzbuzz = require('./app');

test('prints out the number 1', () => {
  expect(fizzbuzz(1)).toBe("1");
});

//Todo: Refactor or delete
test('prints out the number 1 till 3', () => {
  expect(fizzbuzz(3)).toBe('1\n2\n3');
});

test('prints out Fizz when number is divisible by 3', () => {
  expect(fizzbuzz(3)).toBe('1\n2\nFizz');
});