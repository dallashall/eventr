const reorderArray = function reorderArray(array, originIndex, destinationIndex) {
  return array.splice(originIndex, 0, array.splice(destinationIndex, 1)[0]);
};

module.exports = reorderArray;
