import { defineConfig, loadEnv, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync, readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['REACT_APP_', 'PUBLIC_URL']);
  const raw = env.PUBLIC_URL || pkg.homepage || '/';
  const path = raw === '.' ? './' : new URL(raw, 'http://localhost').pathname;
  const base = path.endsWith('/') ? path : `${path}/`;
  return {
    base,
    plugins: [
      {
        name: 'legacy-jsx-in-js',
        enforce: 'pre',
        async transform(code, id) {
          if (!/(?:src|\.storybook)[\\/].*\.js$/.test(id)) return null;
          return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'automatic' });
        },
      },
      react({ include: /\.(js|jsx)$/ }),
    ],
    optimizeDeps: { esbuildOptions: { loader: { '.js': 'jsx' } } },
    define: {
      'process.env.REACT_APP_TMDB_KEY': JSON.stringify(env.REACT_APP_TMDB_KEY ?? ''),
      'process.env.PUBLIC_URL': JSON.stringify(base === './' ? '.' : base.replace(/\/$/, '')),
    },
    server: { port: 3000 },
    preview: { port: 3000 },
    build: { outDir: 'build', emptyOutDir: true },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: existsSync('src/setupTests.js') ? ['src/setupTests.js'] : [],
    },
  };
});
