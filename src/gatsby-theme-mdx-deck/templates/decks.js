/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import ReactIcon from '../../../decks/static/images/react-icon.svg';
import ReactSpinner from '../../components/SpinReactLogo';
import GithubLogo from '../../images/github-mark-120px-plus.png';
import TwitterLogo from '../../images/twitter_social_icon_circle_color.png';

// TODO: Control oder of this list..
const makeLinkToSlide = decks => props => {
  let title = decks.find(d => d.slug === props.slug);
  title = (title && title.title) || props.slug;

  return (
    <Styled.li>
      <Styled.a as={Link} to={props.slug} title={title}>
        {title}
      </Styled.a>
    </Styled.li>
  );
};

export default ({ pageContext, ...props }) => {
  const decks = pageContext.decks.map(d => d.node);
  const LinkToSlide = makeLinkToSlide(decks);

  return (
    <React.Fragment>
      <Helmet title="ReactJS Workshop | Tom Gallacher">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:900|Raleway:400,400i,700,700i&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div
        sx={{
          display: 'flex',
          flex: '1 0 auto',
          height: '100vh',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          bg: 'background',
          color: 'text',
          fontFamily: 'body',
        }}
      >
        <ReactSpinner width="512px" src={ReactIcon} />

        <Styled.h1>ReactJS Workshop</Styled.h1>
        <Styled.p sx={{ fontSize: 4, mt: -6 }}>Autumn 2019</Styled.p>
        <Styled.p sx={{ fontStyle: 'italic', fontSize: 4 }}>
          Tom Gallacher, Ph.D
        </Styled.p>

        <div sx={{ '>a': { mx: 2 } }}>
          <a href="https://github.com/tgallacher" title="Find me on Github">
            <img src={GithubLogo} alt="Github logo" width="48" />
          </a>
          <a
            href="https://twitter.com/tfgallacher"
            title="Follow my occasional ramblings on Twitter"
          >
            <img src={TwitterLogo} alt="Twitter logo" width="48" />
          </a>
        </div>

        <section
          sx={{
            bg: 'muted',
            display: 'flex',
            flexDirection: 'row',
            py: 4,
            px: 6,
            mt: 6,
          }}
        >
          <Styled.ul>
            {/* TODO: Control oder of this list.. */}
            {/* {decks.reverse().map(deck => (
              <Styled.li key={deck.id}>
                <Styled.a
                  as={Link}
                  to={deck.slug}
                  title={deck.title || `Link to slides: ${deck.id}`}
                >
                  {deck.title || deck.slug}
                </Styled.a>
              </Styled.li>
            ))} */}
            <LinkToSlide slug="/intro" />
            <LinkToSlide slug="/day-1" />
            <LinkToSlide slug="/day-2" />
            <LinkToSlide slug="/bonus-css-in-js" />
          </Styled.ul>
        </section>
      </div>
    </React.Fragment>
  );
};
