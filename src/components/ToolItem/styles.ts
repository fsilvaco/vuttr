import styled from "styled-components";

export const ToolContainer = styled.div.attrs({ className: "tool-item" })`
  border: 2px solid #333;
  padding: 1rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  .tool-item {
    &__header {
      display: flex;
      justify-content: space-between;

      &__title {
        margin-bottom: 0.5rem;
      }
    }

    &__description {
      margin-bottom: 1rem;
    }

    &__tags {
      margin: 0;

      &__item {
        display: inline;
        list-style: none;
        font-weight: bold;

        &:not(:last-child) {
          margin-right: 0.5rem;
        }
      }
    }
  }
`;
