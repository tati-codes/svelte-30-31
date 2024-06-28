<script lang="ts">
  import ColorStringChecker from "./Store/colorStringChecker.svelte"
  import Settings from "./Views/Settings/Settings.svelte"
  import TimerView from "./Views/Timer/TimerView.svelte"
  import List from "./Views/List/List.svelte"
  import {bg, light} from "./Store/color"
  import {currentView} from "./Store/rootStore"
  // "TIMER", "PICKER", "SETTINGS", "TASK_EDIT"
  // $: cssVarStyles = Object.entries(styles)
	// 	.map(([key, value]) => `--${key}:${value}`)
	// 	.join(';');
  // $: bsg = bg($light);
  // style={bsg}
</script>

<main class="bgt">
{#if $currentView == "TIMER"}
<List/>
{:else if $currentView == "PICKER"}
<TimerView/>
{:else if $currentView == "SETTINGS"}
  <Settings/>
<!-- {:else if $currentView == "TASK_EDIT"} -->
{/if}
</main>

<style>
.bgt{
  transition: background-color 0.325s linear;
}
</style>