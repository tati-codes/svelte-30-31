export let shuffleArray = <T>(arr: T[]): T[] => {
  let array = arr.slice()
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export let set_up_looping_generator = <T>(arr: T[]) => {
  let shuffled = shuffleArray(arr);
  return (): T => {
    if (!shuffled.length) shuffled = shuffleArray(arr);
    return shuffled.pop()!;
  };
};
