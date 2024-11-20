import { createContext, useState } from "react";

export const ModeContext = createContext(null);

const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const contextValue = {
    mode,
    setMode,
  };
  return (
    <ModeContext.Provider value={contextValue}>{children}</ModeContext.Provider>
  );
};

export default ModeContextProvider;
