<script lang="ts">
  import SettingsBtn from "../../lib/Shared/SettingsBtn.svelte"
  import ClassicLayoutBtn from "./ClassicLayoutBtn.svelte"
  import ModernLayoutBtn from "./ModernLayoutBtn.svelte"
  import PickerBtn from "./PickerBtn.svelte"

  // let {layout, dispatch} = useSettingsStore(state => state)
  // let setModern = () => dispatch("setLayout", "MODERN")
  // let setClassic = () => dispatch("setLayout", "CLASSIC")
  let layout = "CLASSIC"
  let toggle = () => null
  //{
  //   if (layout === "MODERN") setClassic()
  //   else if (layout === "CLASSIC") setModern() 
  // }
  // {layout === "CLASSIC" && <CLASSIC/>}
  // {layout === "MODERN" && <MODERN/>}
</script>

<SettingsBtn cb={toggle} caption={"button layout"}> 
  <h1>{layout}</h1>
</SettingsBtn >

<style>
  :global(.settingsBtn > h1) {
    margin-top: 1.5vh;
  }
  h1{
    user-select: none;
  }
</style>  