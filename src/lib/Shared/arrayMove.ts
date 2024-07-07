function move<T>(array: T[], index: number, delta: number) {
  //ref: https://gist.github.com/albertein/4496103

  var newIndex = index + delta
  if (newIndex < 0 || newIndex == array.length) return //Already at the top or bottom.
  var indexes = [index, newIndex].sort((a, b) => a - b) //Sort the indixes (fixed)
  array.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]]) //Replace from lowest index, two elements, reverting the order
  return array
}

export let arrayMoveUp = function <T>(array: T[], index: number) {
  return move(array, index, -1)
}

export let arrayMoveDown = function <T>(array: T[], index: number) {
  return move(array, index, 1)
}
