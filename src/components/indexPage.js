import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function IndexPage() {
    const data = useStaticQuery (
        graphql`
  {
    allMdx {
        edges {
          node {
            slug
          }
        }
      }
  }
`
)

let pagescustom = data.allMdx.edges

  return (
<>
      {pagescustom.map(edge => (
        <Link to={`https://github.com/rudderlabs/rudderstack-docs/edit/main/docs/${edge.node.slug}.mdx`}>Edit This Page</Link>

  ))}
</>

  )
  
}