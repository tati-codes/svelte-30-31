<script lang="ts">
  import SettingsBtn from "../../lib/Shared/SettingsBtn.svelte"
  import { toggleLayout } from "../../Store/actions/root/toggleLayout"
  import { currentLayout } from "../../Store/settingStore"
  $: opposite = $currentLayout === "CLASSIC" ? "MODERN" : "CLASSIC"
</script>

<SettingsBtn cb={toggleLayout} caption={"button layout"}> 
  <h1 class="fadeIn">{opposite}</h1>
</SettingsBtn >

<style>
  :global(.settingsBtn > h1) {
    margin-top: 1.5vh;
  }
  h1{
    user-select: none;
  }
</style>  