import { resolve } from "path";
import typescript from "rollup-plugin-typescript2";

export default [
  // scripts
  {
    input: resolve(__dirname, "scripts/import-open-api.ts"),
    output: {
      file: resolve(__dirname, "dist/import-open-api.js"),
      format: "cjs",
      name: "import-open-api",
    },
    plugins: [typescript()],
  },
  // react component
  {
    input: resolve(__dirname, "src/index.tsx"),
    output: {
      file: resolve(__dirname, "dist/index.js"),
      format: "umd",
      name: "react-rest",
      globals: ["React"],
    },
    plugins: [typescript()],
    external: ["react"],
  },
];
