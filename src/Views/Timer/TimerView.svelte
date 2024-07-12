<script lang="ts">
  import Timer from "./Timer/Timer.svelte"
  import TopBar from "./TopBar/TopBar.svelte"
  import { currentTaskList } from "../../Store/rootStore"
  import Tasks from "./TaskCard/Tasks.svelte"
</script>

<TopBar/>
<Timer/>
<Tasks/>

<style>
  .card{
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-left: 20%;
  }
  :global(.card > .lineStroke) {
    margin: -10%
  
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
