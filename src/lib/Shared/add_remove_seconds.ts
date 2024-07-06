const add_remove_seconds = (seconds: number, add: boolean) => {
  //thresholds: 2 hours, 1 hour, 10 minutes
  let min = 1
  if (seconds > 7200) min = 30
  else if (seconds > 3600) min = 15
  else if (seconds > 600) min = 5
  else if (seconds <= 60 && !add) return seconds
  if (add) return seconds + (min * 60)
  else return seconds - (min * 60)
}

const calculate_min = (seconds: number) => {
  let min = 1
  if (seconds > 7200) min = 30
  else if (seconds > 3600) min = 15
  else if (seconds > 600) min = 5
  return min
}

export const add_seconds = (seconds: number) => {
  let min = calculate_min(seconds)
  return seconds + (min * 60)
}

export const remove_seconds = (seconds: number) => {
  let min = calculate_min(seconds)
  if (seconds <= 60) return seconds
  else return seconds - (min * 60)
}
