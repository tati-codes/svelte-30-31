<script lang="ts">
  import { setView } from "../../Store/actions/root/setView"
  import { bg, light, medium } from "../../Store/color"
  import { LightenDarkenColor } from "./lightenColor"
  export let cb;
  export let caption: string = "";
  let isHovered = false;
  let toggleHover = () => isHovered = !isHovered
  $: bgT = bg($medium);
  $: darkbgT = bg(`#${LightenDarkenColor($medium, -25)}`);
</script>

{isHovered}
<div class="settingsBtn fadeIn" style={isHovered ? darkbgT : bgT} on:click={cb}  on:mouseenter={toggleHover} on:mouseout={toggleHover}>
  <slot />
</div>

<style>
.settingsBtn {
  background-color: transparent;
  transition: background-color 0.325s linear;
  height: 80px;
  border-radius: 1rem;
  transition: 0.27s background-color linear;
  flex: 1;
  text-align: center;
}

.settingsBtn:hover {
    transition: 0.27s box-shadow linear;
    box-shadow: inset 0px 0px 0px 2px rgba(255, 255, 255, 0.6);
    transition: 0.27s background-color linear;

  }

  .settingsBtn:active {
    filter: brightness(110%);
    transition: 0.27s filter linear;
  }
</style>