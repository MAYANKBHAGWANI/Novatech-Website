import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config: the React plugin lets us write JSX.
export default defineConfig({
  plugins: [react()],
});
