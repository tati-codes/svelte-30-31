<script lang="ts">
import { bg, medium } from "../../Store/color"
$: bsg = bg($medium);
</script>

<input
  style={bsg}
  type="text"
  class="nameEditField fadeIn"
  tabIndex="0"
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