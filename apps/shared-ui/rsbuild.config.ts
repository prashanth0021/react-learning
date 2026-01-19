import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  server: {
    port: 3003,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },

  dev: {
    writeToDisk: true, 
  },

  output: {
    assetPrefix: "http://localhost:3003/", 
  },

  plugins: [
    pluginReact(),

    pluginModuleFederation({
      name: "shared_ui",
      exposes: {
        "./MenuItem": "./src/components/MenuItem",
        "./Sidebar": "./src/components/Sidebar",
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: false,
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: false,
        },
      },
    }),
  ],
});
