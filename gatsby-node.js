if (!process.env.GATSBY_SANITY_TOKEN) {
  exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;
    const POST_NODE_TYPE = "SanitySiteSettings";
    const post = {
      _rawWebsiteScripts: ["test"]
    };

    createNode({
      ...post,
      id: createNodeId(`${POST_NODE_TYPE}`),
      parent: null,
      children: [],
      internal: {
        type: POST_NODE_TYPE,
        contentDigest: createContentDigest(post)
      }
    });
  };
}

exports.onPostBuild = () => {
  const fs = require("fs");

  /*
   * If sitemap exists in /public/sitemaps folder, move sitemap-0.xml
   * to root folder (/public) & rename to sitemap-docs.xml
   */
  if (fs.existsSync("./public/sitemaps/sitemap-0.xml")) {
    fs.renameSync(
      "./public/sitemaps/sitemap-0.xml",
      "./public/sitemap-docs.xml"
    );

    /* Remove the /public/sitemaps folder */
    fs.rmSync("./public/sitemaps", { recursive: true, force: true });
  }
};
