// Header.tsx
import { blue } from "@mui/material/colors";
import { styled, Typography, Toolbar, AppBar } from "@mui/material";

// You can create a styled component for the app bar if you want custom styling
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  marginTop: theme.spacing(4), // space above the footer
  padding: theme.spacing(2), // inner padding
  backgroundColor: blue[500], // light background
  textAlign: "center", // center-align text
  color: theme.palette.text.secondary, // subtle text color
}));

function Footer() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Footer
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Footer;
