import { root } from "../../rootStore";

export let notifsGranted = () => root.update($root => {
  $root.notificationsPermissions = true;
  return $root
});
