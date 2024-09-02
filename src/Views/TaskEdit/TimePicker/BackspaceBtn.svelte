<script lang="ts">
  import Icon from "../../../lib/Icons/Icon.svelte"
  import { onEnter } from "../../../lib/Shared/onEnter"
  import { stroke, bg, medium, dark, light } from "../../../Store/color"
  import BackspaceIcon from "../../Timer/TaskCard/taskCardIcons/BackspaceIcon.svelte"
  export let cb: Function
  $: bsg = bg($medium);
  $: stg = stroke($medium)
</script>

<div role="button" aria-label="delete last number" tabindex="14" style={bsg} class="numpad-item" on:click={() => cb()} on:keyup={onEnter(cb)}>
  <Icon  stroke={$dark} fill={"transparent"} viewbox="0 0 24 24">
    <BackspaceIcon/>
  </Icon>
</div>

<style>
  .numpad-item {
    text-align: center;
    justify-content: center;
    display: grid;
    padding-top: 13%;
    background-color: rgba(0, 0, 0, 0);
    -webkit-transition: 0.2s -webkit-filter linear;
    -moz-transition: 0.2s -moz-filter linear;
    -moz-transition: 0.2s filter linear;
    transition: 0.2s filter linear;
    user-select: none;
    font-size: 36px;
    font-weight: bolder;
  }  
  .numpad-item:hover {
  filter: brightness(85%);
}
.numpad-item:active {
  filter: brightness(120%);
}
  </style>