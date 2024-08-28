<script lang="ts">
  import SettingsBtn from "../../lib/Shared/SettingsBtn.svelte"
  import { toggleLayout } from "../../Store/actions/root/setLayout"
  import { currentLayout } from "../../Store/settingStore"
  $: opposite = $currentLayout === "CLASSIC" ? "MODERN" : "CLASSIC"
</script>

<SettingsBtn ariaIndex={5} cb={toggleLayout}  anim> 
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