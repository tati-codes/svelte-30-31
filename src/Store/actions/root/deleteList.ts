import { root, tasklists } from "../../rootStore";
import type { Layout } from "../../typeValidators/Layout";
import { selectTasklist } from "./selectTasklist";

export let deleteList = (id: string) => root.update($root => {
  if ($root.taskLists.length == 1) return $root;
  else if ($root.selectedId === id) { 
    $root.selectedId = $root.taskLists.find(list => list.id !== $root.selectedId)!.id
  }
  $root.taskLists = $root.taskLists.filter(list => list.id !== id)
  return $root
  }
);
