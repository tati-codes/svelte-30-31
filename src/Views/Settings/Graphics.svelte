<script>

  import SettingsBtn from "../../lib/Shared/SettingsBtn.svelte"
  import { toggleFX } from "../../Store/actions/root/toggleFX"
  import { FXOn } from "../../Store/settingStore"
</script>

<SettingsBtn cb={toggleFX}> 
  <h1>{$FXOn ? "LOW" : "HIGH"} FX</h1>
</SettingsBtn >

<style>
  :global(.settingsBtn > h1) {
    margin-top: 1.5vh;
  }
  h1{
    user-select: none;
  }
</style>  