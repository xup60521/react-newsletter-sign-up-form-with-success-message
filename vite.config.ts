import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/react-newsletter-sign-up-form-with-success-message",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
