module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        open: ['Open Sans', 'sans-serif'],
        nuno: ['Nunito', 'sans-serif'],
        pops: ['Poppins', 'sans-serif'],
      },
      colors: {
        cgw: '#E5E5E5',
        cdgw: '#B3B3B3',
        dgbg: '#141414',
        dgbgd: '#010511',
        tlg: '#E5E5E522',
        trs: '#be1212e0',
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom, #25252500, #24242411, #23232322, #22222244, #21212144, #20202044, #19191999, #181818ea, #171717ec, #161616ef, #151515fe, #141414);',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
}
