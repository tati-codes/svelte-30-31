import { playClick } from "../../Store/actions/task/playAudio";

export const withAudio = (curried: Function) => {
  return (e: any) => {
      playClick()
      curried(e);
  }
}