import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontSize: 20,
  },
  shape: {
    borderRadius: 10,
  },
});

export default Theme;
