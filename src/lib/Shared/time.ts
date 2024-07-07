export function seconds_to_mmss(num: number) {
  return new Date(num * 1000).toISOString().substr(14, 5);
}

export function seconds_to_hhmmss(num: number) {
  return new Date(num * 1000).toISOString().substr(11, 8);
}

export function formatSeconds(num:number) {
  return num >= 3600 ? seconds_to_hhmmss(num) : seconds_to_mmss(num)
}
