import { root } from "../../rootStore";


export let toggleClock= () => root.update($root => {
  $root.showClockIcon = !$root.showClockIcon;
  return $root;
});
