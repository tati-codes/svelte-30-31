import { readable, writable, type Writable, type Readable, get, derived } from "svelte/store";

export const wakeLockSupported: Readable<boolean> = readable('wakeLock' in window.navigator === true);
export let userAllowedWakeLock: Writable<boolean> = writable(true)
export let sentinel: Writable<WakeLockSentinel | null> = writable(null)

export const toggleWakeLock = () => userAllowedWakeLock.update($lock => !$lock)

export const requestWakeLock = async () => {
  if (!get(wakeLockSupported) || !userAllowedWakeLock) return;
  try {
    let wakelock = await window.navigator.wakeLock.request('screen');
    sentinel.set(wakelock)
  } catch (err) {
    console.error(err)
  }
}

export const turnLockOff = () => sentinel.update($sentinel => {
  if ($sentinel !== null) {
    $sentinel.release()
    .then(() => {
      $sentinel = null;
    })
  }
  return $sentinel;
})

userAllowedWakeLock.subscribe($allowed => {
  if ($allowed) requestWakeLock()
  else turnLockOff()
})

const handleVisibilityChange = () => {
  if (get(wakeLockSupported) && get(sentinel) !== null && document.visibilityState === 'visible') {
    requestWakeLock();
  }
}

const reacquire = derived(userAllowedWakeLock, $allowed => {
  if ($allowed) {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  } else {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  }
})