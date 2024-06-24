<script lang="ts">
  import AddListBtn from "./AddListBtn.svelte"


  // let { taskLists, dispatch } = useTaskListPickerStore((state) => state)
  // let select = (id: string) => () => (dispatch("select", id), swap())
  // let del = (id: string) => () => dispatch("delete", {id, changes: null})
  let tasklists: any[] = [];

</script>

<div class="pickerView dark-background fadeIn">
  {#each tasklists as list}
    <!-- <PickerCard name={list.name} select={list.id} del={del(tasklist.id)} /> -->
  {/each}
    <AddListBtn/>
</div>

<style>
  
.pickerView {
  border-radius: 10px;
  text-align: center;
  max-width: 465px;
  margin-left: 24px;
  margin-top: 25px;
}
</style>