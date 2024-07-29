<script>
  import GearIcon from "../../../lib/Icons/icons/GearIcon.svelte"
  import SettingsBtn from "../../../lib/Shared/SettingsBtn.svelte"
  import { setView } from "../../../Store/actions/root/setView"
  import { light } from "../../../Store/color";
  import { currentView } from "../../../Store/settingStore"
  $: isSettings = $currentView === "SETTINGS"
  const goSettings = () => setView("SETTINGS");
  const goTimer = () => setView("TIMER")

</script>

<SettingsBtn cb={isSettings ? goTimer : goSettings}>
  <GearIcon fill={$light}/>
</SettingsBtn>
