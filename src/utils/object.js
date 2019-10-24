
/** Object and array utility helpers */

// find an item
export function find (list, item) {
  return list.filter(item)[0];
}

// Deep copy the given object considering circular structure
export function deepCopy (obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj);
  if (hit) {
    return hit.copy;
  }

  const copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first necause want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  });

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy;
}

// Check if is an object
export function isObject (obj) {
  return obj !== null && typeof obj === 'object';
}

