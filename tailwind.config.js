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
        'azo':["Azo Sans Uber W01 Regular"],
        'Montserrat':["'Montserrat', sans-serif "],
      },
      animation:{
        'bright': ' bright 3s infinite cubic-bezier(0.19, 1, 0.22, 1)',
      },
      keyframes:{
        bright:{
          '0%' :{right : '0%'},
          '100%' :{right: '150%'}
        }
      },
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
        DEFAULT:'12px',
        sm:'14px',
        xl:'0'
      }
    }
  },
  plugins: [],
}
