<script lang="ts">
  import Icon from "../../../lib/Icons/Icon.svelte"
  import { stroke, bg, medium, dark, light } from "../../../Store/color"
  import BackspaceIcon from "../../Timer/TaskCard/taskCardIcons/BackspaceIcon.svelte"
  export let cb: Function
  $: bsg = bg($medium);
  $: stg = stroke($medium)
</script>

<div role="button" aria-label="delete last number" class="numpadItem" on:click={() => cb()}>
  <Icon  stroke={$dark} fill={"transparent"} viewbox="0 0 24 24">
    <BackspaceIcon/>
  </Icon>
</div>

<style>
</style>