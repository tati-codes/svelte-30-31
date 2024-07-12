const taskIcons = [
  "add",
  "keyboard",
  "mail",
  "stonks",
  "square_pencil",
  "phone",
  "hammerwrench",
  "palette",
  "camera",
  "music",
  "basket",
  "gas",
  "piggy",
  "utensils",
  "mug",
  "tv",
  "film",
  "book",
  "paperplane",
  "sleep",
] as const;

export type taskIcon = (typeof taskIcons)[number];
