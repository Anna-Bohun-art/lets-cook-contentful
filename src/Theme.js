const toggleMode = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          background: {
            default: "#f3e5f5",
          },
          text: {
            primary: "#000",
            secondary: "#e57373",
          },
        }
      : {
          // palette values for dark mode
          background: {
            default: "#000",
          },
          text: {
            primary: "#fff",
            secondary: "#f44336",
          },
        }),
  },
});

export default toggleMode;

/*
  const darkTheme = {
    body: "#1c1c1c",
    title: "#fff",
    subtitle: "#b6b6b6",
  };

  const lightTheme = {
    body: "#fff",
    title: "#1c1c1c",
    subtitle: "#333",
  };





const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...createTheme(
      mode === "light"
        ? {
            primary: {
              main: "#ffab91",
              dark: "#c97b63",
              light: "#ffddc1",
            },
            secondary: {
              main: "#cfd8dc",
              dark: "#9ea7aa",
              light: "#ffffff",
            },
            typography: {
              h1Variant: {
                fontFamily: "Source Serif Pro",
                fontSize: 26,
              },
              h2Variant: {
                fontFamily: "Source Serif Pro",
                fontSize: 22,
              },
              textVariant: {
                fontFamily: "Source Serif Pro",
                fontSize: 16,
              },
            },
            shape: {
              borderRadius: 30,
            },
          }
        : {
            palette: {
              primary: {
                main: "#ffab91",
                dark: "#c97b63",
                light: "#ffddc1",
              },
              secondary: {
                main: "#cfd8dc",
                dark: "#9ea7aa",
                light: "#ffffff",
              },
            },
            typography: {
              h1Variant: {
                fontFamily: "Source Serif Pro",
                fontSize: 26,
              },
              h2Variant: {
                fontFamily: "Source Serif Pro",
                fontSize: 22,
              },
              textVariant: {
                fontFamily: "Source Serif Pro",
                fontSize: 16,
              },
            },
            shape: {
              borderRadius: 30,
            },
          }
    ),
  },
});
export default Theme;
*/
