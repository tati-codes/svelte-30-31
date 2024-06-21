<script lang="ts">
  import Icon from "../Icon.svelte"
  export let x:number, y:number;
  export let width = 55;
  export let height = 55;
</script>

<Icon {x} {y} {width} {height}>
  <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
</Icon>