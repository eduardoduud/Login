/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        smallest: '0.625rem', //10px/
        smaller: '.688rem', //11px/
        small: '.75rem', //12px/
        medium: '.812rem', //13px/
        large: '.875rem', //14px/
        larger: '1rem', //16px/
        largest: '1.25rem' //20px/
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      padding: {
        'small': '5px',
        'medium': '10px',
        'large': '15px',
        'topmenu': '83.83px',
      },
      backgroundImage: {
        'login': "url('/src/assets/background.jpg')",
      }
    },
  },
  plugins: [],
}

