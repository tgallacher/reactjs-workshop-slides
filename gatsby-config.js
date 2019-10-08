module.exports = {
  siteMetadata: {
    title: `ReactJS 2days Workshop`,
    description: `A 2 day hands-on workshop learning ReactJS.`,
    author: `@tgallacher`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    'gatsby-theme-mdx-deck',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `decks-static`,
        path: `${__dirname}/decks/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `reactjs-2day-workshop`,
        short_name: `reacjts-workshop`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/avatar-600x600.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
