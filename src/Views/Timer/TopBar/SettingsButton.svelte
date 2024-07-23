<script>
  import GearIcon from "../../../lib/Icons/icons/GearIcon.svelte"
  import { setView } from "../../../Store/actions/root/setView"
  import { medium, bg, light } from "../../../Store/color";
  $: bgT = bg($medium);
  const goSettings = () => setView("SETTINGS");

</script>

<div class="settingsBtn" style={bgT} on:click={goSettings}>
  <GearIcon fill={$light}/>
</div>

<style>
.settingsBtn {
  background-color: transparent;
  transition: background-color 0.325s linear;
  height: 80px;
  border-radius: 0 0 1rem 1rem;
}
</style>