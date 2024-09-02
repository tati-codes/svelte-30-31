<script>
  import Bell from "../../lib/Icons/icons/Bell.svelte"
  import RemoveBell from "../../lib/Icons/icons/RemoveBell.svelte"
  import SettingsBtn from "../../lib/Shared/SettingsBtn.svelte"
  import { light } from "../../Store/color"
  import { root } from "../../Store/rootStore"
  let toggle = () => {
    if (window.Notification.permission !== "granted") {
      Notification.requestPermission().then((result) => {
        if (result === "granted") {
          $root.notificationsPermissions = true
        }
      })
    } else if (
      window.Notification.permission === "granted" &&
      $root.notificationsPermissions === false
    ) {
      $root.notificationsPermissions = true
    } else if (
      window.Notification.permission === "granted" &&
      $root.notificationsPermissions === true
    ) {
      $root.notificationsPermissions = false
    }
  }
</script>

<SettingsBtn label={$root.notificationsPermissions ? "turn off notifications" : "turn on notifications"} ariaIndex={9} cb={toggle} anim>
  {#if !$root.notificationsPermissions}
    <Bell hue={$light} />
  {:else}
    <RemoveBell hue={$light} />
  {/if}
</SettingsBtn>
