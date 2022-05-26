import React, { useState } from "react"
import RsLogo from "../images/rudderstack-logo-v2.svg"
import { InstantSearch, Configure } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import DocsSearchBox from "./DocsSearchBox"
import DocSearchContentWrapper from "./DocSearchContentWrapper"
import {rudderslabTrackOnClickDocs} from '../utils/common'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_APIKEY
)


const DocsNavigation = ({ isMenuOpen, handleMenuOpen}) => {
  const [isSearchOpen, setSearchOpen] = useState(false)
  const [currentSearchText, setCurrentSearchText] = useState("")
  const [currentRefineHitsCount, setCurrentRefineHitsCount] = useState(0)

  return (
    <div className="headerNav">
      <div className="headerContainer">
        <div
          className={`mobNavIconWrapper ${isMenuOpen ? "active" : ""}`}
          onClick={() => handleMenuOpen()}
        >
          <svg width="30" height="30" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </div>
        <div className="docsLogo flex items-center">
          <a href="https://www.rudderstack.com/" onClick={(e) => rudderslabTrackOnClickDocs("navigation", null, e, true)}>
            <img src={RsLogo} alt="RudderStack" className="mainLogo" />
          </a>
        </div>
        <nav className="docsNav">
          <ul className="docsNavList">
            <li>
              <a href="/" onClick={(e) => rudderslabTrackOnClickDocs("navigation", null, e, true)}>Home</a>
            </li>
            <li>
              <a href="https://github.com/rudderlabs/rudder-server" onClick={(e) => rudderslabTrackOnClickDocs("navigation", null, e, true)}>GitHub</a>
            </li>
            <li>
              <a href="https://www.rudderstack.com/pricing" onClick={(e) => rudderslabTrackOnClickDocs("navigation", null, e, true)}>Pricing</a>
            </li>
            <li>
              <a href="https://app.rudderstack.com/signup?type=freetrial" onClick={(e) => rudderslabTrackOnClickDocs("navigation", null, e, true)}>
                Try for Free
              </a>
            </li>
          </ul>
        </nav>
        <div className="docsSearch" onClickCapture={() => setSearchOpen(true)}>
          <span className="docsSearchIcon">
            <svg
              preserveAspectRatio="xMidYMid meet"
              height="1em"
              width="1em"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"
              className="icon-7f6730be--text-3f89f380"
            >
              <g>
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
              </g>
            </svg>
          </span>
          <input type="text" placeholder="Search..." className="docsSearchbar" onClickCapture={(e) => {setSearchOpen(true); e.target.blur();}} />
        </div>
        
        <div className="searchWrapper">
          <div className={`searchOverlay ${isSearchOpen ? 'active' : ''}`} onClick={() => setSearchOpen(false)}></div>
          <div className={`instantSearchWrapper ${isSearchOpen ? 'active' : ''}`}>
              <InstantSearch
                searchClient={searchClient}
                indexName={process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_docs_heading_removed"}
              >
                <Configure hitsPerPage={10} />
                <div className="docsSearchWrapper">
                  <DocsSearchBox
                    onRefineTextChange={val => {
                      setCurrentSearchText(val);
                    }}
                    isSearchOpen={isSearchOpen}
                    currentSearchText={currentSearchText}
                    setSearchOpen={setSearchOpen}
                  />
                </div>
                <div id="docsSearchHitsContainer">
                  <div data-reactroot>
                    <DocSearchContentWrapper
                      isSearchOpen={isSearchOpen}
                      onRefineHitsCountChange={setCurrentRefineHitsCount}
                      currentSearchText={currentSearchText}
                      setSearchOpen={setSearchOpen}
                      currentRefineHitsCount={currentRefineHitsCount}
                    />
                  </div>
                </div>
              </InstantSearch>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DocsNavigation
