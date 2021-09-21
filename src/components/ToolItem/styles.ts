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

export const RemoveToolsDialog = styled.div.attrs({
  className: "remove-tools-section",
})`
  background-color: #fff;
  width: 30vw;
  padding: 2rem;

  .remove-tools-container__body {
    margin-top: 0.8rem;
  }

  .remove-tools-container__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1.6rem;

    button {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`;
