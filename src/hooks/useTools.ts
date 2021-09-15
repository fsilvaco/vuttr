import { useEffect, useState } from "react";
import { API } from "../services/api";
import { Tool } from "../types";

export const useTools = () => {
  const [tools, setTools] = useState<Tool[]>();

  useEffect(() => {
    const getAllTools = async () => {
      await API.get("/tools").then((response) => {
        setTools(response.data);
      });
    };
    getAllTools();
  }, []);

  return { tools };
};
