<script lang="ts">
  import Icon from "../../../lib/Icons/Icon.svelte"
  import { start } from "../../../Store/actions/taskList/start"
  import { dark } from "../../../Store/color"
  import { currentTaskList, currentTask } from "../../../Store/rootStore"
  import type { taskIcon } from "../../../Store/typeValidators/taskIcon"
  import { IconRegistry } from "../TaskCard/taskCardIcons/IconRegistry"
  import TaskBarIcons from "../TaskCard/taskCardIcons/TaskBarIcons.svelte"
  import Pause from "./Playback/Pause.svelte"
  import Triangle from "./Playback/Triangle.svelte"
  $: isPlaying = $currentTaskList.isPlaying;
  $: type = IconRegistry[$currentTask.icon as taskIcon]
</script>


{#if isPlaying}
  <Pause/>
  {:else}
  <Icon cb={start} stroke={$dark} width={200} height={200} x={260} y={200} viewbox="0 0 36 36">
    <svelte:component this={type}></svelte:component>
  </Icon>
{/if}