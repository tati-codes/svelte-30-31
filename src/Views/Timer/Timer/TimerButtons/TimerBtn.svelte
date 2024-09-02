<script lang="ts">
  import { onEnter } from "../../../../lib/Shared/onEnter"
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
export let index: number;
export let label: string;
let [x, y] = positions[position]

</script>


    <slot />
    <circle
    {style}
    role="button"
    aria-label={label}
    tabindex={index}
    on:keyup={onEnter(cb)}
    fill="transparent"
    class={`circle ${classes} roundFocus`}
    r="62.5"
    cx={x}
    cy={y}
    stroke-width="8"
    on:click={cb}
  ></circle>

  <style>
    .roundFocus:focus-visible {
      border-radius: 50%;
      outline: 5px solid #0e64d4;
    }
  </style>