/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tb': '640px',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-100%)'},
        },
        marquee2: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0%)'},
        },
      },
      content: {
        githubIcon: 'url("/assets/icons/github.svg")',
        linkedInIcon: 'url("/assets/icons/linkedin.svg")',
        twitterIcon: 'url("/assets/icons/twitter.svg")',
        headshotStefCredit: 'url("/assets/stef-credit.svg")',
      },
      colors: {
        primaryDawn: '#2D6A4F',
        skillConfidenceDawn: '#52B788',

        idk: '#3B8178',

        backgroundDawn: '#F9F4F1',
      },
    },
    plugins: [],
  }
}
