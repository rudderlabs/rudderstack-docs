import React from "react"
import loadable from "@loadable/component"

 const Global = loadable(() => import('@emotion/react'), {
   resolveComponent: components => components.Global
})

export default function GlobalStyle() {
  return (
    <Global/>
  )
}
