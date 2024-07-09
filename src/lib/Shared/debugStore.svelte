<script lang="ts">
  import { isPrimitive } from "./isPrimitive"
  export let obj, title;
  $: keys = Object.keys(obj)
  $: values = Object.values(obj)
</script>
<div>
  <h2>{title}</h2>
  {#each keys as key, i}
    {#if isPrimitive(values[i])}
      <p>
        <strong>{key}</strong>: {values[i]}
      </p>
    {/if}
  {/each}
</div>

<style>
  strong {
  font-weight: bolder;
}
  h2 {
    text-decoration:underline;
  }

  div {
  border-top: 1px dashed #aaa;
  padding: 0.5em 0.5em 0;
}

  div {
  padding: 5px;
  margin: 5px;
  border: 2px dashed mus;
}

  summary { 
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaa;
  margin-bottom: 0.5em;
}

</style>