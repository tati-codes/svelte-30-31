import { playClick } from "../../Store/actions/task/playAudio";

export const withAudio = (curried: Function) => {
  return () => {
      playClick()
      curried();
  }
}