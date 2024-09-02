/**
 *  https://stackoverflow.com/a/68785061
 *  conditionalSetter adition by me
 */

import type { Updater, Writable } from 'svelte/store';
import { writable, get } from 'svelte/store'
//this is mine

export interface PersistentWritable<T> extends Writable<T>{
  /**
	 * Save the current state of the store to localStorage.
	 */
	persist(from?: any): void;
  update(this: void, updater: Updater<T>, persist?: boolean): void
} 
/**
 * https://stackoverflow.com/a/76039946param obj 
 */

function addProp<T>(
  obj: Writable<T>,
  func: PersistentWritable<T>["persist"]
): asserts obj is PersistentWritable<T> {
  Object.assign(obj, { persist: func });
}

export const storage = <T>(
  key: string, 
  initValue: T, 
  conditionalSetter: (val: T) => boolean = (val) => true,
  sanitizer: Updater<T> = (t) => t,
): PersistentWritable<T> => {
    const store = writable(initValue);

    const storedValueStr = localStorage.getItem(key);
    if (storedValueStr != null) {
      // console.log("loading from local")
      store.set(sanitizer(JSON.parse(storedValueStr)));
    }
    
    let persist = (from: any = "") => {
      // console.log("persisting from", from);
      localStorage.setItem(key, JSON.stringify(get(store)))
    }
    
    addProp(store, persist)
    store.update = (updater, persist = false) => {
      store.set(updater(get(store)));
      if (persist) store.persist();
    }
    // FIXME still not working. maybe we need to hydrate on document.hidden changing. 
    // store.subscribe((val) => {
    //     if ([null, undefined].includes(val)) {
    //         localStorage.removeItem(key)
    //     } else if (conditionalSetter(val)){
    //       console.log("Here")
    //         localStorage.setItem(key, JSON.stringify(PostHydrationCallback(val)))
    //     }
    // })

    // store.update = newfunc;
    // This is supposed to sync tabs but that kinda breaks the timer and the dnd-action thing

    // window.addEventListener('storage', () => {
    //   const storedValueStr = localStorage.getItem(key);
    //   if (storedValueStr == null) return;
    //   if (storedValueStr !== JSON.stringify(get(store))) { 
    //     console.log("stores diverge: ", storedValueStr !== JSON.stringify(get(store)))
    //     let newStore = JSON.parse(storedValueStr)
    //     store.set(sanitizer(newStore));
    //   }
    // });

    addEventListener("visibilitychange", (event) => {
      if (document.hidden) {
      } else if (conditionalSetter(get(store))) {
        const storedValueStr = localStorage.getItem(key);
        if (storedValueStr == null) return;
        if (storedValueStr !== JSON.stringify(get(store))) { 
          let newStore = JSON.parse(storedValueStr)
          store.set(sanitizer(newStore));
        }
      }
    });

    // addEventListener("storage", (event) => {
    //   if (document.hidden) { 
    //   } else if (conditionalSetter(get(store))) {
    //     const storedValueStr = localStorage.getItem(key);
    //     if (storedValueStr == null) return;
    //     if (storedValueStr !== JSON.stringify(get(store))) { 
    //       let newStore = JSON.parse(storedValueStr)
    //       store.set(sanitizer(newStore));
    //     }
    //   }
    // });

    return store;
}
