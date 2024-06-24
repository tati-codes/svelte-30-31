<script lang="ts">
  export let width = 55;
  export let height = 55;
  export let x = 8;
  export let y = 5;
  export let stroke = "white"
  export let fill = "black"
  export let classNames = ""
</script>

<svg
xmlns="http://www.w3.org/2000/svg"
{width}
{height}
{x}
{y}
{fill}
{stroke}
viewBox="0 0 500 500"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
class={"_icon " + classNames}
>
<slot/>
</svg>

<style>
</style>