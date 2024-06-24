<script lang="ts">
  // {editing ? <EditName def={label} toggle={toggleEditing} change={change} color={color} /> : }
  // class={`light-gray-color cT`}
  const label = "dummy"
</script>

<div class="tName medium-background bgT fadeIn" >
  <span> {label}</span>
</div>

<style>
.cT {
  color: transparent;
  background-color: transparent;
  transition: background-color 0.325s linear;
  transition: color 0.325s linear;
}


.tName {
  height: 80px;
  width: 262px;
  padding-right: 1%;
  padding-left: 1%;
  font-size: 3rem;
  margin-right: 1%;
  user-select: none;
}

.bgT {
  background-color: transparent;
  transition: background-color 0.325s linear;
}
</style>