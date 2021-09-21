import { createPortal } from "react-dom";
import { DialogStyled } from "./styles";

interface DialogProps {
  children: JSX.Element;
  toggle: boolean;
  onClick?: () => void;
}

export const Dialog = ({ children, toggle, onClick }: DialogProps) => {
  return createPortal(
    toggle && <DialogStyled onClick={onClick}>{children}</DialogStyled>,
    document.body
  );
};
