/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: "Portfolio",
    author: "Dennys Braga",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: "static",
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              include: ["featured"],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
              exclude: ["featured.skip"],
            },
          },
          `gatsby-plugin-react-helmet`,
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 750, linkImagesToOriginal: false },
          },
          `gatsby-plugin-image`,
        ],
      },
    },
  ],
};
