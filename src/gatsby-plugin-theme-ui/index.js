// import { yellow as theme } from 'mdx-deck/themes';
import prismStyle from '@theme-ui/prism/presets/prism-tomorrow.json';

export default {
  colors: {
    // text: '#000',
    // background: '#fff',
    // primary: 'rebeccapurple',
    // secondary: '#80c',
    // muted: '##F6F6F6',
    text: '#222',
    background: 'hsl(10, 10%, 98%)',
    primary: 'hsl(0, 20%, 50%)',
    secondary: 'hsl(10, 60%, 50%)',
    highlight: 'hsl(10, 40%, 90%)',
    purple: 'hsl(250, 40%, 40%)',
    muted: 'hsl(10, 20%, 94%)',
    gray: 'hsl(10, 20%, 50%)',
  },
  fonts: {
    body: 'Raleway, sans-serif',
    heading: 'Montserrat, sans-serif',
    monospace: '"Roboto Mono", Menlo, monospace',
    ui: 'system-ui, sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 86, 98],
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    Slide: {
      fontFamily: 'body',
      fontSize: [4, 5],
      del: {
        'color': 'purple',
        // 'textDecorationStyle': 'wavy',
        '>code': {
          opacity: 0.5,
        },
      },
    },
    h1: {
      variant: 'text.heading',
      fontSize: 9,
      color: 'purple',
      mb: 6,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 7,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 6,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 4,
    },
    a: {
      color: 'purple',
      fontWeight: 'bold',
    },
    ul: {
      m: 0,
      p: 0,
    },
    li: {
      p: 0,
      m: 0,
      lineHeight: 1.25,
    },
    ol: {
      m: 0,
    },
    inlineCode: {
      fontFamily: 'monospace',
      bg: 'highlight',
      color: 'secondary',
      px: 1,
    },
    code: {
      fontFamily: 'monospace',
      // ...prismStyle,
    },
    pre: {
      fontFamily: 'monospace',
      ...prismStyle,
      p: 4,
      fontSize: 5,
      my: 4,
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      objectFit: 'cover',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      paddingRight: '.5em',
      paddingTop: '.25em',
      paddingBottom: '.25em',
      borderBottom: '1px solid',
      verticalAlign: 'top',
    },
    td: {
      textAlign: 'left',
      paddingRight: '.5em',
      paddingTop: '.25em',
      paddingBottom: '.25em',
      borderBottom: '1px solid',
      verticalAlign: 'top',
    },
    blockquote: {
      fontWeight: 'bold',
      borderWidth: 0,
      borderLeftColor: 'secondary',
      borderLeftWidth: 6,
      borderStyle: 'solid',
      bg: 'muted',
      p: 4,
      mt: 4,
    },
  },
};
