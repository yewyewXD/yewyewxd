import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        default: '#5e5e63',
        dot: '#bdbdc5',
        footer: '#707072',
        contentDark: '#323235',
        contentLighter: '#75757a',
      },
      backgroundColor: {
        default: '#f6f6f6',
        card: '#eceff1',
        footer: '#f1f1f1',
      },
      colors: {
        main: '#FFFFF0',
        primary: '#e9d78e',
        secondary: '#F3EDC8',
        lightGrey: '#f6f6f6',
        shadow: '#e6ebef',
      },
    },
  },
  plugins: [],
}
export default config
