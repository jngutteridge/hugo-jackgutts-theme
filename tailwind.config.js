/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              fontWeight: 'normal'
            },
          },
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}