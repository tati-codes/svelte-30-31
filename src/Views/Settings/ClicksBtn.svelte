<script>

  import SettingsBtn from "../../lib/Shared/SettingsBtn.svelte"
  import { toggleClicks } from "../../Store/actions/task/playAudio"
  import { allowClicks } from "../../Store/rootStore"
</script>

<SettingsBtn label={$allowClicks ? "mute clicks" : "allow clicks"} ariaIndex={7} cb={toggleClicks} anim> 
  <h1>{$allowClicks ? "NO CLICKS" : "CLICKS"}</h1>
</SettingsBtn >

<style>
  :global(.settingsBtn > h1) {
    margin-top: 1.5vh;
  }
  h1{
    user-select: none;
  }
</style>  