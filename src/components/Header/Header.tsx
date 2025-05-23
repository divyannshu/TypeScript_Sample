// Header.tsx
import { useNavigate } from "react-router-dom";
import { styled, Typography, Toolbar, AppBar, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import useAuth from "../../hooks/use-auth-context";
import "./Header.css";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: blue[500],
  color: theme.palette.text.secondary,
}));

const StyledButton = styled(Button)({
  backgroundColor: "transparent",
  border: "none",
  color: "black",
  fontWeight: 400,
  fontSize: "large",
  // Optional: remove hover background
  "&:hover": {
    backgroundColor: "transparent",
  },
});

function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to login page after logout
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          CRUD Application
        </Typography>

        <StyledButton color="inherit" onClick={() => navigate("/book")}>
          Books
        </StyledButton>

        <StyledButton color="inherit" onClick={() => navigate("/movie")}>
          Movies
        </StyledButton>

        {isAuthenticated ? (
          <>
            <Typography variant="body1" sx={{ mx: 2 }}>
              Welcome, {user}
            </Typography>
            <StyledButton color="inherit" onClick={handleLogout}>
              Logout
            </StyledButton>
          </>
        ) : (
          <StyledButton onClick={() => navigate("/")}>Login</StyledButton>
        )}
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
