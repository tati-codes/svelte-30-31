<script lang="ts">
  import { stroke, light } from "../../../../Store/color"

  $: style = stroke($light)

type TimerPositions =
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | "top"
  | "topRight"
  | "topLeft"
  | "midRight"
  | "midLeft"

let positions: { [key in TimerPositions]: [number, number] } = {
  bottom: [325, 575],
  bottomLeft: [80, 400],
  bottomRight: [570, 400],
  top: [325, 75],
  topRight: [485, 140],
  topLeft: [165, 140],
  midRight: [90, 245],
  midLeft: [560, 245],
}

export let position: TimerPositions;
export let classes: string = "";
export let cb: () => void


let [x, y] = positions[position]

</script>


    <slot />
    <circle
    {style}
    fill="transparent"
    class={`circle ${classes}`}
    r="62.5"
    cx={x}
    cy={y}
    stroke-width="8"
    on:click={cb}
  ></circle>
