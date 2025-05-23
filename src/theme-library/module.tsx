import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 20px",
          fontWeight: 600,
          textTransform: "none",
          color: "#1976d2",
          border: "2px solid #1976d2",
          borderRadius: 8,
          transition: "all 0.3s ease",
          backgroundColor: "white",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: " #1976d2",
            color: "#fff",
            borderColor: " #115293",
          },

          // ""
        },
        //   outlined : {

        //   }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          borderRadius: "16px",
          backgroundColor: "white",
        },
      },
    },
  },
});

export default theme;

// /We usually do not override a themed component.
// What we do is create a different styling for different variants of buttons so that we are able to consume a central library
// Just in case if we want to override a theme as well then we can go to the particular component and target the button
