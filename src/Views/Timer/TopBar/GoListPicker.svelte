<script>
  import FolderIcon from "../../../lib/Icons/icons/FolderIcon.svelte"
  import SettingsBtn from "../../../lib/Shared/SettingsBtn.svelte"
  import { setView } from "../../../Store/actions/root/setView"
  import { light } from "../../../Store/color";
  const goPicker = () => setView("PICKER");

</script>


<SettingsBtn cb={goPicker}>
  <FolderIcon fill={$light}/>
</SettingsBtn>

