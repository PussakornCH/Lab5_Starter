// sum.test.js
import { sum } from '../code-to-unit-test/sum';

test('adds 1 + 2 to equal 3', () => {
  // TODO
  expect(1 + 2).toBe(4);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});
