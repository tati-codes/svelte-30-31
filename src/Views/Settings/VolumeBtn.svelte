<script lang="ts">
  import NoVolumeIcon from "../../lib/Icons/icons/NoVolumeIcon.svelte"
  import VolumeIcon from "../../lib/Icons/icons/VolumeIcon.svelte"
  import SettingsBtn from "../../lib/Shared/SettingsBtn.svelte"
  import { toggleMute } from "../../Store/actions/root/toggleMute"
  import { isMuted } from "../../Store/settingStore"
</script>

<SettingsBtn cb={toggleMute} caption={"mute"}>
  {#if $isMuted}
  <VolumeIcon x={10} y={10}/>
  {:else}
  <NoVolumeIcon x={10} y={10}/>
  {/if}
</SettingsBtn>

