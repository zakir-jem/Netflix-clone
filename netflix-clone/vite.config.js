import reactRefresh from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import svgrPlugin from "vite-plugin-svgr";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the output dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
  },

  envPrefix: "REACT_APP_",

  plugins: [
    reactRefresh(),
    envCompatible(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ... svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
});
