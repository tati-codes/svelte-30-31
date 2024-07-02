<script>

  import Name from "./Name.svelte"
  import Time from "./TimePicker/ModalTime.svelte"
  import { editStore } from "../../Store/taskEdit"
  import Tabs from "./Tabs.svelte"
  import ColorPicker from "./ColorPicker.svelte"
  import TimePicker from "./TimePicker/TimePicker.svelte"
  import BottomBar from "./BottomBar.svelte"
  import IconGrid from "./IconPicker/IconGrid.svelte"
  import RealTabs from "./RealTabs.svelte"
</script>

<div class="modal">
  <div class="modalTopBar">
    <Name/>
    <Time/>
  </div>
  <Tabs/>
  <RealTabs/>
  <!-- {#if $editStore.editView === "COLOR"}
  <ColorPicker/>
  {:else if $editStore.editView === "ICON"}
  <IconGrid/>
  {:else if $editStore.editView === "NUMPAD"}
  <TimePicker/>b 
  {/if} -->
  <BottomBar/>
</div>
  
<style>
  .modal {
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 140%;
    z-index: 0;
    position: absolute;
  }
  :global(.background-darken) {
  background-color: rgba(0, 0, 0, 0);
  -webkit-transition: 0.2s -webkit-filter linear;
  -moz-transition: 0.2s -moz-filter linear;
  -moz-transition: 0.2s filter linear;
  transition: 0.2s filter linear;
  transition: 0.2s all linear;
}
  .modalTopBar {
    display: flex;
    justify-content: left;
    margin-left: 25px;
    padding-top: 1%;
    width: 893px;
  }

</style>