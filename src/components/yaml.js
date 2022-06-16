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
            }
          }
        }
      }
    `,
  )
  return (
    <table>
      {data.allSourcesYaml.edges.map(edge => (
        <tr>
          <td>{edge.node.displayName}</td>
        </tr>
      ))}
    </table>
  )
}
