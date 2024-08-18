import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(),
    VitePWA({
      manifest: {
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
        runtimeCaching: [{
          urlPattern: () => true,
          handler: "CacheFirst" as const,
          options: {
            cacheName: "soundCache",
            cacheableResponse: {
              statuses: [0,200]
            }
          }
        }]
      }
    })
  ],
})
