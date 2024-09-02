<script lang="ts">
  import { setView } from "../../../Store/actions/root/setView"
  import { addTask } from "../../../Store/actions/taskList/add"
  import CoolAddButton from "../../../lib/Shared/CoolAddButton.svelte"
  import { Task } from "../../../Store/Task"
  import { setEditID } from "../../../Store/taskEdit"
  import { currentTaskList } from "../../../Store/rootStore"
  const addTaskHandler = () => {
    let newTask = new Task("New Task", 5)
    addTask(newTask)
    setEditID(newTask.id)
    setView("TASK_EDIT")
  }
  $: lastIndex = (($currentTaskList.tasks.length + 12) * 2)
</script>

<CoolAddButton ariaIndex={lastIndex} cb={addTaskHandler}/>

<style>

  .innerAdd{
    opacity: 70%;
  }
.taskCard {
    width: 391px;
    height: 105px;
    border-radius: 25px;
    text-align: center;
  }
  
  div.taskCard {
    border: 1px solid transparent;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
    transition: 0.27s filter linear;
    border: 1px solid darkslategrey;

  }
  :global(#addTask > svg) {
    margin-top: 6.5%;
    transition: 0.27s transform linear;

  }
  :global(#addTask:hover > svg) {
  transform: scale(1.2);
  }
  div.taskCard:hover {
    border-color: #646cff;
    filter: brightness(90%);
  }
  div.taskCard:focus,
  budiv.taskCard:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>
