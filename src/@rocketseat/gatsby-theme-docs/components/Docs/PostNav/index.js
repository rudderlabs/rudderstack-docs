import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { rudderslabTrackOnClickDocs } from "../../../../../utils/common";
import { Container, Post } from "./styles";

export default function Docs({ prev, next, current }) {
  let docsBasePath = "";

  return current ? (
    <Container
      className={
        current.title === "Home" || current.title === "FAQs" ? "single" : ""
      }
    >
      {prev && current.title !== "Home" && (
        <Post isLeft>
          <Link
            to={docsBasePath + prev.link}
            className="previous"
            onClick={(e) =>
              rudderslabTrackOnClickDocs("footer_docs_nav", null, e, true)
            }
          >
            <MdKeyboardArrowLeft className="postNavArrow" />
            <div className="postNavText">
              <p>Prev</p>
              <h3>{prev.title}</h3>
            </div>
          </Link>
        </Post>
      )}
      {next && current.title !== "FAQs" && (
        <Post>
          <Link
            to={docsBasePath + next.link}
            className="next"
            onClick={(e) =>
              rudderslabTrackOnClickDocs("footer_docs_nav", null, e, true)
            }
          >
            <div className="postNavText nextText">
              <p>Next</p>
              <h3>{next.title}</h3>
            </div>
            <MdKeyboardArrowRight className="postNavArrow" />
          </Link>
        </Post>
      )}
    </Container>
  ) : null;
}

Docs.propTypes = {
  prev: PropTypes.shape({
    label: PropTypes.string,
    link: PropTypes.string,
  }),
  next: PropTypes.shape({
    label: PropTypes.string,
    link: PropTypes.string,
  }),
};

Docs.defaultProps = {
  prev: null,
  next: null,
};
