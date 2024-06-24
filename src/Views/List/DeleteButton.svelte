<script lang="ts">
  import CloseIcon from "../Timer/TaskCard/taskCardIcons/CloseIcon.svelte"


  // className={`light-${color} ${className}`}
  export let x = 110, y = 9;
  let onClick = () => null
  let color = "#000000"
  let del = onClick
  // <CloseIcon color={"stroke"} x="110" y="9" />

</script>

<svg
xmlns="http://www.w3.org/2000/svg"
width="18"
height="18"
x={x}
y={y}
viewBox="0 0 24 24"
fill="none"
stroke={color}
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
on:click={onClick}
>
<g class="innerButton" on:click={del}>
  <rect
    stroke-width="1"
    stroke="transparent"
    class={`light-stroke dark-fill circle `}
    width="18"
    height="18"
    x="110"
    y="9"
    rx="2"
  ></rect>
  <CloseIcon/>
</g>
</svg>