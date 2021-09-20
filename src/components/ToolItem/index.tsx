import { Tool } from "../../types";
import { Button } from "../Button";

import { MdClose } from "react-icons/md";

import { ToolContainer } from "./styles";

interface ToolsProps {
  tool: Tool;
}

export const ToolItem = ({ tool }: ToolsProps) => {
  return (
    <ToolContainer>
      <div className="tool-item">
        <div className="tool-item__header">
          <h3 className="tool-item__header__title">{tool.title}</h3>
          <Button
            title="Remove"
            backgroundColor="blue"
            titleColor="white"
            icon={<MdClose />}
            onClick={() => {}}
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
  );
};
