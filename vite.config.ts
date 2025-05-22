import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import fs from 'node:fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-component-json',
      writeBundle() {
        const componentJson = {
          style: 'default',
          typescript: true,
          tailwind: {
            config: 'tailwind.config.js',
            css: 'src/index.css',
            baseColor: 'slate',
            cssVariables: true,
          },
          aliases: {
            components: './src/components',
            utils: './src/lib/utils',
          },
          components: [
            {
              name: 'rainbow-box',
              type: 'components:ui',
              files: ['components/RainbowBox/RainbowBox.tsx'],
              dependencies: [],
            }
          ]
        };

        if (!fs.existsSync('dist/assets')) {
          fs.mkdirSync('dist/assets', { recursive: true });
        }

        fs.writeFileSync(
          'dist/assets/components.json',
          JSON.stringify(componentJson, null, 2)
        );
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});