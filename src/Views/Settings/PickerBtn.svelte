<script lang="ts">
    import { bg, dark } from "../../Store/color"
    export let clickHandler = () => null;
</script>
<div class="fadeIn pickerBtn settings" style={bg($dark)} on:click={clickHandler}>
  <slot></slot>
</div>

<style>
  .pickerBtn{
    width: 100px;
    background-color: transparent;
    transition: background-color 0.325s linear;
    margin-right: 1%;
    height: 80px;
    border-radius: 1rem;
  }
</style>