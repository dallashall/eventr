export default (array, originIndex, destinationIndex) =>
  array.splice(originIndex, 0, array.splice(destinationIndex, 1)[0]);
