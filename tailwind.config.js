/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'AzoSansUber':['Azo Sans Uber','sans-serif'],
        'Montserrat':['Montserrat','sans-serif']
      }
    },
    screens:{
      'xs':'400px',
      'sm':'576px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'8px',
        sm:'12px'
      }
    }
  },
  plugins: [],
}
