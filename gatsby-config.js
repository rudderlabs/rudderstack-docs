require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: `/docs`,
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  siteMetadata: {
    title: `Rudderstack`,
    description: `RudderStack is the easiest way to stream data from your website or warehouse. With RudderStack, you can easily collect customer data from every platform.`,
    author: `@Rudderstack`,
    siteUrl: 'https://www.rudderstack.com',
    siteTitle: 'RudderStack',
    defaultTitle: 'RudderStack Docs',
    siteTitleShort: 'RudderStack',
    siteAuthor: 'RudderStack',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://rudderstack.com', 'https://localhost:8000'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
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
    ...(process.env.GATSBY_SANITY_PROJECTID &&
    process.env.RS_PRODUCTION_WRITE_KEY
      ? [
          {
            resolve: `gatsby-source-sanity`,
            options: {
              projectId: process.env.GATSBY_SANITY_PROJECTID,
              dataset: process.env.GATSBY_SANITY_DATASET,
              token: process.env.GATSBY_SANITY_TOKEN,
              graphqlTag: 'default',
            },
          },
          {
            resolve: `gatsby-plugin-rudderstack`,
            options: {
              prodKey: process.env.RS_PRODUCTION_WRITE_KEY,
              loadType: 'defer',
              trackPage: false,
              loadAsync: true,
              delayLoad: true,
              delayLoadTime: 1000,
              useNewSDK: true,
              sdkURL: 'https://cdn.rudderlabs.com/v1.1/rudder-analytics.min.js',
              dataPlaneUrl: `https://rudderstack-dataplane.rudderstack.com`,
            },
          },
        ]
      : []),
    `gatsby-transformer-csv`,
    'gatsby-plugin-use-query-params',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: process.env.RS_SITE_URL,
      },
    },
    {
      resolve: '@rocketseat/gatsby-theme-docs',
      options: {
        withMdx: false,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              elements: [`h2`, `h3`, `h4`],
            },
          },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
        icons: [],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemaps`,
        resolveSiteUrl: () => 'https://www.rudderstack.com',
        query: `
          {
            allMdx {
              nodes {
                slug
              }
            }
          }
        `,
        resolvePages: ({ allMdx: { nodes: allMdxPages } }) => {
          return allMdxPages.map(page => {
            let path = `/${page.slug}`
            if (!path.endsWith('/')) path += '/'
            return { path }
          })
        },
        serialize: ({ path }) => ({
          url: path,
          changefreq: 'daily',
          priority: 0.7,
        }),
      },
    },
    ...(process.env.RS_GATSBY_ALGOLIA_APIKEY
      ? [
          {
            resolve: `gatsby-plugin-algolia`,
            options: {
              appId: process.env.GATSBY_ALGOLIA_APP_ID,
              apiKey: process.env.RS_GATSBY_ALGOLIA_APIKEY,
              indexName:
                process.env.GATSBY_ALGOLIA_INDEX_PREFIX + '_gatsby_docs_v2',
              queries: require('./src/utils/docs-algolia'),
              enablePartialUpdates: true,
              matchFields: [
                'objectID',
                'title',
                'aliases',
                'slug',
                'headings',
                'excerpt',
              ],
            },
          },
        ]
      : []),
  ],
}
