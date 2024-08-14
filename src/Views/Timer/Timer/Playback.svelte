<script lang="ts">
  import Icon from "../../../lib/Icons/Icon.svelte"
  import { start } from "../../../Store/actions/taskList/start"
  import { dark } from "../../../Store/color"
  import { currentTaskList, currentTask } from "../../../Store/rootStore"
  import { oldPlayback } from "../../../Store/settingStore"
  import type { taskIcon } from "../../../Store/typeValidators/taskIcon"
  import { IconRegistry } from "../TaskCard/taskCardIcons/IconRegistry"
  import TaskBarIcons from "../TaskCard/taskCardIcons/TaskBarIcons.svelte"
  import OldPlayback from "./OldPlayback.svelte"
  import Pause from "./Playback/Pause.svelte"
  import Triangle from "./Playback/Triangle.svelte"
  $: isPlaying = $currentTaskList.status === "TIMER_ACTIVE";
</script>

{#if isPlaying}
  <Pause/>
{:else}
  {#if $oldPlayback}
    <OldPlayback/>
  {:else}
    <Triangle/>
  {/if}
{/if}
