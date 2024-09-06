<script>
  import { medium,bg } from "../Store/color"

  /*
1. long press to edit task
2. swipe left to place a task at the bottom of the list
3. swipe right to delete a task
4. two finger tap to send a task to the top of the list
5. three finger tap to copy a task
6. drag a task by the :: handle to reorder the list 
*/
</script>
  <h1>Gestures</h1>
  <div class="inner">
    <ol type="1">
      <li><u>long press</u> to <u>edit</u> a task</li>
      <li><u>swipe left</u> to send a task to the <u>bottom</u></li>
      <li><u>swipe right</u> to <b>delete</b> a task</li>
      <li><u> two finger tap</u>  to send a task to the <u> top</u> </li>
      <li><u> three finger tap</u>  to <u> copy</u>  a task</li>
      <li><u> drag</u>  a task by <u> the ⋮⋮ handle</u>  to reorder</li>
    </ol>
  </div>


<style>
  b{
    color:red;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }
  .modal {
  border: 1px solid white;
  border-radius: 10px;
  text-align: center;
  margin-top: 25px;
  padding-top: 25px;
  display:flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 25px;
  position: absolute;
  width:100%;
  z-index: 2;
  }
  .inner {
    text-align: left;
    width: 75%;
  font-size: 30px;
    margin: auto;
  }
</style>