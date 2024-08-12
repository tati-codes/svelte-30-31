import {
  press,
  composedGesture,
  pinch,
} from './';
import { doubletap } from './doubleTap'
import { hswipe } from './hSwipe'
import { multiTouch } from './multiTap'


export const combined = (register) => {
  const pressFns = register(press, {
    triggerBeforeFinished: false,
    timeframe: 350,
  });
  const hswipeh = register(hswipe, { timeframe: 600, minSwipeDistance:60, swipingBuffer: 25 });
  const multis = register(multiTouch, {touchCount: 2, timeframe: 100})
  return (activeEvents, event) => {
    if (!pressFns.onMove(activeEvents, event))
      {
        hswipeh.onMove(activeEvents, event)
      }
  };
};