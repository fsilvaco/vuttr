import { createPortal } from "react-dom";
import { DialogStyled } from "./styles";

interface DialogProps {
  children: JSX.Element;
  toggle: boolean;
}

export const Dialog = ({ children, toggle }: DialogProps) => {
  return createPortal(
    toggle && <DialogStyled>{children}</DialogStyled>,
    document.body
  );
};
