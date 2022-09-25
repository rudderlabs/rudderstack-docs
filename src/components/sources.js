import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function Sources({ category, type }) {
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
  if (type !== undefined) sources = sources.filter(x => x.node.type === type)

  return (
    <ul class="columns">
      {sources.map(edge => (
        <li>
          <Link to={`https://github.com/rudderlabs/rudderstack-docs/edit/main/docs/${edge.node.link}`}>{edge.node.displayName}</Link>
        </li>
      ))}
    </ul>
  )
}
