const reorderArray = function reorderArray(array, originIndex, destinationIndex) {
  const copy = array.slice();
  copy.splice(destinationIndex, 0, copy.splice(originIndex, 1)[0]);
  return copy;
};

module.exports = reorderArray;
