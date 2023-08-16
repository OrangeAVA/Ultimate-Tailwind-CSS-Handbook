/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      animation : {
          'spin-slow': 'slow 4s linear infinite',
          'spin-slow-reverse': 'fast 4s linear infinite',
          pendulam:'revolve 2s linear infinite',
          seconds:'slowspin 60s linear infinite',
          minutes:'slowspin 3600s linear infinite',
          slowspin : 'slowspin 10s linear infinite',
          slowspinreverse : 'slowspinreverse 10s linear infinite',
          move: 'move 8s ease-in-out infinite'

      },
      keyframes: {
          slow: {
            '100%': { transform: 'rotate(360deg)' },
          },
          fast: {
            '100%': { transform: 'rotate(-360deg)' },
          },
          revolve : {
            '0%, 100%' :  {
               transform: 'rotate(14deg)'
            },
            '50%': { 
               transform: 'rotate(-14deg)' 
               },
             },
          slowspin: {
                '100%' :  {
                    transform: 'rotate(360deg)'
              },
          },
          slowspin : {
            '0%': { 
              transform: 'rotate(0deg)', 
              background: '#99f6e4'
            },
            '50%': { 
              transform: 'rotate(180deg)',
              background: '#d4d4d4' 
            },
            '100%': { 
              transform: 'rotate(360deg)',
              background: '#99f6e4'
            },
          },
          slowspinreverse : {
            '0%': { 
              transform: 'rotate(360deg)',
              background: '#d4d4d4' 
            },
            '50%': { 
              transform: 'rotate(180deg)',
              background: '#99f6e4'
            },
            '100%': { 
              transform: 'rotate(0deg)',
              background: '#d4d4d4' 
            },
          },
          move : {
            '0%,100%': { 
              transform: 'translate(0%,0%)'
            },
            '20%': { 
              transform: 'translate(450%,200%)'
            },
            '40%': { 
             transform: 'translate(10%,250%)'
            },
            '60%': { 
             transform: 'translate(190%,20%)'
            },
            '80%': { 
             transform: 'translate(450%,450%)'
            },
          }
      }
                                      
    },
  },
  plugins: [],
}