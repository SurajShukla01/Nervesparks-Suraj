import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    rollupOptions: {
      external: ["flowbite-svelte-icons"],
    },
  },
});
// vite.config.js
// export default {
// 	build: {
// 	  rollupOptions: {
// 	    external: ['flowbite-svelte-icons']
// 	  }
// 	}
//       }
