import { useState } from "react";
import { AppContext } from "./AppContext";
import { createTheme } from "@mui/material/styles";
import { ThemeContext } from "@emotion/react";

export default function AppProvider() {

  const [mode, setMode] = useState("light");
  const theme=createTheme({
    palette:{mode}
  })

  return (
    <AppContext.Provider value={{ mode, setMode }}>
      <ThemeContext theme={theme}>
        
      </ThemeContext>
    </AppContext.Provider>
  );
}