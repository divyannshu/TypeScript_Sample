import { FC } from "react";
import { Box, Typography } from "@mui/material";
const MoviePage: FC = () => {
  return (
    <div>
      <Box
        sx={{
          height: "100vh", // full viewport height
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f2f5", // light background
        }}
      >
        <Typography sx={{ color: "black" }}>Movie Page</Typography>
      </Box>
    </div>
  );
};

export default MoviePage;
