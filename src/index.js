import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    {/* <ThemeProvider theme={Theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </BrowserRouter>
);
