import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",  // binds to your machine
    port: 5173          // preferred port; will auto-switch if busy
    // strictPort is removed, so Vite can pick the next free port if needed
  }
});
