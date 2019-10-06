/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

export default ({ pageContext, ...props }) => {
  const decks = pageContext.decks.map(d => d.node);

  console.log(decks);

  return (
    <React.Fragment>
      <Helmet title="ReactJS Workshop | Tom Gallacher">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Mansalva&display=swap"
        />
        {/* <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        <link
          href="https://afeld.github.io/emoji-css/emoji.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        /> */}
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
        <Styled.h1>
          ReactJS Workshop
          <Styled.p sx={{ fontStyle: 'italic', fontSize: 3 }}>
            (2 days)
          </Styled.p>
        </Styled.h1>
        <div className="text italic">Tom Gallacher, Ph.D</div>

        <div
          sx={{
            bg: 'muted',
            display: 'flex',
            flexDirection: 'row',
            // flex: '1 0 auto',
            py: 4,
            px: 6,
            mt: 6,
          }}
        >
          <Styled.ul>
            {/* TODO: Control oder of this list.. */}
            {decks.reverse().map(deck => (
              <Styled.li key={deck.id}>
                <Styled.a
                  as={Link}
                  to={deck.slug}
                  title={deck.title || `Link to slides: ${deck.id}`}
                >
                  {deck.title || deck.slug}
                </Styled.a>
              </Styled.li>
            ))}
          </Styled.ul>
        </div>
      </div>
    </React.Fragment>
  );
};
