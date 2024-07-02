<script lang="ts">
  import Icon from "../../../lib/Icons/Icon.svelte"
  import { stroke, bg, medium } from "../../../Store/color"
  import BackspaceIcon from "../../Timer/TaskCard/taskCardIcons/BackspaceIcon.svelte"
  export let cb: Function
  $: bsg = bg($medium);
  $: stg = stroke($medium)
</script>

<div style={bsg} class="numpadItem" on:click={() => cb()}>
  <Icon style={stg}>
    <BackspaceIcon/>
  </Icon>
</div>

<style>
</style>