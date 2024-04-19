/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line ts/no-var-requires, ts/no-require-imports
const { createThemes } = require('tw-colors')

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    'prettier-plugin-tailwindcss',
    createThemes({
      black: {
        'base-100': '#1d232a',
        'base-200': '#191e24',
        'secondary': '#7480ff',
        'primary': '#ff52d9',
        'accent': '#00cdb7',
        'neutral': '#2a323c',
        'success': '#00a96e',
        'warning': '#ffbe00',
        'error': '#ff5861',
        'feature-text': '#ffffff',
        'text': '#a6adbb',
      },
    }),
  ],
}
