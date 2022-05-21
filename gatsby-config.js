require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: `/docs`,
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: true,
    DEV_SSR: true,
    QUERY_ON_DEMAND: true,
    LAZY_IMAGES: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  siteMetadata: {
    title: `Rudderstack`,
    description: `RudderStack is the easiest way to stream data from your website or warehouse. With RudderStack, you can easily collect customer data from every platform.`,
    author: `@Rudderstack`,
    siteUrl: "https://www.rudderstack.com",
    siteTitle: "RudderStack",
    defaultTitle: "RudderStack Docs",
    siteTitleShort: "RudderStack",
    siteAuthor: "RudderStack",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://rudderstack.com", "https://localhost:8000"],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECTID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.GATSBY_SANITY_TOKEN,
        graphqlTag: "default",
      },
    },
    {
      resolve: `gatsby-plugin-rudderstack`,
      options: {
        prodKey: process.env.RS_PRODUCTION_WRITE_KEY,
        //devKey: process.env.RS_PRODUCTION_WRITE_KEY,
        //host: `https://rudderstack-dataplane.rudderstack.com`,
        loadType: "defer",
        trackPage: false,
        loadAsync: true,
        delayLoad: true,
        // trackPageDelay: 1000,
        delayLoadTime: 1000,
        useNewSDK: true,
        dataPlaneUrl: `https://rudderstack-dataplane.rudderstack.com`,
      },
    },
    `gatsby-transformer-csv`,
    "gatsby-plugin-use-query-params",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: process.env.RS_SITE_URL,
      },
    },
    {
      resolve: "@rocketseat/gatsby-theme-docs",
      options: {
        withMdx: false,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-embedder`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              withWebp: false,
              linkImagesToOriginal: false,
              srcSetBreakpoints: [960],
              breakpoints: [960],
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
        ],
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-images`],
      },
    },
    ...(process.env.RS_GATSBY_ALGOLIA_APIKEY
      ? [
          {
            resolve: `gatsby-plugin-algolia`,
            options: {
              appId: process.env.GATSBY_ALGOLIA_APP_ID,
              apiKey: process.env.RS_GATSBY_ALGOLIA_APIKEY,
              indexName: "pfd",
              queries: require("./src/utils/docs-algolia"),
              enablePartialUpdates: false,
              matchFields: [
                "pageSlug",
                "pageTitle",
                "title",
                "sectionTitle",
                "sectionId",
                "sectionContent",
                "searchAlias",
                "idx",
              ],
            },
          },
        ]
      : []),
  ],
};
