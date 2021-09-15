import React from "react";
import { useTools } from "../../hooks";

export function HomePage() {
  const { tools } = useTools();

  return (
    <React.Fragment>
      {!tools ? (
        <p>carregando os dados...</p>
      ) : (
        tools.map((tool, index) => <p key={index}>{tool.title}</p>)
      )}
    </React.Fragment>
  );
}
