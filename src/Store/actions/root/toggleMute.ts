import { root } from "../../rootStore";


export let toggleMute = () => root.update($root => {
  $root.muted = !$root.muted;
  return $root;
});
