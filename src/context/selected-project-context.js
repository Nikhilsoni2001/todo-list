import React, { createContext, useContext, useState } from "react";

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children }) => {
  const [selectedProjects, setSelectedProjects] = useState("INBOX");

  return (
    <SelectedProjectContext.Provider
      value={{ selectedProjects, setSelectedProjects }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectsValue = () =>
  useContext(SelectedProjectContext);
