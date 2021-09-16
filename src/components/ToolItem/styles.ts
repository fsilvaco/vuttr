import styled from "styled-components";

export const ToolContainer = styled.div.attrs({ className: "tool-item" })`
  border: 2px solid #333;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
