//from https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
export let LightenDarkenColor = (col:string , amt: number) => {
  console.log(col.substring(1).toUpperCase())
  var num = parseInt(col.substring(1).toUpperCase(), 16);
  var r = (num >> 16) + amt;
  var b = ((num >> 8) & 0x00FF) + amt;
  var g = (num & 0x0000FF) + amt;
  var newColor = g | (b << 8) | (r << 16);
  return newColor.toString(16);
}