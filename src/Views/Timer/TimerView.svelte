<script lang="ts">
  import Timer from "./Timer/Timer.svelte"
  import TopBar from "./TopBar/TopBar.svelte"
  import { currentTaskList } from "../../Store/rootStore"
  import Tasks from "./TaskCard/Tasks.svelte"
</script>

<TopBar/>
<Timer/>
<Tasks/>

