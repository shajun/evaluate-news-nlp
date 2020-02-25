import { checkForURL } from '../src/client/js/urlChecker';

test('correct url', () => {
  expect(checkForURL('http://cn.udacity.com')).toBeTruthy();
});
