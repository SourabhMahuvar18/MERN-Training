// objects utility functions

export function pick(obj, keys) {
  const result = {};
  for (let key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

export function omit(obj, keys) {
  const result = { ...obj };
  for (let key of keys) {
    delete result[key];
  }
  return result;
}
