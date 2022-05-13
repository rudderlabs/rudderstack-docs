import styled from "@emotion/styled";

export const OuterWrapper = styled.div`
  border-left: 1px solid rgb(222, 226, 231);
  position: sticky;
  top: 168px;
  @media (max-width: 1200px) {
    border: none;
  }
`;
export const Wrapper = styled.div`
  position: sticky;
  top: 60px;

  margin-top: 52px;
  max-height: calc(100vh - 170px);
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  max-width: 240px;
  padding: 0px 20px;

  @media (max-width: 1200px) {
    position: relative;
    top: auto;
    order: 0;
    max-width: 100%;
    margin-left: 0;
    margin-top: 0;
    padding-left: 0px;
    border: none;
  }
`;

export const Container = styled.div`
  h2 {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.142em;
    margin-top: 0rem;
    border: none;
    margin: 0 0 16px 0;
  }

  nav ul {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

    li {
      margin-bottom: 12px;
      line-height: 1.1;

      a {
        font-size: 14px;
        font-weight: 400;
        text-decoration: none;
        transition: all 0.2s;
        overflow-wrap: break-word;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  /* @media (max-width: 1200px) {
    margin: 0 0 24px 0;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(120, 117, 122, 0.2);
  } */
`;
