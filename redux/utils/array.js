const reorderArray = function reorderArray(array, originIndex, destinationIndex) {
  const copy = array.slice();
  copy.splice(destinationIndex, 0, copy.splice(originIndex, 1)[0]);
  return copy;
};

const removeFromArray = function removeFromArray(array, value) {
  const idx = array.indexOf(value);
  return array.slice(0, idx).concat(array.slice(idx + 1));
};

module.exports = {
  reorderArray,
  removeFromArray,
};
