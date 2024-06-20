<script lang="ts">
  import Icon from "../../Icons/Icon.svelte"
  import TaskBarIcons from "./taskCardIcons/TaskBarIcons.svelte"

// onClick={handleClick}

</script>
<svg
xmlns="http://www.w3.org/2000/svg"
version="1.1"
viewBox="0 0 138 38"
xml:space="preserve"
width="490"
class="addTaskCard fadeIn innerAdd"
>
<g class={"innerAdd"}>
  <TaskBarIcons stroke="gray" _class="light-gray" width={22} height={22} x={60} y={7} type="add"></TaskBarIcons>
  <path
    class={`medium-gray-fill fillT innerAdd`}
    stroke-width="0.265"
    d="M3.532 9.05v19.426c.758 2.18 1.973 4.14 5.496 4.985l121.881-.226c2.946-.65 4.572-2.51 5.205-5.278l.073-19.16c-.494-2.822-2.342-4.415-4.953-5.313L9.051 3.412c-3.263.646-5.148 2.486-5.519 5.638z"
  >

  </path>
</g>
</svg>

<!-- color={"gray"} -->
//addTaskCard
//fadeIn
//innerAdd

<style>

  .innerAdd{
    -webkit-transition: 0.2s -webkit-filter linear;
    -moz-transition: 0.2s -moz-filter linear;
    -moz-transition: 0.2s filter linear;
    transition: 0.2s filter linear;
    opacity: 70%;
  }
  .addTaskCard {
  margin-right: 0.5%;
}
</style>
