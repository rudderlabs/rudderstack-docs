import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { preToCodeBlock } from "mdx-utils";
import Code from "../Code";
import mediumZoom from "medium-zoom";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import Layout from "../Layout";
import { Link } from "gatsby";
import SEO from "../SEO";
import PostNav from "./PostNav";
import EditGithub from "@rocketseat/gatsby-theme-docs/src/components/Docs/EditGithub";
import { forEach, findIndex } from "lodash";
import { postNavList } from "../../../../postNavList";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import {
  rudderslabTrackOnClickDocs,
  rudderslabTrackOnYoutubeVideoPlaybackDocs,
} from "../../../../utils/common";
import YouTube from "react-youtube";

export default function Docs({ mdx, pageContext }) {
  const { repositoryEditUrl, repositoryProvider } = pageContext;
  const { title, description } = mdx.frontmatter;
  const { headings, body } = mdx;
  const { slug } = mdx.fields;

  let tmpSlug = slug.replace(/^\/|\/$/g, "");
  const docsBasePath = process.env.GATSBY_DOCS_BASE_PATH || "";

  let currentPageIndex = findIndex(postNavList, (o) =>
    tmpSlug === "docs" ? true : slug === docsBasePath + o.link
  );
  let currentPageItem = postNavList[currentPageIndex];
  let nextPageIndex =
    currentPageIndex + 1 === postNavList.length ? 0 : currentPageIndex + 1;
  let nextPageItem = postNavList[nextPageIndex];
  let prevPageIndex =
    currentPageIndex - 1 < 0 ? postNavList.length - 1 : currentPageIndex - 1;
  let prevPageItem = postNavList[prevPageIndex];
  let disableTableOfContents = false;

  const shortCodes = {
    pre: (preProps) => {
      const props = preToCodeBlock(preProps);

      if (props) {
        return <Code {...props} />;
      }

      return <pre {...preProps} />;
    },
    Link,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    BlockMath,
    InlineMath,
    YouTube: (props) => (
      <YouTube
        onPlay={(event) => {
          rudderslabTrackOnYoutubeVideoPlaybackDocs(
            event.target.playerInfo.videoData.title,
            event
          );
        }}
        {...props}
      />
    ),
  };

  useEffect(() => {
    (function () {
      const zoom = mediumZoom(document.querySelectorAll("img:not(.mainLogo)"));

      return () => {
        zoom.detach();
      };
    })();

    let descriptionSpan = `<p class="pgdescription">${
      description === null ? "" : description
    }</p>`;

    let h1Tags = document.querySelectorAll("h1"); /* Remove this and the line below after removing h1 from mdx. Uncomment the bottom commented block */
    forEach(h1Tags, (o) => o.insertAdjacentHTML("afterend", descriptionSpan));

    /* let h1Tags = document.createElement('h1');
    h1Tags.innerText = title;
    document.getElementsByClassName('childrenWrapper')[0].prepend(h1Tags);
    forEach(h1Tags, (o) => o.insertAdjacentHTML("afterend", descriptionSpan)); */

    let ancTags = document.querySelectorAll(
      ".childrenWrapper a:not(.anchor, .next, .previous)"
    );
    forEach(ancTags, (o) => {
      o.addEventListener(
        "click",
        (e) => rudderslabTrackOnClickDocs("link", null, e, true),
        { passive: true }
      );
      o.setAttribute("target", "_blank");
    });

    let sectionLinks = document.querySelectorAll(".childrenWrapper a.anchor");
    forEach(sectionLinks, (o) =>
      o.addEventListener(
        "click",
        (e) => {
          rudderslabTrackOnClickDocs("sectionLink", null, e, true);
        },
        { passive: true }
      )
    );
  }, []);

  return (
    <>
      <SEO title={title} description={description} slug={slug} />
      <Layout
        disableTableOfContents={disableTableOfContents}
        title={title}
        headings={headings}
      >
        <div id="zoom-container"></div>
        <MDXProvider components={shortCodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        <EditGithub
          repositoryEditUrl={repositoryEditUrl}
          repositoryProvider={repositoryProvider}
        />
        <PostNav
          prev={prevPageItem}
          next={nextPageItem}
          current={currentPageItem}
        />
      </Layout>
    </>
  );
}

Docs.propTypes = {
  mdx: PropTypes.shape({
    body: PropTypes.string,
    headings: PropTypes.array,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    prev: PropTypes.shape({}),
    next: PropTypes.shape({}),
    repositoryEditUrl: PropTypes.string,
    repositoryProvider: PropTypes.string,
  }).isRequired,
};
