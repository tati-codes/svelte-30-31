import {
  DEFAULT_DELAY,
  DEFAULT_MIN_SWIPE_DISTANCE,
  DEFAULT_TOUCH_ACTION,
  setPointerControls,
  type BaseParams,
  type ParametersSwitch,
  type GestureReturnType,
} from './shared';

export type hSwipeParameters = {
  timeframe: number;
  minSwipeDistance: number;
  touchAction: string;
  swipingBuffer: number;
} & BaseParams;

export type hSwipePointerEventDetail = {
  direction: Direction;
  target: EventTarget | null;
  isSwiping: {
    delta: number
  } | null
};

type Direction = 'right' |'left' | null;

export type hSwipeCustomEvent = CustomEvent<hSwipePointerEventDetail>;

export function hswipe<R extends ParametersSwitch<hSwipeParameters> = undefined>(
  node: HTMLElement,
  inputParameters?: R
): GestureReturnType<hSwipeParameters, R> {
  const parameters: hSwipeParameters = {
    timeframe: DEFAULT_DELAY,
    minSwipeDistance: DEFAULT_MIN_SWIPE_DISTANCE,
    touchAction: DEFAULT_TOUCH_ACTION,
    composed: false,
    swipingBuffer: 0,
    ...inputParameters,
  };

  const gestureName = 'swipe';

  let startTime: number;
  let clientX: number;
  let clientY: number;
  let lastX: number;
  let target: EventTarget | null;

  function onDown(activeEvents: PointerEvent[], event: PointerEvent) {
    clientX = event.clientX;
    lastX = event.clientX;
    startTime = Date.now();
    if (activeEvents.length === 1) {
      target = event.target;
    }
  }

  function onMove(activeEvents: PointerEvent[], event: PointerEvent) {
    let x =  event.clientX - clientX;
    const absX = Math.abs(x);
    if (Math.abs(lastX - x) < parameters.swipingBuffer) return true;
    if (absX > parameters.swipingBuffer) {
      let direction: Direction =  lastX < x ? 'right' : 'left';
      console.log(`x: ${x}, lastX: ${lastX}`)      
      node.dispatchEvent(
        new CustomEvent<hSwipePointerEventDetail>("swipe", {
          detail: { direction, target, isSwiping:{delta: x} },
        })
      );
    } 
    lastX = x;

    return true;
  }

  function onUp(activeEvents: PointerEvent[], event: PointerEvent) {
    if (
      event.type === 'pointerup' &&
      activeEvents.length === 0 &&
      Date.now() - startTime < parameters.timeframe
    ) {
      const x = event.clientX - clientX;
      const absX = Math.abs(x);

      let direction: Direction = null;
      if (absX > parameters.minSwipeDistance) {
        // horizontal (by *2 we eliminate diagonal movements)
        direction = x > 0 ? 'right' : 'left';
      }
      if (direction) {
        node.dispatchEvent(
          new CustomEvent<hSwipePointerEventDetail>(gestureName, {
            detail: { direction, target, isSwiping : null},
          })
        );
      }
    }
  }

  if (parameters.composed) {
    return { onMove, onDown, onUp } as GestureReturnType<
      hSwipeParameters,
      R
    >;
  }

  return setPointerControls(
    gestureName,
    node,
    onMove,
    onDown,
    onUp,
    parameters.touchAction
  ) as GestureReturnType<hSwipeParameters, R>;
}
