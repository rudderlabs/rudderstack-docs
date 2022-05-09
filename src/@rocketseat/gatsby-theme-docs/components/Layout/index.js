/* @jsx jsx */
import { useState, useRef, Fragment, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";

import TableOfContents from "../Docs/TOC/index";
import Sidebar from "../Sidebar";
import { Container, Main, Children } from "./styles";
import DocsNavigation from "../../../../components/DocsNavigation";
import tailwindConfig from "../../../../../tailwind.config";
import "../../../../css/docs-critical.css";
import "../../../../css/tailwind.css";
import "../../../../css/docs.css";

import CookiesConsent from "../../../../components/cookiesConsent";
import ScriptContentHead from "../../../../components/ScriptContentHead";
import ScriptContentBody from "../../../../components/ScriptContentBody";

export default function Layout({ children, title, headings, description }) {
  const data = useStaticQuery(graphql`
    {
      allSanitySiteSettings {
        edges {
          node {
            _rawWebsiteScripts
          }
        }
      }
    }
  `);
  const contentRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isTocOpen, setTocOpen] = useState(false);
  const disableTOC = false;

  function handleMenuOpen() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <Fragment>
      {data.allSanitySiteSettings.edges[0].node._rawWebsiteScripts.map(
        (script) => {
          return (
            <ScriptContentHead key={script._key} currentSlug={""} {...script} />
          );
        }
      )}
      <DocsNavigation handleMenuOpen={handleMenuOpen} isMenuOpen={isMenuOpen} />
      <Container>
        <div className="sidebarWrapper">
          <div
            className={`sidebarOverlay ${isMenuOpen ? "active" : "hidden"}`}
            onClick={() => handleMenuOpen()}
          ></div>
          <Sidebar isMenuOpen={isMenuOpen} />
        </div>
        <Main>
          <Children ref={contentRef}>
            <div className="childrenWrapper">
              <span className="tocMob" onClick={() => setTocOpen(!isTocOpen)}>
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
                  stroke={
                    isTocOpen
                      ? tailwindConfig.theme.colors.blueNew.custom
                      : tailwindConfig.theme.colors.grayColor.docsText
                  }
                  className={`tocIcon ${isTocOpen ? "active" : ""}`}
                >
                  <g>
                    <line x1="21" y1="10" x2="7" y2="10"></line>
                    <line x1="21" y1="6" x2="3" y2="6"></line>
                    <line x1="21" y1="14" x2="3" y2="14"></line>
                    <line x1="21" y1="18" x2="7" y2="18"></line>
                  </g>
                </svg>
              </span>
              {isTocOpen && (
                <div className="mobTocWrapper">
                  <div
                    className={`tocOverlay ${isTocOpen ? "active" : "hidden"}`}
                    onClick={() => setTocOpen(false)}
                  ></div>
                  <div className="mobTocMenu">
                    <TableOfContents
                      headings={headings}
                      disableTOC={disableTOC}
                      contentRef={contentRef}
                      setTocOpen={setTocOpen}
                      isTocOpen={isTocOpen}
                    />
                  </div>
                </div>
              )}
              {children}
            </div>
          </Children>
          <div
            className={`table-outer ${
              headings !== null && headings.length < 2 ? "hidden" : ""
            }`}
          >
            <TableOfContents
              headings={headings}
              disableTOC={disableTOC}
              contentRef={contentRef}
              setTocOpen={setTocOpen}
            />
          </div>
        </Main>
        <CookiesConsent />
      </Container>
      {data.allSanitySiteSettings.edges[0].node._rawWebsiteScripts.map(
        (script) => {
          return (
            <ScriptContentBody key={script._key} currentSlug={""} {...script} />
          );
        }
      )}
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  disableTableOfContents: PropTypes.bool,
  title: PropTypes.string,
  headings: PropTypes.array,
};

Layout.defaultProps = {
  disableTableOfContents: false,
  title: "",
  headings: null,
};
