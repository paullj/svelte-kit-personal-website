const colors = require('tailwindcss/colors');

// https://colorbox.io/?c0=%26p%24s%24%3D8%26p%24h%24st%24%3D192%26p%24h%24e%24%3D237%26p%24h%24c%24%3Deqo%26p%24sa%24st%24%3D0.01%26p%24sa%24e%24%3D0.38%26p%24sa%24r%24%3D1%26p%24sa%24c%24%3Deqo%26p%24b%24st%24%3D1%26p%24b%24e%24%3D0.09%26p%24b%24c%24%3Dl%26o%24n%24%3DNew+Color+%F0%9F%8C%9E%26o%24ro%24%3Dcw%26o%24ms%24%3D0%2C1
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          10: '#fcfeff',
          20: '#dae8ee',
          30: '#94a5bd',
          40: '#535a7a',
          50: '#0e0f17'
        },
        accent: {
          light: colors.indigo[500],
          dark: colors.indigo[300]
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'sup > a': {
              textDecorationLine: 'none',
              marginLeft: '0.1rem',
              '&:hover': {
                textDecorationLine: 'underline'
              }
            },
            blockquote: {
              fontWeight: 300,
              fontStyle: 'normal',
              '> p': {
                '&::before': {
                  content: 'none !important'
                },
                '&::after': {
                  content: 'none !important'
                }
              }
            },
            'ul > li.task-list-item': {
              listStyle: 'none'
            },
            'ul > li.task-list-item > input': {
              width: '1em',
              height: '1em',
              marginRight: '1em',
              marginLeft: '-1em'
            },
            'iframe.oembed-youtube': {
              margin: 'auto',
              width: '100%',
              height: 'auto',
              aspectRatio: 'var(--aspect-ratio, 1.78)'
            },
            '.footnotes': {
              '> ol': {
                '> li': {
                  '* a.data-footnote-backref': {
                    fontFamily: 'monospace',
                    marginLeft: '1rem',
                    textDecorationLine: 'none',
                    '&:hover': {
                      textDecorationLine: 'underline'
                    }
                  }
                }
              }
            },
            '.rehype-figure-container': {
              display: 'flex',
              flexDirection: 'row',
              '> *:not(:first-child)': {
                marginLeft: '1rem'
              }
            }
          }
        }
      })
    }
  },

  plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
