import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function Destinations({ category, type }) {
  const data = useStaticQuery(
    graphql`
      query {
        allDestinationsYaml {
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

  let destinations = data.allDestinationsYaml.edges
  if (category !== undefined) destinations = destinations.filter(x => x.node.category === category)
  if (type !== undefined) destinations = destinations.filter(x => x.node.type === type)

  return (
    <ul class="columns">
      {destinations.map(edge => (
        <li>
          <Link to={edge.node.link}>{edge.node.displayName}</Link>
        </li>
      ))}
    </ul>
  )
}
