<script lang="ts">
  import { onEnter } from "../../../lib/Shared/onEnter"
import { bg, medium } from "../../../Store/color"
  import { editView, swapEditView as swap } from "../../../Store/taskEdit"
  $: bsg = bg($medium);

</script>

<div class="bottomBar">
  <li class="tab-li marginright" tabindex="2"on:click={() => swap("ICON")}
  on:keyup={onEnter(() => swap("ICON"))}
  >
    <div
    style={bsg}
    class={`tatiTab ${
      $editView === "ICON" ? "" : "inactive"
    }`}
    role="tab"
    aria-controls={"icon-panel"}
    >
    Icon
    </div>
  </li>
  <li class="tab-li" tabindex="3"  on:click={() => swap("COLOR")}
    on:keyup={onEnter(() => swap("COLOR"))}>
    
    <div
    style={bsg}
    class={`tatiTab ${
      $editView === "COLOR" ? "" : "inactive"
    }`}
    role="tab"
    aria-controls={"color-panel"}
    >
    Color
    </div>
  </li>
</div>

<style>

  div.tatiTab {
    display: block;
    padding: 14px 21px;
    font-size: 30px;
    font-weight: lighter;
    font-weight: normal;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    -webkit-transition: 0.2s -webkit-filter linear;
    -moz-transition: 0.2s -moz-filter linear;
    -moz-transition: 0.2s filter linear;
    transition: 0.2s filter linear;
    transition: all 0.2s linear;
  }
</style>