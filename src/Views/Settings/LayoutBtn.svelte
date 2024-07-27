<script lang="ts">
  import ClassicLayoutBtn from "./ClassicLayoutBtn.svelte"
  import ModernLayoutBtn from "./ModernLayoutBtn.svelte"
  import PickerBtn from "./PickerBtn.svelte"

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

<PickerBtn> 
   <svg>
    {#if layout == "CLASSIC"}
      <ClassicLayoutBtn/>
    {:else if  layout == "MODERN"}
      <ModernLayoutBtn/>
    {/if}
  </svg>
</PickerBtn>
