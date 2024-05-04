// esbuild.config.ts
import { build } from "esbuild"
import alias from "esbuild-plugin-alias"

build({
  entryPoints: ["src/app.ts"],
  outfile: "dist/app.js",
  platform: "node",
  target: "esnext",
  format: "esm",
  bundle: true,
  minify: true,
  loader: {
    ".ts": "ts",
  },
  plugins: [
    alias({
      "@": "src",
    }),
  ],
})