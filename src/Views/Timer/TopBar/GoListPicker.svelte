<script>
  import FolderIcon from "../../../lib/Icons/icons/FolderIcon.svelte"
  import SettingsBtn from "../../../lib/Shared/SettingsBtn.svelte"
  import { setView } from "../../../Store/actions/root/setView"
  import { pause } from "../../../Store/actions/task/pause"
  import { light } from "../../../Store/color";
  import { currentTaskList } from "../../../Store/rootStore"
  const goPicker = () => { 
    if ($currentTaskList.isPlaying) {
      pause();
    }
    setView("PICKER");
  }

</script>


<SettingsBtn cb={goPicker} >
  <FolderIcon fill={$light}/>
</SettingsBtn>

