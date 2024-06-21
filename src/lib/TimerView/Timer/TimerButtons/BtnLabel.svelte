<script lang="ts">
  export let size = "48px";
  export let x:number, y:number, label: string;
</script>
<text
class="fadeIn light-fill fillT"
{x}
{y}
font-size={size}
font-weight="bolder"
>
<tspan x={x} y={y} font-size={size}>
  {label}
</tspan>
</text>