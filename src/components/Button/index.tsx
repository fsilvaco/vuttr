import { ButtonStyles } from "./styles";

interface ButtonProps {
  title?: string;
  titleColor?: string;
  backgroundColor?: string;
  outline?: boolean;
  borderColor?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

export const Button = ({
  title,
  titleColor,
  backgroundColor,
  icon,
  outline,
  borderColor,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonStyles
      titleColor={titleColor}
      backgroundColor={backgroundColor}
      onClick={onClick}
      outline={outline}
      borderColor={borderColor}
    >
      <div className="button__icon">{icon}</div>
      {title}
    </ButtonStyles>
  );
};
