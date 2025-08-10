import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/pulseui-base/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pulse UI Base design tokens will be available as CSS custom properties
        // These can be extended here if needed
      },
      spacing: {
        // Pulse UI Base spacing tokens
      },
      borderRadius: {
        // Pulse UI Base radius tokens
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  // Ensure Pulse UI Base styles take precedence
  important: true,
}
export default config
