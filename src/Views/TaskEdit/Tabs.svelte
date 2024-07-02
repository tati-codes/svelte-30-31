<script lang="ts">
  import { bg, medium } from "../../Store/color"
  import { editView, swapEditView as swap } from "../../Store/taskEdit"
  $: bsg = bg($medium);

</script>

<ul class="bottomBar">
  <li class="tab-li marginright" tabindex="0"       on:click={() => swap("ICON")}
    on:keyup={() => swap("ICON")}
>
    <input type="radio" id="icon" class="tab-input"/>
    <label
      for={"icon"}
      style={bsg}
      class={`tatiTab ${
        $editView === "ICON" ? "" : "inactive"
      }`}
      role="tab"
      aria-controls={"icon-panel"}
>
      Icon
    </label>
  </li>
  <li class="tab-li" tabindex="1"       on:click={() => swap("COLOR")}
    on:keyup={() => swap("COLOR")}>
    <input type="radio" id="color" class="tab-input"/>
    <label
      for ={"color"}
      style={bsg}
      class={` tatiTab ${
        $editView === "COLOR" ? "" : "inactive"
      }`}
      role="tab"
      aria-controls={"color-panel"}


    >
      Color
    </label>
  </li>
</ul>

<style>
</style>