<script>
  import ClockIcon from "../../../lib/Icons/icons/ClockIcon.svelte"
  import { colorp, medium } from "../../../Store/color"
  import { clockOn } from "../../../Store/settingStore"
</script>

{#if $clockOn}
<div class="topBar">
  <ClockIcon/>
  <span class="totalLength" style={colorp($medium)}>
        01:20:00
  </span>
</div>
{/if}
  <style>
  .totalLength {
  
  letter-spacing: -4px;
  font-weight: bolder;
  padding-top: 1px;
  padding-top: 0.5vmax;
  font-size: 2.5rem;
  transition: color 0.325s linear;
  color: black;
  user-select: none;
  }
  .topBar {
  scale: 0.9;
  position: absolute;
  top: 3vmax;
}
 :global(.topBar > .clockIcon) {
  margin-right: -5%;

}
</style>