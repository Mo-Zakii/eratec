import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig, loadEnv } from "vite";

const requiredBuildEnv = [
  "VITE_SUPABASE_URL",
  "VITE_SUPABASE_PUBLISHABLE_KEY",
] as const;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  if (mode === "production") {
    const missing = requiredBuildEnv.filter((key) => !env[key]?.trim());
    if (missing.length > 0) {
      throw new Error(
        `Missing production build env: ${missing.join(", ")}. ` +
          "Set these in Coolify (Buildtime) before deploying."
      );
    }
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
