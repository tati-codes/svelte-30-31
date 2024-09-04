<script>
  import FolderIcon from "../../../lib/Icons/icons/FolderIcon.svelte"
  import SettingsBtn from "../../../lib/Shared/SettingsBtn.svelte"
  import { withAudio } from "../../../lib/Shared/withAudio"
  import { setView } from "../../../Store/actions/root/setView"
  import { pause } from "../../../Store/actions/task/pause"
  import { light } from "../../../Store/color";
  import { currentTaskList } from "../../../Store/rootStore"
  import TimerSpan from "../TimerSpan/TimerSpan.svelte"
  const goPicker = () => { 
    if ($currentTaskList.status === "TIMER_ACTIVE") {
      pause();
    }
    setView("PICKER");
  }

</script>


<SettingsBtn ariaIndex={1} cb={withAudio(goPicker)} label="go to tasklist picker">
  <FolderIcon fill={$light}/>
</SettingsBtn>
<TimerSpan/>

