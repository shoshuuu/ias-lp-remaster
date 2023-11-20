/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

import path from "path";

function resolvePath(inputPath: string): string {
  return inputPath.split(path.sep).reduce((reducer, value) => {
    reducer += path.sep;
    return reducer.concat(value);
  });
}

//make sure to use only "/" slashes in yet unresolved paths
const paths = {
  images: resolvePath(`${__dirname}/static/images/`),
};

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    //defaults config
    //https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#customizing-the-default-options
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: "none",
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: paths.images,
      },
    },
  ],
};
