import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

export default function Yaml({handleMenuOpen}) {
  const data = useStaticQuery(
    graphql`
      query {
        allSourcesYaml {
          edges {
            node {
              displayName
              link
            }
          }
        }
      }
    `,
  )
  return (
    <div>
      {data.allSourcesYaml.edges.map(edge => (
        <ul><li>
          {edge.node.displayName}
        </li></ul>
      ))}
    </div>
  )
}
