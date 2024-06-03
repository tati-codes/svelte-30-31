<script lang="ts">
  import Icon from "../Icon.svelte"

  export let width = 55;
  export let height = 55;
  export let x = 8;
  export let y = 5;
</script>

    <Icon x={x} y={y} height={height}>
      <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
    </Icon>
