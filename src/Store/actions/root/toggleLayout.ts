import { root } from "../../rootStore";
import type { Layout } from "../../typeValidators/Layout";

export let toggleLayout = () => root.update($root => {
  if ($root.layout === "CLASSIC") $root.layout = "MODERN"
  else if ($root.layout === "MODERN") $root.layout = "CLASSIC"
  return $root
});
