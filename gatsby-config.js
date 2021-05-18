module.exports = {
  siteMetadata: {
    title: "交互设计与用户体验实验室",
    description: "次世代的交互设计与传统产品的数码化，以及全新的UX设计认识论",
    author: "bowei xiao"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID
        }
      }
    },
    // {
    //   resolve: "gatsby-plugin-sass",
    //   options: {
    //     data:  `@import "${__dirname}/src/components/layout/styles";`,
    //   }
    // }
  ],
};
