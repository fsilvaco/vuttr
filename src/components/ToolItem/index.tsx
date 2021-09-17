import React from "react";
import { Tool } from "../../types";

import { ToolContainer } from "./styles";

interface ToolsProps {
  tool: Tool;
}

export const ToolItem = ({ tool }: ToolsProps) => {
  return (
    <ToolContainer>
      <div className="tool-item">
        <h3 className="tool-item__title">{tool.title}</h3>
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
