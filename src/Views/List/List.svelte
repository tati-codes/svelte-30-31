<script lang="ts">
  import { dark, bg, medium } from "../../Store/color"
  import { tasklists } from "../../Store/rootStore"
  import AddListBtn from "./AddListBtn.svelte"
  import PickerCard from "./PickerCard.svelte"
  import TopBarTaskListPicker from "./TopBarTaskListPicker.svelte"
  // let { taskLists, dispatch } = useTaskListPickerStore((state) => state)
  // let select = (id: string) => () => (dispatch("select", id), swap())
  // let del = (id: string) => () => dispatch("delete", {id, changes: null})
  
</script>

<TopBarTaskListPicker/>
<div class="pickerView dark-background fadeIn"  style={bg($medium)}>
  {#each $tasklists as list, i}
    <PickerCard name={list.name} id={list.id} />
  {/each}
    <AddListBtn/>
</div>

<style>
.pickerView {
  border-radius: 10px;
  text-align: center;
  margin-left: 24px;
  margin-top: 25px;
  padding-top: 25px;
  display:flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 25px;
}

:global(.pickerView > :last-child) {
  margin: auto;

}

</style>