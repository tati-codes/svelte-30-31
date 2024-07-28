<script lang="ts">
  import Icon from "../../lib/Icons/Icon.svelte"
  import CoolAddButton from "../../lib/Shared/CoolAddButton.svelte"
  import { createTasklist } from "../../Store/actions/root/createList"
  import { setView } from "../../Store/actions/root/setView"
  import { bg, combineStyles, dark, light, medium } from "../../Store/color"
  import AddIcon from "../Timer/TaskCard/taskCardIcons/AddIcon.svelte"
  import TaskBarIcons from "../Timer/TaskCard/taskCardIcons/TaskBarIcons.svelte"
  const addlist = () => {
    createTasklist();
  }
</script>

<CoolAddButton cb={addlist}/>