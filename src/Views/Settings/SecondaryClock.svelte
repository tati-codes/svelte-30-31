<script lang="ts">
  import ClockIcon from "../../lib/Icons/icons/ClockIcon.svelte"
  import HiddenClock from "../../lib/Icons/icons/HiddenClock.svelte"
  import NoVolumeIcon from "../../lib/Icons/icons/NoVolumeIcon.svelte"
  import SettingsBtn from "../../lib/Shared/SettingsBtn.svelte"
  import { toggleClock } from "../../Store/actions/root/toggleClock"
  import { light } from "../../Store/color"
  import { clockOn } from "../../Store/settingStore"
</script>

<SettingsBtn cb={toggleClock}  anim>
  {#if $clockOn}
  <HiddenClock hue={$light}/>
  {:else}
  <ClockIcon hue={$light}/>
  {/if}
</SettingsBtn>

