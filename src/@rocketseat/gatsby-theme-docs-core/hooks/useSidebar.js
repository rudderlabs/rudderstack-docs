import { graphql, useStaticQuery } from 'gatsby';
import { resolveLink } from '@rocketseat/gatsby-theme-docs-core/util/url';
import { jsonData } from "../../../docsconfig/sidebar"
import { useEffect } from 'react';

export function useSidebar() {

let finalData;
const returnMenuItem = (item, i) => {
  let menuItem

  if (item.content.length === 0) {
    menuItem = {
      "label": item.title,
      "link": item.link
    }
  } else {
    let menuItem = {
      "label": item.title,
      "link": item.link
    };
    let menuItemChildren = item.content.map((item, i) => {
      let menuItem = returnMenuItem(item, i)
      return menuItem
    })
    let combinedMenuItem = [{...menuItem}, menuItemChildren];
    return combinedMenuItem
  }

  return menuItem
}


finalData = jsonData.map((item, i) => {
  let menuItem = returnMenuItem(item, i)
  return menuItem
})

return finalData;
}