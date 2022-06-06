// GraphQL query for getting data from mdx files.
// Any attribute added in frontmatter in the files can be accessed by adding the key in frontmatter block { title, aliases, ... }. eg. title, aliases
// mdxAST is a JSON Object containing all the elements of mdx file including headings, paragraphs, links, listItes, etc.
// This is being used to extract headings alongwith the starting and ending positions of the following excerpt, in order to show the correct excerpt per heading.
const docsQuery = `{
  docs: allMdx {
    edges {
      node {
        id
        frontmatter {
          title
          aliases
        }
        fields {
          slug
        }
        mdxAST
      }
    }
  }
}`

// This funtion extracts the headings from mdxAST object alongwith the starting and ending position of the following excerpt.
// Frontmatter title and mdxAST nodes are passed as input to this funtion.
// Output is headings array with heading value, start and end indices, and full excerpt of the mdx file.
function extractAttributes(title, children) {
  let headings = [{ value: title, index: children.find(x => x.type === "heading" && x.depth === 1) ? 0 : -1 }]

  // Adds heading & its index (in mdxAST object) to headings array.
  // Add number in this array to extract the required heading. eg. [1, 2] extracts h1 & h2. Adding 3 will extract h3 also
  children.filter(x => x.type === "heading" && [1, 2].includes(x.depth)).forEach(x => {
    let index = children.findIndex(c => c === x)
    if (x.depth > 1) headings.push({ value: x.children?.map(c => getAttributeValue(c)).join(x.type === "list" || x.type === "table" ? " " : ""), index })
  })

  let start = 0
  let excerpt = []

  // Iterate through the headings & extract the following excerpt. The start and end positions are calculated and assigned in headings array
  for (let i = 0; i < headings.length; i++) {
    let headingExcerpt = children.slice(headings[i].index + 1, i < headings.length - 1 ? headings[i + 1].index : children.length).map(x => x.children?.map(c => getAttributeValue(c)).join(x.type === "list" || x.type === "table" ? " " : ""))
    headingExcerpt = headingExcerpt.filter(x => x).join(" ")

    start += headings[i].value.length + 1
    headings[i].start = start

    start += headingExcerpt.length
    headings[i].end = start

    start += 1
    delete headings[i].index

    excerpt.push(headings[i].value)
    excerpt.push(headingExcerpt)
  }

  return { headings, excerpt: excerpt.join(" ") }
}

// A helper funtion for extracting the text from different html elements
function getAttributeValue(child) {
  switch (child.type) {
    case "text":
    case "inlineCode":
      return child.value
    default:
      return child.children?.map(x => getAttributeValue(x)).join(child.type === "tableRow" ? " " : "")
  }

}

// Map GraphQL query results before sending to Algolia
function pageToAlgoliaRecord({ node: { id, frontmatter, fields, mdxAST } }) {
  // Headings & excerpt extracted using the extractAttributes funtion above.
  let { headings, excerpt } = extractAttributes(frontmatter.title, mdxAST.children)

  // Any attribute added in frontmatter in the files can be mapped here like title, aliases
  return {
    objectID: id,
    title: frontmatter.title,
    aliases: frontmatter.aliases || [],
    slug: fields.slug,
    headings,
    excerpt
  }
}

const queries = [
  {
    query: docsQuery,
    transformer: ({ data }) => data.docs.edges.map(pageToAlgoliaRecord),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_docs_v2",
    settings: {}
  }
]

module.exports = queries
