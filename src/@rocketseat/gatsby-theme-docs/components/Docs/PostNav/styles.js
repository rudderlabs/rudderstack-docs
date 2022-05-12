import styled from '@emotion/styled';

export const Container = styled.section`
  display: grid;
  grid-template-areas: "previous" "next";
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  grid-template-rows: auto;
  padding: 48px 0px;
  width: 100%;
  &.single{
    grid-template-columns: 1fr;
  }
  @media (max-width: 780px) {
    grid-row-gap: 24px;
    grid-template-columns: 1fr;
    grid-template-areas: "next" "previous"
  }
`;

export const Post = styled.div`
  transition: all 200ms;
  /* ${({ isLeft }) => !isLeft && 'margin-left: auto;'} */
  display: flex;
  a {
    display: flex;
    width: 100%;
    text-decoration: none;    
    box-shadow: 0 3px 8px 0 rgb(116 129 141 / 10%);
    align-items: center;
    justify-self: stretch;
    align-self: stretch;
    border: 1px solid #E6ECF1;
    transition: all 0.3s ease;
    border-radius: 5px;
    &.previous{
      grid-area: previous;
      .postNavText{
        text-align: right;
        flex: 1;
        display: block;
        padding: 16px;
      }
    }
    &.next{
      grid-area: next;
      .postNavText{
        flex: 1;
        display: block;
        padding: 16px;
      }
    }
    &:hover{
      border-color: rgb(78,59,151);
    }
    svg {
      width: 25px;
      height: 25px;
      color: ${({ theme }) => theme.colors.text};

      ${({ isLeft }) => (isLeft ? 'margin-right: 16px' : 'margin-left: 16px')};
    }

    p {
      letter-spacing: 0.142em;
      text-transform: uppercase;
      font-size: 12px;
      margin: 0;
      color: ${({ theme }) => theme.colors.text};
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      border: none;
      margin: 0;
      padding: 0;
      font-size: 16px;
    }
  }

  &:hover {
    h3{
      color: rgb(78,59,151);
    }
    svg{
      fill: rgb(78,59,151);
    }
  }

  @media (max-width: 780px) {
    width: 100%;
    ${({ isLeft }) => isLeft && 'margin-bottom: 16px'};
  }
`;
