export const onEnter = (curried: Function) => {
    return (e: KeyboardEvent) => {
      if (e.key == "Enter" || e.key == "Space") {
        curried();
    }
  }
}