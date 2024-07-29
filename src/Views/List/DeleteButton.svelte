<script lang="ts">
  import { light, dark } from "../../Store/color"
</script>

<svg
xmlns="http://www.w3.org/2000/svg"
width="18"
height="18"
viewBox="0 0 24 24"
fill="none"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
>
<g class="innerButton">
  <rect
    stroke-width="1"
    stroke={$light}
    fill={$dark}
    class={` circle `}
    width="18"
    height="18"
    rx="2"
  ></rect>
  <rect x="2" y="2" width="18" height="18" rx="2" ry="2"></rect>
  <line      stroke={$light}
  x1="7" y1="7" x2="15" y2="15"></line>
  <line     stroke={$light}
  x1="15" y1="7" x2="7" y2="15"></line>
  </g>
</svg>

<style>
  .innerButton {
  -webkit-transition: 0.2s -webkit-filter ease-in;
  -moz-transition: 0.2s -moz-filter ease-in;
  -moz-transition: 0.2s filter ease-in;
  transition: 0.2s filter ease-in;
  transition: 0.2s all ease-in;
  fill:rgba(265,265,265,0.1);
  opacity: 0%;
}

</style>