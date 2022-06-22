import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function Sources({ category }) {
  const data = useStaticQuery(
    graphql`
      query {
        allSourcesYaml {
          edges {
            node {
              displayName
              link
              category
              type
            }
          }
        }
      }
    `,
  )

  let sources = data.allSourcesYaml.edges
  if (category !== undefined) sources = sources.filter(x => x.node.category === category)

  return (
    <ul class="columns">
      {sources.map(edge => (
        <li>
          <Link to={edge.node.link}>{edge.node.displayName}</Link>
        </li>
      ))}
    </ul>
  )
}
