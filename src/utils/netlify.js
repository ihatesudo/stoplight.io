export function addFields(array, index = 0, fields) {
  const clone = array.slice(0);

  clone.splice(index, 0, ...fields);

  return clone;
}
