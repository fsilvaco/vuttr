import { MdClose } from "react-icons/md";

import { Tool } from "../../types";

import { Button } from "../Button";
import { Dialog } from "../Dialog";

import { useDialog } from "../../hooks";

import { ToolContainer, RemoveToolsDialog } from "./styles";

interface ToolsProps {
  tool: Tool;
}

export const ToolItem = ({ tool }: ToolsProps) => {
  const { handleClose, handleOpen, show } = useDialog();

  return (
    <>
      <ToolContainer>
        <div className="tool-item">
          <div className="tool-item__header">
            <h3 className="tool-item__header__title">{tool.title}</h3>
            <Button
              title="Remove"
              backgroundColor="blue"
              titleColor="white"
              icon={<MdClose />}
              onClick={() => handleOpen()}
            />
          </div>
          <p className="tool-item__description">{tool.description}</p>
          <ul className="tool-item__tags">
            {tool.tags.map((tag, index) => (
              <li className="tool-item__tags__item" key={index}>
                #{tag}
              </li>
            ))}
          </ul>
        </div>
      </ToolContainer>

      <Dialog onClick={() => handleClose()} toggle={show}>
        <RemoveToolsDialog>
          <div className="remove-tools-container__header">
            <h2>Remove tool</h2>
          </div>
          <div className="remove-tools-container__body">
            <p>
              Are you sure want to remove <b>{tool.title}?</b>
            </p>
          </div>
          <div className="remove-tools-container__footer">
            <Button
              title="Cancel"
              onClick={() => {
                handleClose();
              }}
            />
            <Button
              title="Yes, remove"
              onClick={() => {
                handleClose();
              }}
            />
          </div>
        </RemoveToolsDialog>
      </Dialog>
    </>
  );
};
