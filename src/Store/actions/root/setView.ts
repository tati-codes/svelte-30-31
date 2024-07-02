import { root } from "../../rootStore";
import type { Views } from "../../typeValidators/Views";

export let setView = (newView: Views) => root.update($root => {
  $root.currentView = newView
  return $root
});
