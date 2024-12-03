import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import babel from 'vite-plugin-babel';
import eslintPlugin from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 13000,
    hmr: {
      overlay: false,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    vue(),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: [
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-proposal-nullish-coalescing-operator',
        ],
      },
    }),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '~@': path.resolve(__dirname, './src/'),
    },
  },
});
