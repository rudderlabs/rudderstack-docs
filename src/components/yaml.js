import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'

export default function Yaml({handleMenuOpen}) {
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
  return (
    <ul class="columns">
      {data.allSourcesYaml.edges.map(edge => (
        <li>
          <Link to={edge.node.link}>{edge.node.displayName}</Link>
        </li>
      ))}
    </ul>
  )
}

