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
      cupcake: {
        bg: '#faf7f5',
        primary: '#f9ad81',
        secondary: '#fff580',
        neutral: '#9bfdce',
        accent: '#f2b3bd',
        accent2: '#fed7e9',
      },
      aqua: {
        bg: '#f0f9f4',
        primary: '#8faff2',
        secondary: '#74a7b2',
        neutral: '#7fccb6',
        accent: '#6feeb7',
        accent2: '#7cf9d6',
      },
      company: {
        bg: '#343840',
        primary: '#264d73',
        secondary: '#538cc6',
        neutral: '#dadbdd',
        accent: '#323232',
      },
      synthwave: {
        bg: '#29132e',
        primary: '#de004e',
        secondary: '#860029',
        neutral: '#f887ff',
        accent: '#321450',
      },
      retro: {
        bg: '#ffcc7f',
        primary: '#4e87ab',
        secondary: '#46688d',
        neutral: '#ee6461',
        accent: '#fda271',
      },
      halloween: {
        bg: '#000000',
        primary: '#8929bf',
        secondary: '#2bd011',
        neutral: '#fd7708',
        accent: '#fde500',
      },
      emerald: {
        bg: '#012d21',
        primary: '#50cc60',
        secondary: '#96ee89',
        neutral: '#08542f',
        accent: '#1d813e',
      },
      redPanda: {
        bg: '#fce7d2',
        primary: '#b13d14',
        secondary: '#db8758',
        neutral: '#340701',
        accent: '#9c1a04',
      },
    }),
  ],
}
