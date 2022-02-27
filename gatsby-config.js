module.exports = {
  siteMetadata: {
      title: `new`,
    siteUrl: `http://peterj38.sg-host.com/`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://peterj38.sg-host.com/graphql"
    }
  }, "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};