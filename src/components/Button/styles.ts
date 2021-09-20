import styled from "styled-components";

interface ButtonStylesProps {
  titleColor?: string;
  backgroundColor?: string;
  outline?: boolean;
  borderColor?: string;
}

export const ButtonStyles = styled.button<ButtonStylesProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.5rem;

  color: ${({ titleColor }) => titleColor};

  ${({ outline, backgroundColor }) =>
    outline
      ? `background-color: transparent;`
      : `background-color: ${backgroundColor};`}

  ${({ outline, borderColor }) =>
    outline ? `border: 2px solid ${borderColor};` : `border: none;`}

  .button__icon {
    margin-right: 0.3rem;
  }
`;
