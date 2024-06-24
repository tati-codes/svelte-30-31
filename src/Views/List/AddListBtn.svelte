<script lang="ts">
  import Icon from "../../lib/Icons/Icon.svelte"
  import AddIcon from "../Timer/TaskCard/taskCardIcons/AddIcon.svelte"

  let add = () => null
</script>
<!-- let add = useTaskListPickerStore(state => () => state.dispatch("addTaskList", null)) -->
  
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  viewBox="0 0 138 38"
  width="450"
  class="svgTaskCard innerAdd"
  on:click={null}
  transform="scale(0.77)"
>
  <g>
    <path
      class="dark-fill fillT"
      stroke-width="0.265"
      d="M3.532 9.05v19.426c.758 2.18 1.973 4.14 5.496 4.985l121.881-.226c2.946-.65 4.572-2.51 5.205-5.278l.073-19.16c-.494-2.822-2.342-4.415-4.953-5.313L9.051 3.412c-3.263.646-5.148 2.486-5.519 5.638z"
    ></path>
    <Icon x={60} y={9}>
      <AddIcon/>
    </Icon>
  </g>
</svg>
