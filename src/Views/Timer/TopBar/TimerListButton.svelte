<script>
  import FolderIcon from "../../../lib/Icons/icons/FolderIcon.svelte"
  import { setView } from "../../../Store/actions/root/setView"
  import { medium, bg, light } from "../../../Store/color";
  $: bgT = bg($medium);
  const goPicker = () => setView("PICKER");


</script>
<div class="settingsBtn" style={bgT} on:click={goPicker}>
  <FolderIcon fill={$light}/>
</div>

<style>
  .settingsBtn {
    background-color: transparent;
    transition: background-color 0.325s linear;
    height: 80px;
    border-radius:1rem;
  }

</style>