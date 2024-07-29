<script>
  import GearIcon from "../../../lib/Icons/icons/GearIcon.svelte"
  import SettingsBtn from "../../../lib/Shared/SettingsBtn.svelte"
  import { setView } from "../../../Store/actions/root/setView"
  import { light } from "../../../Store/color";
  const goSettings = () => setView("SETTINGS");

</script>

<SettingsBtn cb={goSettings}>
  <GearIcon fill={$light}/>
</SettingsBtn>
