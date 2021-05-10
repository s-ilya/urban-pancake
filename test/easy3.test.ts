import { omit } from '../src/easy3';

test('omit key from object', () => {
  const record = {
    one: 1,
    two: 2,
  };

  expect(Object.keys(omit(record, 'two'))).toEqual(['one']);
});
