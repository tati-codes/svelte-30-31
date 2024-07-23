<script lang="ts">
  import { changeName } from "../../../Store/actions/taskList/changeName"
  import { medium, bg, light, colorp, combineStyles } from "../../../Store/color";
  import { currentTaskList } from "../../../Store/rootStore"
  import { onEnter } from "../../../lib/Shared/onEnter"
  let editing = false;
  let toggleEditing = () => editing = !editing
    // {editing ? <EditName def={label} toggle={toggleEditing} change={change} color={color} /> : }
  // class={`light-gray-color cT`}
  // light-${color}-color
  let label = $currentTaskList.name
  const change = (e: Event) => {
    let input = e.target as HTMLInputElement;
    changeName(input.value.slice(0,12))
    console.log(input.value.slice(0,12))
  }
</script>

{#if editing}
<div style={bg($medium)} class="tName bgT fadeIn">
<input
type="text"
autofocus
bind:value={label}
on:change={change}
on:blur={toggleEditing}
on:keyup={() => onEnter(() => { changeName(label.slice(0,12)); toggleEditing(); })}
style={combineStyles(bg($medium), colorp($light))}
class={`taskListNameEditField `}
/>
</div>

{:else}
<div style={bg($medium)} class="tName bgT fadeIn" on:click={toggleEditing}>
  <span>{$currentTaskList.name}</span>
</div>
  {/if}
    
<style>
.cT {
  color: transparent;
  background-color: transparent;
  transition: background-color 0.325s linear;
  transition: color 0.325s linear;
}

.taskListNameEditField {
  background-color: transparent;
  border: none;
  font-family: "Oswald";
  appearance: none;
  font-size: 3rem;
  height: auto;
  height: 80%;
  width: 90%;
  /* padding-right: 1%;
  padding-left: 1%;
  margin-right: 1%;
  margin-left: 1%; */
  transition: background-color 0.325s linear;
}

.tName {
  height: 80px;
  width: 420px;

  padding-right: 1%;
  padding-left: 1%;
  font-size: 3rem;
  margin-right: 1%;
  margin-left: 1%;
  overflow: hidden;
  user-select: none;
}

.bgT {
  background-color: transparent;
  transition: background-color 0.325s linear;
}
</style>