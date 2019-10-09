/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState, useEffect, useContext } from 'react'; // eslint-disable-line
import Prism from '@theme-ui/prism';
import {
  Appear,
  Notes,
  FullScreenCode,
  Image as BgSlideImage,
} from 'gatsby-theme-mdx-deck';
import styled from '@emotion/styled';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import prismStyle from '@theme-ui/prism/presets/prism-tomorrow.json';
import { Link } from 'gatsby';

import ReactSpinner from '../components/SpinReactLogo.jsx';

const StyledEditor = styled(LiveEditor)(prismStyle);

const Div = styled.div({
  'margin': '1em 0',
  '> span': {
    paddingRight: '1em',
  },
});

export default {
  Link,
  pre: ({ children }) => <>{children}</>,
  code: Prism,
  //
  // MDX Deck: Aliases
  //
  Appear,
  Notes,
  FullScreenCode,
  BgSlideImage,
  //
  // Shortcodes
  //
  ReactSpinner,
  Callout: ({ sx, ...props }) => (
    <div
      sx={{
        borderWidth: 0,
        borderLeftColor: 'secondary',
        borderLeftWidth: 6,
        borderStyle: 'solid',
        backgroundColor: 'muted',
        p: 4,
        mt: 4,
        fontWeight: 'bold',
        ...sx,
      }}
      {...props}
    />
  ),
  Emoji: ({ className, sx, ...props }) => (
    <div
      sx={{ mt: 4, fontSize: 6, ...sx }}
      className={'em '.concat(className)}
      {...props}
    />
  ),
  Div: ({ sx, ...props }) => <div sx={sx} {...props} />,
  ReactLive: ({ code, scope, ...props }) => (
    <LiveProvider
      code={code.trim()}
      scope={{
        useState,
        useEffect,
        useContext,
        Div,
        ...scope,
      }}
      noInline={true}
    >
      <StyledEditor />
      <LiveError />

      <Appear>
        <LivePreview />
      </Appear>
    </LiveProvider>
  ),
};
