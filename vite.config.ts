import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(),
    VitePWA({
      scope:"/timer2/",
      registerType: "autoUpdate",
      mode: "production",
      includeAssets: [
        "**/*",
        "mario.png",
        "svelte.svg",
        "manifest.json",
        "https://fonts.gstatic.com/s/oswald/v49/TK3_WkUHHAIjg75cFRf3bXL8LICs169vsUZiZQ.woff2",
        "https://tatiana.moe/assets/task_done.mp3",
        "https://tatiana.moe/assets/clear.mp3",
      ],
      manifest: {
        name: "TaTimer",
        short_name: "TaTimer",
        description: "Tati's Timer",
        theme_color: '#ffffff',
        icons: [
          { 
            src:"./mario.png",
            sizes:"500x500",
            type:"image/png",
            purpose:"any maskable"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*"],
      }
    })
  ],
})
