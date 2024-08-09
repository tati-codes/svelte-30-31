<script lang="ts">
  import { deleteList } from "../../Store/actions/root/deleteList"
  import { selectTasklist } from "../../Store/actions/root/selectTasklist"
  import { setView } from "../../Store/actions/root/setView"
  import type { deleteTask } from "../../Store/actions/taskEdit/deleteTask"
  import { dark, bg, light, colorp, combineStyles, medium } from "../../Store/color"
  import CloseIconWrapped from "../../lib/Icons/icons/CloseIconWrapped.svelte"

  import ListIcon from "../../lib/Icons/icons/ListIcon.svelte"
  import CloseIcon from "../Timer/TaskCard/taskCardIcons/CloseIcon.svelte"
  import DeleteButton from "./DeleteButton.svelte"
  import PickerLabel from "./PickerLabel.svelte"
  
  export let name = ""
  export let id: string = "";
  let select = () => { 
    selectTasklist(id)
    setView("TIMER")
  }
  let pollo = (e: Event) =>{
    deleteList(id)
    e.stopPropagation();
  }
  
</script>

<div style={combineStyles(bg($medium),`border: 2px solid ${$light};`)} class="taskListCard fillT" on:click={select} >
  <ListIcon/>
  <span style={colorp("white")}>{name}</span>
  <div class="iconWrap" on:click={pollo}>
    <CloseIconWrapped/>
  </div>
</div>

<style>

  
  .taskListCard {
    
    font-size: 1em;
    font-weight: 500;
    margin: auto;
    font-family: inherit;
    cursor: pointer;
    transition: 1s border-color linear;
    transition: 0.27s filter linear;
    display: flex;
    width: 400px;
    height: 105px;
    border-radius: 25px;
    text-align: center;
    display: flex;
    flex-direction: row;
  }
  :global(.taskListCard > .listIcon) {
    margin-top:7.5%;
    margin-left:10%;
    }  
    :global(.taskListCard > .iconWrap) {
    margin-top:6%;
    margin-right:10%;
    z-index: 1;
    }  

    .taskListCard > span {
      margin-top: 5%;
      font-size: 2rem;
      flex:3;
  }

  div.taskListCard:hover {
    animation: fadeinout 0.7s linear forwards;
    filter: brightness(90%);
  }

  :global(.taskListCard > div > .deleteIcon) {
    opacity: 30%;
    rotate: 0;
    stroke: white;
    transition: filter 0.325s linear, rotate 0.325s linear, opacity 1s linear;
  }
  :global(.taskListCard:hover > div > .deleteIcon) {
    /* animation: big 1s linear both; */
    rotate: 90deg;
    scale: 1.2;
    opacity: 1;
    transition: filter 0.325s linear, rotate 0.325s linear, opacity 1s linear;
  }

  :global(.deleteIcon:active) {
    filter:brightness(9%);
    transition: filter 0.325s linear, rotate 0.325s linear, opacity 1s linear;
  }
@keyframes big {
    100% { 
      rotate: 90deg;
      scale: 1.2;
      opacity: 1;
    }
  }

@keyframes fadeinout {
  100% { border: 2px solid transparent; }
}
@keyframes in {
  100% { opacity: 1; }
}
  div.taskListCard:focus,
  div.taskListCard:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>
