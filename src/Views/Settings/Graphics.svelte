<script>

  import SettingsBtn from "../../lib/Shared/SettingsBtn.svelte"
  let toggle = () => null
</script>

<SettingsBtn cb={toggle}> 
  <h1>HIGH FX</h1>
</SettingsBtn >

<style>
  :global(.settingsBtn > h1) {
    margin-top: 1.5vh;
  }
  h1{
    user-select: none;
  }
</style>  