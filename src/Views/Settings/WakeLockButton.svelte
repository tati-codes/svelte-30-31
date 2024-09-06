<script lang="ts">
  import Moon from "../../lib/Icons/icons/Moon.svelte"
  import Sun from "../../lib/Icons/icons/Sun.svelte"
import SettingsBtn from "../../lib/Shared/SettingsBtn.svelte"
  import { toggleWakeLock, userAllowedWakeLock, wakeLockSupported } from "../../Store/actions/taskList/wakeLock"
  import { colors, light } from "../../Store/color"
  import { colorStrings } from "../../Store/colorStrings"
</script>
<SettingsBtn label={$wakeLockSupported ? $userAllowedWakeLock ? "keep screen awake" : "turn screen off" : ""} ariaIndex={4} cb={toggleWakeLock} anim={$wakeLockSupported}>
  {#if $wakeLockSupported}
    {#if $userAllowedWakeLock}
  <Moon hue={$light}/>
    {:else if !$userAllowedWakeLock}
  <Sun hue={$light}/>
    {/if}  
  {/if}
</SettingsBtn>
  <span/>
