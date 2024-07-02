<script lang="ts">
  import Icon from "../../../lib/Icons/Icon.svelte"
  import ClockIcon from "../../../lib/Icons/icons/ClockIcon.svelte"
  import { seconds_to_hhmmss } from "../../../lib/Shared/time"
  import { bg, medium } from "../../../Store/color"
  import { editingTask } from "../../../Store/taskEdit";
  $: bsg = bg($medium);
  $: len = seconds_to_hhmmss($editingTask!.length)
</script>

<div class="timeBtn innerTask" tabindex="1" style={bsg}>
  <div class="deep" >
      <ClockIcon x={20} y={-100}/>
  </div>
  <p class="hours">{len}</p>
</div>

<style>
  :global(.numpadItem) {
    text-align: center;
    justify-content: center;
    display: grid;
    border-top: 3px solid rgba(0, 0, 0, 0.2);
    border-right: 3px solid rgba(0, 0, 0, 0.2);
    padding-top: 13%;
    background-color: rgba(0, 0, 0, 0);
    -webkit-transition: 0.2s -webkit-filter linear;
    -moz-transition: 0.2s -moz-filter linear;
    -moz-transition: 0.2s filter linear;
    transition: 0.2s filter linear;
    user-select: none;
    font-size: 36px;
    font-weight: bolder;
  }
  .hours{
    margin-top:20%;
    font-size: 24px;
    font-weight: bolder;
    user-select: none;
  }


  .timeBtn {
  width: 90px;
  background-color: transparent;
  transition: background-color 0.325s linear;
  height: 80px;
  border-radius: 0 0 1rem 1rem;
  text-align: center;
  z-index: 0;
  }

  .deep{
    z-index: -1;
    position: absolute;
    padding-left: 5px;
    opacity: 35%;
  }

</style>