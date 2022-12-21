import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function Ftrdestinations ({ type,ftrsupport }) {
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
              ftrsupport
            }
          }
        }
      }
    `,
  )

  let destinations = data.allDestinationsYaml.edges
  if (type !== undefined) destinations = destinations.filter(x => x.node.type === type)
  if (ftrsupport !== undefined) destinations = destinations.filter(x => x.node.ftrsupport === ftrsupport)

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
