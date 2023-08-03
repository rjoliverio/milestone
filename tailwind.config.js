/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary-linear-gradient': 'linear-gradient(to right, #954EE2, #D745EF, #E4396A, #FF7F01)',
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
