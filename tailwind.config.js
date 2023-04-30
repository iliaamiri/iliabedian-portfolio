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
      animation: {
        marquee: 'marquee 15s linear infinite',
        marqueeSlow: 'marquee 100s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
        marquee2Slow: 'marquee2 100s linear infinite',
        slideInFromRight: 'slideInFromRight 0.5s ease-in-out',
        slideOutToRight: 'slideOutToRight 0.5s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
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
        slideInFromRight: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0%)'},
        },
        slideOutToRight: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(100%)'},
        },
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        fadeOut: {
          '0%': {opacity: '1'},
          '100%': {opacity: '0'},
        }
      },
      content: {
        githubIcon: 'url("/assets/icons/github.svg")',
        linkedInIcon: 'url("/assets/icons/linkedin.svg")',
        twitterIcon: 'url("/assets/icons/twitter.svg")',
        headshotStefCredit: 'url("/assets/stef-credit.svg")',
        linesSvg: 'url("/assets/lines.svg")',
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
