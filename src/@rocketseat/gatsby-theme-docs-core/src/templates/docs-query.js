import { graphql } from 'gatsby';
import DocsComponent from '@rocketseat/gatsby-theme-docs-core/src/components/Docs';

export default DocsComponent;

export const query = graphql`
  query($slug: String!) {
    mdx(slug: {eq: $slug}) {
      id
      frontmatter {
        title
        description
      }
      body
      headings {
        depth
        value
      }
    }
  }
`;