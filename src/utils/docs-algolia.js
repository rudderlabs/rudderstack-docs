const indexName = process.env.GATSBY_ALGOLIA_INDEX;
const docsQuery = `{
    docs: allMdx {
      edges {
        node {
          id
          frontmatter {
            aliases
            title
            tags
          }
          headings(depth: h2) {
            value
          }
          fields {
            slug
          }
          tableOfContents(maxDepth: 1)
          excerpt(pruneLength: 200)
        }
      }
    }
  }`;
function pageToAlgoliaRecord({
  node: { id, frontmatter, headings, fields, tableOfContents, excerpt },
}) {
  return {
    objectID: id,
    title: frontmatter.title,
    slug: fields.slug,
    tableOfContents,
    excerpt,
    tags: frontmatter.tags,
    alias: frontmatter.aliases,
    headings,
    // SectionTitle: tableOfContents.items[0].title
    SectionTitle: tableOfContents.items[0].title, // we should use frontmatter title instead
  };
}
const queries = [
  {
    query: docsQuery,
    transformer: ({ data }) => data.docs.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];
module.exports = queries;
