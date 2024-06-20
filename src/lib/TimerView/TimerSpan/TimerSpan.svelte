<script>
  import ClockIcon from "../../Icons/icons/ClockIcon.svelte"
</script>
<div class="topBar">
  <ClockIcon/>
  <div class="totalLength">
    01:20:00
  </div>
</div>
  <style>
  .totalLength {
  letter-spacing: -4px;
  font-weight: bolder;
  height: 80px;
  padding-top: 1px;
  padding-left: -2.5%;
  font-size: 3rem;
  transition: color 0.325s linear;
  color: black;
  user-select: none;
  }
  .topBar {
  display: flex;
  justify-content: left;
  margin-left: 25px;
  padding-top: 1%;
}
</style>