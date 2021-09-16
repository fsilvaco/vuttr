import styled from "styled-components";

export const LayoutContainer = styled.div.attrs({
  className: "layout-container",
})`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;

  .layout-container__wrapper {
    max-width: 920px;
  }
`;
