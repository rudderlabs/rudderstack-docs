import React, { useState, useEffect, useMemo } from "react"
import PropTypes from "prop-types"
import useWindowScroll from "react-use/lib/useWindowScroll"
import useWindowSize from "react-use/lib/useWindowSize"
import { css } from "@emotion/react"

import slug from "@rocketseat/gatsby-theme-docs/src/util/slug"

import { Wrapper, Container, OuterWrapper } from "./styles"
import tailwindConfig, { theme } from "../../../../../../tailwind.config"
import { entries } from "lodash-es"
import { rudderslabTrackOnClickDocs } from '../../../../../utils/common'
import Feedback from "../../../../../components/feedback"

export default function TableOfContents({ headings = [], disableTOC = false, contentRef, setTocOpen, isTocOpen = false }) {
  const { y } = useWindowScroll()
  const { width, height } = useWindowSize()
  const [offsets, setOffsets] = useState([])

  const isMobile = width <= 1200

  const getDuplicates = arr => {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
      if (map.hasOwnProperty(slug(arr[i].value))) {
        map[slug(arr[i].value)].push(i);
      } else {
        map[slug(arr[i].value)] = [i]
      }
    }

    return entries(map);
  }

  const generateId = () => {
    let tempArr = headings !== null ? headings.filter(heading => heading.depth === 2 || heading.depth === 3) : offsets;
    let duplicates = getDuplicates(tempArr);
    let tempArr1 = {};
    duplicates.map((item, k) => {
      if (item[1].length > 1) {
        for (let i = 0; i < item[1].length; i++) { //'xyz', [8,12]
          if (i === 0) {
            tempArr1[item[1][0]] = slug(tempArr[item[1][i]].value);
          } else {
            tempArr1[item[1][i]] = slug(tempArr[item[1][i]].value) + '-' + i;
          }
        }
      } else {
        tempArr1[item[1]] = item[0];
      }
    });
    return entries(tempArr1);
  }


  const getOffset = (element) => {
    var top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        /* left += element.offsetLeft || 0; */
        element = element.offsetParent;
    } while(element);
    return top;
  };

  useEffect(() => {
    if (!isMobile || disableTOC) {
      const allHeadings = document.querySelectorAll(`h2, h3`)

      let settingOffset = () => setTimeout(() => {
        setOffsets(
          allHeadings &&
          Array.from(allHeadings)
            .map(heading => {
              const anchor = heading.querySelector(`a`)
              if (!anchor) return {}
              return {
                id: heading.id,
                value: heading.textContent,
                offset: getOffset(heading),
              }
            })
            .filter(Boolean)
        )
        generateId();
      }, 1000)

      let timeOutId = settingOffset();

      return () => {
        clearTimeout(timeOutId);
      }
    }

  }, [width, height, contentRef, isMobile, disableTOC, generateId])


  const activeHeading = useMemo(() => {
    if (!isMobile || disableTOC) {
      const scrollTop = y;
      if (offsets) {
        for (let i = offsets.length - 1; i >= 0; i -= 1) {
          const { id, offset } = offsets[i]
          if (scrollTop >= offset - 140) {
            return id
          }
        }
      }
    }


    return null
  }, [offsets, y, isMobile, disableTOC])

  if (!disableTOC) {
    return (
      <OuterWrapper>
        <Wrapper className="tocWrapper">
          <Container>
            <h2>
              <span
                className="inline-block pr-2 align-middle"
                css={css(`
                @media (max-width: 1200px) {
                  display: none;
                }
              `)}
              >
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  height="1em"
                  width="1em"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke={theme.colors.grayColor.dark}
                  strokeLinejoin="round"
                  className={`tocIcon`}
                >
                  <g>
                    <line x1="21" y1="10" x2="7" y2="10"></line>
                    <line x1="21" y1="6" x2="3" y2="6"></line>
                    <line x1="21" y1="14" x2="3" y2="14"></line>
                    <line x1="21" y1="18" x2="7" y2="18"></line>
                  </g>
                </svg>
              </span>
              <span className="inline-block pr-2 align-middle">Contents</span>
            </h2>
            <nav>
              <ul>
                {
                  headings && headings
                    .filter(heading => heading.depth === 2 || heading.depth === 3)
                    .map((heading, i) => {
                      let idArr = generateId();
                      const headingSlug = idArr[i][1];
                      return (
                        <li
                          key={headingSlug}
                          style={{
                            marginLeft: heading.depth === 3 ? `8px` : null,
                          }}
                        >
                          <a
                            href={`#${headingSlug}`}
                            onClick={(e) => {
                              isMobile && setTocOpen(false);
                              rudderslabTrackOnClickDocs("table_of_contents", null, e, true);
                            }}
                            style={{
                              color:
                                activeHeading === headingSlug
                                  ? tailwindConfig.theme.colors.purpleNew.gigas
                                  : tailwindConfig.theme.colors.grayColor.docsText,
                              fontWeight: activeHeading === headingSlug ? 600 : 'normal'
                            }}
                          >
                            {heading.value}
                          </a>
                        </li>
                      )
                    })}
              </ul>
            </nav>
        <div css={css(`
            width: 100%;
            @media (max-width: 1200px) {
               display: none;
            }
                `)}>
              <Feedback />
            </div>
          </Container>
        </Wrapper>
      </OuterWrapper>
    )
  }

  return <Wrapper />
}

TableOfContents.propTypes = {
  headings: PropTypes.array,
  disableTOC: PropTypes.bool.isRequired,
  contentRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
}

TableOfContents.defaultProps = {
  headings: [],
}
