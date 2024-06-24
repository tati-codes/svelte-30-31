<script lang="ts">
  import ClassicLayoutBtn from "./ClassicLayoutBtn.svelte"
  import ModernLayoutBtn from "./ModernLayoutBtn.svelte"

  // let {layout, dispatch} = useSettingsStore(state => state)
  // let setModern = () => dispatch("setLayout", "MODERN")
  // let setClassic = () => dispatch("setLayout", "CLASSIC")
  let toggle = () => null
  let layout = "CLASSIC"
  //{
  //   if (layout === "MODERN") setClassic()
  //   else if (layout === "CLASSIC") setModern() 
  // }
  // {layout === "CLASSIC" && <CLASSIC/>}
  // {layout === "MODERN" && <MODERN/>}
</script>

<div class="fadeIn dark-background pickerBtn settings" on:click={toggle}>
  <svg>
    {#if layout == "CLASSIC"}
      <ClassicLayoutBtn/>
    {:else if  layout == "MODERN"}
      <ModernLayoutBtn/>
    {/if}
  </svg>
</div>
