<script lang="ts">
  import Button from './lib/TimerView/TaskCard/TaskCard.svelte'
  import CheckMarkIcon from './lib/Icons/icons/CheckMarkIcon.svelte'
  import ClockIcon from './lib/Icons/icons/ClockIcon.svelte'
  import FolderIcon from './lib/Icons/icons/FolderIcon.svelte'
  import GearIcon from './lib/Icons/icons/GearIcon.svelte'
  import LineIcon from './lib/Icons/icons/LineIcon.svelte'
  import ListIcon from './lib/Icons/icons/ListIcon.svelte'
  import LockIcon from './lib/Icons/icons/LockIcon.svelte'
  import LoopIcon from './lib/Icons/icons/LoopIcon.svelte'
  import NoLoopIcon from './lib/Icons/icons/NoLoopIcon.svelte'
  import NoVolumeIcon from './lib/Icons/icons/NoVolumeIcon.svelte'
  import OpenLockIcon from './lib/Icons/icons/OpenLockIcon.svelte'
  import PenIcon from './lib/Icons/icons/PenIcon.svelte'
  import ReplySolidIcon from './lib/Icons/icons/ReplySolidIcon.svelte'
  import SendToBottomIcon from './lib/Icons/icons/SendToBottomIcon.svelte'
  import TrashIcon from './lib/Icons/icons/TrashIcon.svelte'
  import VolumeIcon from './lib/Icons/icons/VolumeIcon.svelte'
  import {IconRegistry} from "./lib/TimerView/TaskCard/taskCardIcons/IconRegistry";
  import TimerSpan from './lib/TimerView/TimerSpan/TimerSpan.svelte'
  import AddTaskCard from './lib/TimerView/TaskCard/AddTaskCard.svelte'
  import BreakIcon from './lib/TimerView/TaskCard/BreakIcon.svelte'
  import TopBar from './lib/TimerView/TopBar/TopBar.svelte'
  let keys: TASKBAR_ITEM[] = Object.keys(IconRegistry) as TASKBAR_ITEM[];
</script>

<main>
  <TopBar/>
  <!-- <div class="card">
    <BreakIcon/>
    <AddTaskCard/>
    <LineIcon/>
    <ListIcon/>
    <LockIcon></LockIcon>
    <FolderIcon></FolderIcon>
    <TimerSpan/>
    <GearIcon></GearIcon>
    <LoopIcon></LoopIcon>
    <NoLoopIcon></NoLoopIcon>
    <OpenLockIcon/>
    <PenIcon/>
    <ReplySolidIcon/>
    <SendToBottomIcon/>
    <TrashIcon/>
    <VolumeIcon/>
    <NoVolumeIcon/>
  </div> -->
  <div class="card">
    {#each keys as key}
      <Button btnType={key} />
    {/each}
  </div>


</main>

<style>
  .card{
    display: flex;
    flex-direction: column;
    gap: 30px;
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
