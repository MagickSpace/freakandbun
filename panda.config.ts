import { defineConfig } from "@pandacss/dev";


export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],
  exclude: [],
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          primary: {
            DEFAULT: {
              value: {
                // Light mode
                base: '{colors.grayscale.900}',
                // Dark mode
                _dark: '{colors.grayscale.50}',
              },
            },
          },
        },
      },
      recipes: {},
      slotRecipes: {},
    },
  },
  presets: ['@shadow-panda/preset'],
  jsxFramework: 'react',
  emitPackage: true,
  outdir: '@shadow-panda/styled-system',
});
