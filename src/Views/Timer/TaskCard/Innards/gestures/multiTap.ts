'use strict';
import { DEFAULT_DELAY, getCenterOfTwoPoints, setPointerControls } from "./shared";

export type multiTapPointerEventDetail = {
  touchCount: number;
  target: EventTarget | null;
};
export type multiTapCustomEvent = CustomEvent<multiTapPointerEventDetail>;

export function multiTouch(node, parameters = { touchCount: 2, timeframe: DEFAULT_DELAY}) {
	const gestureName = 'multi';
  let pointers: number;
  let startTime: number;

  function onUp(activeEvents, event) {
    if (
      Date.now() - startTime < parameters.timeframe && pointers
    ){
			node.dispatchEvent(
				new CustomEvent(gestureName, {
					detail: { target: event.target, touchCount: pointers},
        })
      );
      pointers = 0;
		}
			
  }

  function onDown(activeEvents) {
    if (activeEvents.length >= parameters.touchCount) {
			pointers = activeEvents.length
			startTime = Date.now();
    }
  }

  return setPointerControls(gestureName, node, null, onDown, onUp);
}
																					 
