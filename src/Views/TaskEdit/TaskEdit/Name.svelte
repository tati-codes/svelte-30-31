<script lang="ts">
  import { withAudio } from "../../../lib/Shared/withAudio"
import { editName } from "../../../Store/actions/taskEdit/editName"
import { bg, medium } from "../../../Store/color"
import { editingTask } from "../../../Store/taskEdit"
$: bsg = bg($medium);
let name = $editingTask?.name || ""
</script>

<input
  style={bsg}
  type="text"
  aria-label="change task name"
  tabindex="1"
  class="nameEditField fadeIn"
  bind:value={name}
  on:change={withAudio(() => editName(name))}
/>  

<style>
.nameEditField {
  background-color: transparent;
  font-family: "Oswald";
  border: none;
  appearance: none;
  height: none;
  width: 362px;
  padding-right: 1%;
  padding-left: 1%;
  font-size: 3rem;
  margin-right: 1%;
  transition: background-color 0.325s linear;
  }
</style>