
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  server: {
    port: 3002,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },

  dev: {
    writeToDisk: true, // 🔥 REQUIRED for mf-manifest.json
  },

  output: {
    assetPrefix: "http://localhost:3002/", // ✅ must match mfe2 port
  },

  plugins: [
    pluginReact(),

    pluginModuleFederation({
      name: "mfe2",
      exposes: {
        "./App": "./src/App",
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
