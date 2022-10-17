import {
  getParsedCookie,
  handleCookieChange,
  removeAllCookies,
  setStringifiedCookie,
} from '../cookies';
import { getTotalCost, getTotalQuantity } from '../getTotal';

// test('stringify a cookie value', () => {
//   expect(stringifyCookieValue([{ id: '1', stars: 2 }])).toBe(
//     '[{"id":"1","stars":2}]',
//   );
// });

test('set, gets and delete a cookie', () => {
  const cookieKey = 'count';
  const cookieValue = {
    id: 1,
    activePicture: '/images/active.png',
    count: 2,
  };
  // First make sure that the return of the function is undefined
  // Use .toBe to compare primitive values
  expect(getParsedCookie(cookieKey)).toBe(undefined);
  // Set the cookie value and test if the value is updated
  expect(() => setStringifiedCookie(cookieKey, cookieValue)).not.toThrow();
  // Test cookie value, use .toStrictEqual to test that the object have the same type as well as structure
  expect(getParsedCookie(cookieKey)).toStrictEqual(cookieValue);
  // Best practice: clear the state you created after the test to bring the system back to the initial state
  // Delete cookie
  expect(removeAllCookies(cookieKey)).toBe(undefined);
  // Check if delete function was successful
  expect(getParsedCookie(cookieKey)).toBe(undefined);
});

// TODO fix this test
// test('update cookie count', () => {
//   const cookieKey = 'count';
//   const cookieValue = {
//     id: 1,
//     activePicture: '/images/active.png',
//     count: 2,
//   };

//   expect(getParsedCookie(cookieKey)).toBe(undefined);
//   expect(() => setStringifiedCookie(cookieKey, cookieValue)).not.toThrow();
//   expect(getParsedCookie(cookieKey)).toStrictEqual(cookieValue);
//   // Update cookie value
//   expect(() => handleCookieChange(cookieKey, cookieValue, true)).not.toThrow();
//   // Check if update function was successful
//   expect(getParsedCookie(cookieKey)).toStrictEqual({
//     id: 1,
//     activePicture: '/images/active.png',
//     count: 3,
//   });
//   // Best practice: clear the state you created after the test to bring the system back to the initial state
//   // Delete cookie
//   expect(removeAllCookies(cookieKey)).toBe(undefined);
//   // Check if delete function was successful
//   expect(getParsedCookie(cookieKey)).toBe(undefined);
// });

test('cart sum and total price', () => {
  const cart = [
    {
      price: 10,
      count: 2,
    },
    {
      price: 10,
      count: 3,
    },
  ];
  expect(getTotalQuantity(cart)).toBe(5);
  expect(getTotalCost(cart)).toBe(50);
});
