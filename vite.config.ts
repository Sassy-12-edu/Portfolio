import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    // Optimize bundle size and code splitting
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        unused: true,
        passes: 2
      },
      mangle: true,
      format: {
        comments: false
      }
    },
    // Code splitting configuration
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          gsap: ['gsap'],
          'react-vendor': ['react', 'react-dom'],
        }
      }
    },
    // Performance optimizations
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false,
    brotliSize: true,
  },
  // Optimization hints
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production')
  }
})
