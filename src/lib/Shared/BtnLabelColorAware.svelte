<!-- export const BtnLabelColorAware = ({ label = "", x, y, size="48px"}: LabelProps) => { -->
<script lang="ts">
  export let x = 9, y = 50, size="25px", label: string;
</script>

<text
  class="fadeIn light-fill fillT"
  x={x}
  y={y}
  font-size={size}
  font-weight="bolder"
>
  <tspan x={x} y={y} font-size={size}>
    {label}
  </tspan>
</text>
