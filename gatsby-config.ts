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

const paths = {
  // images: __dirname + path.sep + `static` + path.sep + `images` + path.sep,
  images: resolvePath(`${__dirname}\\static\\images\\`),
};

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: paths.images,
      },
    },
  ],
};
