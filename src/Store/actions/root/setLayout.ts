import { root } from "../../rootStore";
import type { Layout } from "../../typeValidators/Layout";

export let setLayout = (newLayout: Layout) => root.update($root => {
  $root.layout = newLayout
  return $root
});
