/** modified from: https://stackoverflow.com/questions/53606337/check-if-array-contains-all-elements-of-another-array */

import type { rootStore } from "../../Store/rootStore";

let checker = <T>(base: T[], incoming: T[]) => incoming.every(v => base.includes(v));
export let compatChecker = (oldRoot: rootStore, newRoot: rootStore): boolean => {
  let base = Object.keys(oldRoot), inc = Object.keys(newRoot);
  return checker(base,inc); 
}