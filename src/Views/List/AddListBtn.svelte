<script lang="ts">
  import CoolAddButton from "../../lib/Shared/CoolAddButton.svelte"
  import { createTasklist } from "../../Store/actions/root/createList"
  import { tasklists } from "../../Store/rootStore"
  const addlist = () => {
    createTasklist();
  }
  $: lastIndex = (($tasklists.length + 2) * 2)
</script>

<CoolAddButton label="create new list" ariaIndex={lastIndex} cb={addlist}/>