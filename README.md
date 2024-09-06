# TaTimer

Timer inspired by the old 30/30 timer app. Without this timeboxing/pomodoro/time-tracker app I wouldn't have gotten through college because of my undiagnosed ADHD at the time, so I recreated it as an homage and for my own personal use (it easily quadruples my output per measure of effort).

This was made with Svelte + Typescript, vite, and specific features were implemented with moment, svelte-dnd-action and worker-timers. The first version of this was made with React, but I chose to rewrite because of the developer ergonomics of Svelte.

## How to install/use

If you want to build it yourself, just clone the repo, run ```npm install && npm run build`` then serve the /dist folder (eg. ```npx serve /dist``` ).

Or you can go to https://tati.codes/timer/

## What's New!
  - Svelte
  - New Feature: Drag and drop tasks to reorder them!
  - New feature: responsive<sup>sort of</sup> design now makes it easier to use on phone screens!
  - New feature: PWA / Add To Home functionality
  - New feature: native notifications for desktop + android. Unfortunately, it didn't work in iOS and I'm a little frustrated with debugging/coding specifically for the apple ecosystem... especially since my phone is kinda dying so I'm swapping to an android (with a headphone jack!! wow) 
  - New feature: low graphics mode for older devices.
  - New feature: gesture support. (close to the original app)
  - New Feature: It's just prettier now :)
  - New Feature: Screen WakeLock toggle, so you can leave the timer open without worrying about your screen going off. Not available specifically on iOS PWA. It does work in safari, though.
  - New Feature: Keyboard Navigation!
    - FIXME: Tab behaviour in the Task Edit screen does not follow ARIA standards yet
  - Working Obsidian plugin version.
  - Warning IOS **⚠** : 
    - Because of iOS limitations, the iOS PWA version needs you to tap the checkmark at the top of the timer **once** before using so it can actually play the "Task Done" sounds. 
    - "TaskList cleared" sound not available in iOS. 