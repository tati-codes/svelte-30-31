<script>
  import { currentTaskList, root, tasklists } from "../Store/rootStore"


  import DebugStore from "./Shared/debugStore.svelte"

</script>
<aside class="first">
  <DebugStore obj={$root} title="root"/>
  <DebugStore obj={$currentTaskList} title="tasklist"/>
</aside>
<aside class="second">
  {#each $root.taskLists as list}
  <DebugStore obj={list} title="lists"/>
  {/each}
</aside>
<aside class="third">
  {#each $currentTaskList.tasks as task}
  <DebugStore obj={task} title="tasks"/>
  {/each}
</aside>
<style>
  .first {
    background: rgba(0, 0, 0, 0.8);
    height:fit-content;
    padding: 20px;
    z-index: 0;
    font-family: Helvetica;
    border-right: 3px dashed whitesmoke;
  }
  .second {
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    z-index: 0;
    font-family: Helvetica;
    border-right: 3px dashed whitesmoke;

  }
  .third {
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    z-index: 0;
    font-family: Helvetica;
  }
  
</style>