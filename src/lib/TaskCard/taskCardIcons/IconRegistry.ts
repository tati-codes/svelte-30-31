import "svelte";
import type { ComponentType, SvelteComponentTyped } from 'svelte';
import  BackspaceIcon from "./BackspaceIcon.svelte"
import  AddIcon from "./AddIcon.svelte"
import  BasketIcon from "./BasketIcon.svelte"
import  BedIcon from "./BedIcon.svelte"
import  BookIcon from "./BookIcon.svelte"
import  CameraIcon from "./CameraIcon.svelte"
import  CheckMarkLucideIcon from "./CheckMarkLucideIcon.svelte"
import  CloseIcon from "./CloseIcon.svelte"
import  FilmIcon from "./FilmIcon.svelte"
import  GasIcon from "./GasIcon.svelte"
import  KeyboardIcon from "./KeyboardIcon.svelte"
import  LineChartIcon from "./LineChartIcon.svelte"
import  MailIcon from "./MailIcon.svelte"
import  MugIcon from "./MugIcon.svelte"
import  MusicIcon from "./MusicIcon.svelte"
import  PaletteIcon from "./PaletteIcon.svelte"
import  PaperPlaneIcon from "./PaperPlaneIcon.svelte"
import  PhoneIcon from "./PhoneIcon.svelte"
import  PigIcon from "./PigIcon.svelte"
import  SquarePencilIcon from "./SquarePencilIcon.svelte"
import  TVIcon from "./TVIcon.svelte"
import  UtensilIcon from "./UtensilIcon.svelte"
import  WrenchIcon from "./WrenchIcon.svelte"
import type TvIcon from "./TVIcon.svelte";

export const IconRegistry: IconRegistry<AddIcon|
KeyboardIcon|
MailIcon|
LineChartIcon|
SquarePencilIcon|
PhoneIcon|
WrenchIcon|
PaletteIcon|
CameraIcon|
MusicIcon|
BasketIcon|
GasIcon|
PigIcon|
UtensilIcon|
MugIcon|
TvIcon|
FilmIcon|
BookIcon|
PaperPlaneIcon|
BedIcon|
CheckMarkLucideIcon|
CloseIcon|
BackspaceIcon
> = {
  "add": AddIcon,
  "keyboard": KeyboardIcon,
  "mail": MailIcon,
  "stonks": LineChartIcon,
  "square_pencil": SquarePencilIcon,
  "phone": PhoneIcon,
  "hammerwrench": WrenchIcon,
  "palette": PaletteIcon,
  "camera": CameraIcon,
  "music": MusicIcon,
  "basket": BasketIcon,
  "gas": GasIcon,
  "piggy": PigIcon,
  "utensils": UtensilIcon,
  "mug": MugIcon,
  "tv": TVIcon,
  "film": FilmIcon,
  "book": BookIcon,
  "paperplane": PaperPlaneIcon,
  "sleep": BedIcon,
  "checkmark": CheckMarkLucideIcon,
  "close": CloseIcon,
  "backspace": BackspaceIcon
}
