import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  base: '/rest-countries/',
  plugins: [
    viteTsconfigPaths(),
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            { displayName: true, fileName: false },
          ],
        ],
      },
    }),
  ],
});
