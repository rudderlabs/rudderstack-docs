const docsQuery = `{
    docs: allMdx {
      edges {
        node {
          slug
          headings(depth: h2) {
            value
          }
          tableOfContents(maxDepth: 1)
          excerpt(pruneLength: 50000)
        }
      }
    }
  
    allSanityDocsSearchAlias {
      edges {
        node {
          search_alias
          search_text
          id
        }
      }
    }
  }`;

function convertToSlug(pData) {
  return pData
    .toLowerCase()
    .replace(" ", "-")
    .replace(/ /g, "-")
    .replace(".", "")
    .replace("?", "")
    .replace(/[^\w-]+/g, "");
}

const queries = [
  {
    query: docsQuery,
    transformer: ({ data }) => {
      let tmpData = [];
      let ignorePaths = [
        "LICENSE",
        "contributing",
        ".github/pull_request_template",
      ];
      data.docs.edges.map((row) => {
        const parsedSlug = row.node.slug.replace("docs/", "");
        let tmpString = row.node.excerpt;
        let strPos =
          ignorePaths.indexOf(parsedSlug) === -1 &&
          row.node.tableOfContents !== {}
            ? tmpString.indexOf(row.node.tableOfContents.items[0].title) + row.node.tableOfContents.items[0].title.length + 1
            : "";
        let endPos = tmpString.indexOf(
          row.node.headings.length > 0 ? row.node.headings[0].value : ""
        );

        let content = tmpString.substring(strPos, endPos - 1);

        let tttmp = data.allSanityDocsSearchAlias.edges.find(
          (kk) =>
            kk.node.search_alias ===
            convertToSlug(
              ignorePaths.indexOf(parsedSlug) === -1
                ? row.node.tableOfContents.items[0].title
                : ignorePaths[ignorePaths.indexOf(parsedSlug)]
            )
        );

        let searchAlias = "";
        if (tttmp) {
          searchAlias = tttmp.node.search_text;
        }

        tmpString = tmpString.replace(content, "");
        tmpData.push({
          objectID:
            parsedSlug +
            "-" +
            convertToSlug(
              ignorePaths.indexOf(parsedSlug) === -1
                ? row.node.tableOfContents.items[0].title
                : "0"
            ),
          pageSlug: parsedSlug,
          pageTitle:
            ignorePaths.indexOf(parsedSlug) === -1
              ? row.node.tableOfContents.items[0].title
              : ignorePaths[ignorePaths.indexOf(parsedSlug)],
          sectionId: convertToSlug(
            ignorePaths.indexOf(parsedSlug) === -1
              ? row.node.tableOfContents.items[0].title
              : ignorePaths[ignorePaths.indexOf(parsedSlug)]
          ),
          SectionTitle: convertToSlug(
            ignorePaths.indexOf(parsedSlug) === -1
              ? row.node.tableOfContents.items[0].title
              : ignorePaths[ignorePaths.indexOf(parsedSlug)]
          ),
          sectionContent: content,
          searchAlias: searchAlias,
          idx: 1,
        });

        for (var i = 0; i <= row.node.headings.length - 1; i += 1) {
          strPos = 0;
          endPos = 0;
          content = "";

          strPos = tmpString.indexOf(row.node.headings[i].value) + row.node.headings[i].value.length + 1;

          endPos =
            i === row.node.headings.length - 1
              ? tmpString.length
              : tmpString.indexOf(row.node.headings[i + 1].value);

          content = tmpString.substring(strPos, endPos - 1);
          tmpString = tmpString.replace(content, "");

          let tttmp = data.allSanityDocsSearchAlias.edges.find(
            (kk) => kk.node.search_alias === row.node.headings[i].value
          );

          let searchAlias = "";
          if (tttmp) {
            searchAlias = tttmp.node.search_text;
          }

          tmpData.push({
            objectID:
              parsedSlug + "-" + convertToSlug(row.node.headings[i].value),
            pageSlug: parsedSlug,
            pageTitle:
              ignorePaths.indexOf(parsedSlug) === -1
                ? row.node.tableOfContents.items[0].title
                : ignorePaths[ignorePaths.indexOf(parsedSlug)],
            sectionId: convertToSlug(row.node.headings[i].value),
            SectionTitle: row.node.headings[i].value,
            sectionContent: content,
            searchAlias: searchAlias,
            idx: i + 2,
          });
        }
      });
      return tmpData;
    },
    indexName: process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_docs_heading_removed",
    settings: {},
  },
];

module.exports = queries;
