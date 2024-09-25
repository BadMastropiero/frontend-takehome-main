import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom', // Use jsdom for DOM simulation
        setupFiles: './src/tests/setup.ts', // This is where global setup (like jest-dom) goes
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});