import Cookies from 'js-cookie';

/**
 * If the cookie exists, return the parsed value, otherwise return undefined.
 * </code>
 * @param key - The name of the cookie.
 * @returns The value of the cookie.
 */
export function getParsedCookie(key) {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue);
  } catch (err) {
    return undefined;
  }
}

/**
 * It takes a key and a value, stringifies the value, and then sets the cookie with the key and the
 * stringified value.
 * @param key - The name of the cookie.
 * @param value - The value of the cookie.
 */
export function setStringifiedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}

/**
 * It takes a key, a product, and a boolean. It then checks if the cookie exists, if it doesn't it
 * creates it, if it does it checks if the product exists in the cookie, if it doesn't it adds it, if
 * it does it increases or decreases the count of the product.
 * @param key - the name of the cookie
 * @param product - { id: 1, count: 1 }
 * @param increase - boolean
 */
export function handleCookieChange(key, product, increase) {
  function increaseOrDecrease(cookie) {
    if (increase) {
      cookie.count++;
    } else {
      cookie.count--;
    }
  }

  const currentCookieValue = getParsedCookie(key);

  if (!currentCookieValue) {
    setStringifiedCookie(key, [{ id: product.id, count: product.count }]);
  } else {
    const foundCookie = currentCookieValue.find(
      (cookiesObject) => cookiesObject.id === product.id,
    );

    if (!foundCookie) {
      currentCookieValue.push({
        id: product.id,
        count: product.count,
      });
    } else {
      increaseOrDecrease(foundCookie);
    }

    setStringifiedCookie(key, currentCookieValue);
  }
}
