// import { yellow as theme } from 'mdx-deck/themes';
import prismStyle from '@theme-ui/prism/presets/prism-tomorrow.json';

export default {
  googleFont: 'https://fonts.googleapis.com/css?family=Mansalva&display=swap',
  colors: {
    text: '#000',
    background: '#FFF382',
    primary: 'rebeccapurple',
    secondary: '#80c',
    muted: '#f6f6ff',
  },
  fonts: {
    body: 'Mansalva, sans-serif',
    heading: 'inherit',
    monospace: '"Roboto Mono", Menlo, monospace',
    ui: 'system-ui, sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 86, 98],
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontWeights: {
    body: 500,
    heading: 700,
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
    },
    h1: {
      variant: 'text.heading',
      fontSize: 9,
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
      color: 'primary',
    },
    ul: {
      m: 0,
      p: 0,
      // listStyle: 'none',
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
    },
    code: {
      fontFamily: 'monospace',
      // ...prismStyle,
    },
    pre: {
      fontFamily: 'monospace',
      p: 3,
      ...prismStyle,
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
    },
  },
};
