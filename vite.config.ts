import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { visualizer } from 'rollup-plugin-visualizer';
import eslint from 'vite-plugin-eslint'

import { fileURLToPath } from 'url'
import * as path from 'path'
import * as fs from 'fs';


export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const enableHttps = fs.existsSync('/certs/localhost.key');

  return {
    plugins: [
      react(),
      visualizer(),
      legacy({
        targets: ['defaults', 'not IE 11']
      })
    ],
    base: command === 'serve' ? '/dist/' : '',
    define: {
      __DEV__: mode === 'development',
      __APP_INSIGHTS__: JSON.stringify(env.APP_INSIGHTS_KEY),
    },
    esbuild: {
      drop: ['console', 'debugger'],
    },
    resolve: {
      alias: {
        'hooks': path.resolve(__dirname, 'src/hooks'),
        'services': path.resolve(__dirname, 'src/services'),
        'components': path.resolve(__dirname, 'src/components'),
        'test': path.resolve(__dirname, 'src/test'),
      },
    },
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      }
    },
    build: {
      rollupOptions: {
        input: {
          Settings: fileURLToPath(new URL('./Settings.html', import.meta.url)),
          FormPage: fileURLToPath(new URL('./FormPage.html', import.meta.url)),
          FormGroup: fileURLToPath(new URL('./FormGroup.html', import.meta.url)),
          AddDocumentDialog: fileURLToPath(new URL('./AddDocumentDialog.html', import.meta.url)),
        }
      }
    },
    server: {
      port: 3000,
      strictPort: true,
      https: enableHttps ? {
        key: fs.readFileSync('/certs/localhost.key'),
        cert: fs.readFileSync('/certs/localhost.pem'),
        requestCert: false,
      } : undefined,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      reporters: ['default', 'junit'],
      outputFile: './test-results.xml',
      deps: {
        inline: [
          'azure-devops-ui',
        ]
      },
      coverage: {
        //reportDir: './coverage',
        reporter: 'cobertura',
        threshold: {
          global: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100,
          }
        }
      }
    },
  }
})
