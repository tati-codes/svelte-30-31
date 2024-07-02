<script lang="ts">
  import {stroke, dark, fill } from "../../../Store/color"
  export let x = 55, y = 55, hue: Hue = "dark";
  type Hue = "light" | "medium" | "dark"
  $: st = stroke($dark)
  $: fl = fill($dark)
</script>
    <svg
      viewBox="0 0 100 412"
      x={x}
      y={y}
      width="80"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="scale(12), translate(-105, -104)">
        <circle
          style={st}
          class={`stubbornClock sT`}
          cx="109.21608"
          cy="121.23831"
          r="8.6356897" />
        <rect
          class={`clock fillT`}
          style={fl}
          id="rect2461"
          width="8.4906425"
          height="2.225534"
          x="104.97075"
          y="110.21989" />
        <rect
          class={`clock fillT`}
          style={fl}
          id="rect2461-7"
          width="8.4906425"
          height="2.225534"
          x="104.97076"
          y="129.77719" />
        <path
          class={`stubbornClock sT`}
          style={st}
          d="m 108.39248,115.50054 v 6.50945"
          id="path2667" />
        <path
          class={`stubbornClock sT`}
          style={st}
          d="m 108.44257,121.94957 4.75003,3.32155"
          id="path2673" />
      </g>
    </svg>
<style>
  .stubbornClock {
  fill: none;
  stroke: transparent;
  stroke-width: 2.76601;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: none;
  stroke-opacity: 1;
  transition: stroke 0.325s linear;
}
.clock {
  fill-opacity: 1;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: none;
  stroke-opacity: 1;
  paint-order: normal;
}
.fillT {
  fill: transparent;
  transition: fill 0.325s linear;
}
.medium-stroke {
  stroke: #6dc173;
}
.medium-fill {
  fill: #6dc173;
}

</style>