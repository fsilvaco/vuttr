import { useState } from "react";

export const useDialog = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return { show, handleClose, handleOpen };
};
