import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, useContext, createContext, useMemo } from "react";
import toggleMode from "./Theme";

const ColorModeContext = createContext();
const useThemeContext = () => useContext(ColorModeContext);

const ThemeContext = ({ children }) => {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => createTheme(toggleMode(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { ThemeContext as default, useThemeContext };
