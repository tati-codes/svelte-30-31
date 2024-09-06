import { get } from "svelte/store"
import { root } from "../../rootStore"



export const sendNotif = (taskName: string, message: string) => {
  if (window.Notification === undefined) return;
  if (window.Notification.permission !== "granted") return
  else if (get(root).notificationsPermissions === false) return
  else navigator.serviceWorker.ready.then(function(registration) {
    registration.showNotification(`${taskName} ${message}!`);
  }) 
}
