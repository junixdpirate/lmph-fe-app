/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import houdini from 'houdini/vite'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
    resolve: {
        alias: {
          //$houdini: './$houdini',
          //$app : './node_modules/@sveltejs/kit/src/runtime/app'
          // Add other aliases as needed
        },
      },
  plugins: [
    houdini(),
    sveltekit(),
    //svelte({ hot: !process.env.VITEST }),
  ],
  test: {    	
    globals: true,
    //environment: 'node',
    include: ['./vitest/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
    
  }
})