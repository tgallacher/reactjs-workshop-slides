import React from 'react';
import Prism from '@theme-ui/prism';
import {
  Head,
  Appear,
  Notes,
  FullScreenCode,
  Image as BgSlideImage,
} from 'gatsby-theme-mdx-deck';

import ReactSpinner from '../components/SpinReactLogo.jsx';
import Callout from '../components/Callout.jsx';

export default {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
  //
  // MDX Deck: Aliases
  //
  Head,
  Appear,
  Notes,
  FullScreenCode,
  BgSlideImage,
  //
  // Shortcodes
  //
  ReactSpinner,
  Callout,
};
