export const onEnter = (curried: Function) => {
  return (e: KeyboardEvent) => {
    e.stopPropagation()
    if (e.key == "Enter" || e.key == " ") {
      curried()
    }
  }
}

export const nameBarOnEnter = (curried: Function) => {
  return (e: KeyboardEvent) => {
    e.stopPropagation()
    if (e.key == "Enter") {
      curried()
    }
  }
}
