import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/Task_Tracker",
    plugins: [react()],
    base: "/TaskTracker/",
});
