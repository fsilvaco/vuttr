import React from "react";
import { ToolItem } from "../../components/ToolItem";
import { useTools } from "../../hooks";

export function HomePage() {
  const { tools } = useTools();

  return (
    <React.Fragment>
      {!tools ? (
        <p>carregando os dados...</p>
      ) : (
        tools.map((tool, index) => <ToolItem tool={tool} key={index} />)
      )}
    </React.Fragment>
  );
}
