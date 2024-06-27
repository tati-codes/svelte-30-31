declare type TASKBAR_ITEM = "add" | 
"keyboard"|
"mail"|
"stonks"|
"square_pencil"|
"phone"|
"hammerwrench"|
"palette"|
"camera"|
"music"|
"basket"|
"gas"|
"piggy"|
"utensils"|
"mug"|
"tv"|
"film"|
"book"|
"paperplane"|
"sleep"|
"checkmark"|
"close"|
"backspace"

declare type IconRegistry <T> = { [Key in TASKBAR_ITEM as string]: ComponentType<SvelteComponentTyped<{ record: T }>> };

export type colors = [
  "gray",
  "orange",
  "red",
  "green",
  "blue",
  "forest",
  "yellow",
  "violet",
  "purple",
  "pink",
  "aqua"
]

export type Color = colors[number]

export type cssColor = {
  light: string
  medium: string
  dark: string
}