/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        hovcor:'#327186',
        mclr:'#6A6B6C',
        btnbg:'#F5C362',
        btnclr:'#190D30',
        firstH:'#07222C',
        firstp:'#565A5B',
        btnbdr:'#309DC1',
        cntrBg:'#0166FF',
        txclr:'#06053A',
      },
      fontFamily:{
        pop:['Poppins']
      }
    },
  },
  plugins: [],
}
