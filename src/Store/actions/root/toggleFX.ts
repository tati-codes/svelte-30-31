import { root } from "../../rootStore";


export let toggleFX = () => root.update($root => {
  $root.FX = !$root.FX;
  return $root;
});
