import { cutString } from '../src/client/js/textControl';

test('adds 1 + 2 to equal 3', () => {
  expect(cutString('udacity', 500).length).toBe(7);
});
