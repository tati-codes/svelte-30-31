<script lang="ts">
  import Button from './lib/TaskCard/Button.svelte'
  import CheckMarkIcon from './lib/IconComponent/icons/CheckMarkIcon.svelte'
  import ClockIcon from './lib/IconComponent/icons/ClockIcon.svelte'
  import FolderIcon from './lib/IconComponent/icons/FolderIcon.svelte'
  import GearIcon from './lib/IconComponent/icons/GearIcon.svelte'
  import LineIcon from './lib/IconComponent/icons/LineIcon.svelte'
  import ListIcon from './lib/IconComponent/icons/ListIcon.svelte'
  import LockIcon from './lib/IconComponent/icons/LockIcon.svelte'
  import LoopIcon from './lib/IconComponent/icons/LoopIcon.svelte'
  import NoLoopIcon from './lib/IconComponent/icons/NoLoopIcon.svelte'
  import NoVolumeIcon from './lib/IconComponent/icons/NoVolumeIcon.svelte'
  import OpenLockIcon from './lib/IconComponent/icons/OpenLockIcon.svelte'
  import PenIcon from './lib/IconComponent/icons/PenIcon.svelte'
  import ReplySolidIcon from './lib/IconComponent/icons/ReplySolidIcon.svelte'
  import SendToBottomIcon from './lib/IconComponent/icons/SendToBottomIcon.svelte'
  import TrashIcon from './lib/IconComponent/icons/TrashIcon.svelte'
  import VolumeIcon from './lib/IconComponent/icons/VolumeIcon.svelte'
  import {IconRegistry} from "./lib/TaskCard/taskCardIcons/IconRegistry";
  import TimerSpan from './lib/TimerSpan/TimerSpan.svelte'
  let keys: TASKBAR_ITEM[] = Object.keys(IconRegistry) as TASKBAR_ITEM[];
</script>

<main>
  <h1>Vite + Svelte</h1>
  <div class="card">

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
  </div>
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
  .read-the-docs {
    color: #888;
  }
</style>
