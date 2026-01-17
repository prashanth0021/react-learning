import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  server: {
    port: 3000
  },

  plugins: [
    pluginReact(),

    pluginModuleFederation({
      name: "shell",

      remotes: {
        mfe1: 'mfe1@http://localhost:3001/mf-manifest.json',
        mfe2: 'mfe2@http://localhost:3002/mf-manifest.json',
        shared_ui:'shared_ui@http://localhost:3003/mf-manifest.json'
        
      },
      shared: {
        react: {
          singleton: true,
          eager: true
        },
        "react-dom": {
          singleton: true,
          eager: true
        }
      }
    })
  ]
});
