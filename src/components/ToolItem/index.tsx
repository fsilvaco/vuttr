import React from "react";
import { Tool } from "../../types";

import { ToolContainer } from "./styles";

interface ToolsProps {
  tool: Tool;
}

export const ToolItem = ({ tool }: ToolsProps) => {
  return (
    <ToolContainer>
      <p>{tool.title}</p>
      <p>{tool.description}</p>
    </ToolContainer>
  );
};
