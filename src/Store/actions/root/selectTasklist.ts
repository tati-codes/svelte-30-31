import { root } from "../../rootStore";
import type { Layout } from "../../typeValidators/Layout";

export let selectTasklist = (id: string) => root.update($root => {
  $root.selectedId = id
  return $root
});
