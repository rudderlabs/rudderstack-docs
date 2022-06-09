import React from "react"
import slug from "@rocketseat/gatsby-theme-docs/src/util/slug"

import { jsonData } from "../sidebar"
import { rudderslabTrackOnClickDocs, rudderslabTrackOnSearch } from "../utils/common"

import NoResultImage from "../images/noresultsearch.svg"

const docsBasePath = process.env.GATSBY_DOCS_BASE_PATH || ""

const formatHighlight = str => str.replace(new RegExp("<ais-highlight-0000000000>", "g"), "<em>").replace( new RegExp("</ais-highlight-0000000000>", "g"), "</em>")

const truncateExcerpt = str => str.substring(0, 150) + "..."

// sidebar.js file is used to generate breadcrumb from slug
const generateBreadcrumb = slug => {
  if (slug === "/") return jsonData.find(x => x.link === slug).title

  let slugArray = slug.split("/").filter(x => x)
  let breadcrumb = []

  // Get item by matching key. If no match found, link is used for matching the item
  let key = jsonData.find(x => x.key === slugArray[0])
  let link = "/" + slugArray[0]

  if (key) {
    breadcrumb.push(key.title)

    while (breadcrumb.length < slugArray.length) {
      let tempKey = key.content.find(x => x.key === slugArray[breadcrumb.length])

      if (tempKey) {
        link += "/" + slugArray[breadcrumb.length]
        key = tempKey

        breadcrumb.push(key.title)
      } else {
        link += "/" + slugArray[breadcrumb.length]
        key = key.content.find(x => x.link.startsWith(link))

        if (key) breadcrumb.push(key.title)
        else break
      }
    }
  }

  return breadcrumb.join(" > ")
}

const DocsSearchContent = ({ hits, currentSearchText, setSearchOpen }) => {
  return (
    <div className="searchResultsWrapper">
      {hits.length === 0 || currentSearchText === "" ? (
        <div className="searchResultsEmpty">
          <img src={NoResultImage} alt="No Result" />
        </div>
      ) : (
        <div className="searchResults">
          {hits.map((item, index) => {
            let pageTitle = formatHighlight(item._highlightResult.title.value)
            let sectionTitle, sectionContent, isExcerptMatch = false

            // Find most matching heading by using matchLevel and matchedWords
            let sectionTitleMatches = item._highlightResult.headings.filter(x => x.value.matchLevel === "full")
            if (sectionTitleMatches.length === 0) sectionTitleMatches = item._highlightResult.headings.filter(x => x.value.matchLevel === "partial")
            if (sectionTitleMatches.length === 0) {
              sectionTitleMatches = item._highlightResult.headings.filter(x => x.value.matchLevel === "none")
              isExcerptMatch = true
            }

            sectionTitleMatches.sort((a, b) => a.matchedWords - b.matchedWords ? -1 : 1)

            if (isExcerptMatch) {                                                                               // If the match exists only in excerpt
              let index = formatHighlight(item._highlightResult.excerpt.value).indexOf("<em>")
              if (index > -1) {
                // Find heading that occurs before the matched words in excerpt
                let sectionTitleHeading = item.headings.find(x => x.start <= index && x.end >= index)
                sectionTitle = pageTitle === sectionTitleHeading.value ? null : sectionTitleHeading.value

                // Extract the heading specific excerpt using start and end values from heading object
                sectionContent = item.excerpt.substring(sectionTitleHeading.start, sectionTitleHeading.end)
              } else {
                sectionContent = item.excerpt
              }
            } else if (item._highlightResult.title.value !== sectionTitleMatches[0]?.value.value) {             // If pageTitle and sectionTitle are different
              sectionTitle = formatHighlight(sectionTitleMatches[0]?.value.value)

              sectionContent = item.excerpt.substring(sectionTitleMatches[0].start.value, sectionTitleMatches[0].end.value)
            } else {                                                                                            // If pageTitle and sectionTitle are same, sectionTitle is not shown
              let sectionTitleHeading = item.headings.find(x => x.value === item.title)
              sectionContent = item.excerpt.substring(sectionTitleHeading.start, sectionTitleHeading.end)
            }

            // Using matched words, the words are highlighted in excerpt
            let matchedWords = item._highlightResult.excerpt.matchedWords
            matchedWords = matchedWords.filter(x => sectionContent.toLowerCase().indexOf(x) > -1).map(x => sectionContent.substr(sectionContent.toLowerCase().indexOf(x), x.length))
            matchedWords.forEach(x => sectionContent = sectionContent.replace(new RegExp(x, "g"), "<em>" + x + "</em>"))

            sectionContent = truncateExcerpt(sectionContent)

            if (sectionContent.trim() !== "...") {
              return (
                <div key={index} className="searchBlock">
                  <a
                    href={window.location.origin + docsBasePath + item.slug + (sectionTitle ? "#" + slug(sectionTitle.replace(new RegExp("<em>", "g"), "").replace(new RegExp("</em>", "g"), "")) : "")}
                    onClick={e => {
                      setSearchOpen(false)
                      rudderslabTrackOnClickDocs("search_result", pageTitle, e, true)
                      rudderslabTrackOnSearch(currentSearchText)
                    }}
                  >
                    <p className="pageTitle" dangerouslySetInnerHTML={{ __html: pageTitle }} />
                    {sectionTitle && <p className="sectionTitle" dangerouslySetInnerHTML={{ __html: sectionTitle }} />}
                    <p className="breadcrumb">{generateBreadcrumb(item.slug)}</p>
                    <p className="description" dangerouslySetInnerHTML={{ __html: sectionContent }} />
                  </a>
                </div>
              )
            }
          })}
        </div>
      )}
    </div>
  )
}

export default DocsSearchContent
