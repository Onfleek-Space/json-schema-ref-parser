import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["lib/index.ts"],
  format: ["cjs", "esm", "iife"], // Build for commonJS and ESmodules
  outDir: "dist",
  dts: true, // Generate declaration file (.d.ts)
  splitting: false,
  shims: true,
  sourcemap: "inline",
  clean: true,
  minify: true,
  target: [
    "chrome88",
    "deno1",
    "edge88",
    "es6",
    "esnext",
    "firefox88",
    // "ie11",
    "ios13",
    "node15",
    "opera74",
    // "rhino7",
    "safari12",
  ]
});
