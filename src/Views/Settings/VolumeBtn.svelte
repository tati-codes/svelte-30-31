<script lang="ts">
  import NoVolumeIcon from "../../lib/Icons/icons/NoVolumeIcon.svelte"
  import VolumeIcon from "../../lib/Icons/icons/VolumeIcon.svelte"
  import SettingsBtn from "../../lib/Shared/SettingsBtn.svelte"
  import { toggleMute } from "../../Store/actions/root/toggleMute"
  import { light } from "../../Store/color"
  import { isMuted } from "../../Store/settingStore"
//TODO add audio
</script>

<SettingsBtn cb={toggleMute} anim>
  {#if $isMuted}
  <VolumeIcon x={10} y={10} fill={$light}/>
  {:else}
  <NoVolumeIcon x={10} y={10} fill={$light}/>
  {/if}
</SettingsBtn>

