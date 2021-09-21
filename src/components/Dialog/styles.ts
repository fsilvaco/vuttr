import styled from "styled-components";

export const DialogStyled = styled.div.attrs({ className: "section-dialog" })`
  position: absolute;
  z-index: 999;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
`;
