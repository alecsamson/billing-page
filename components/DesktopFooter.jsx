import { Box, Grid, Typography } from "@mui/material";

export default function DesktopFooter() {
  return (
    // <Box sx={{ display: { xs: "none", md: "flex", lg: "flex", xl: "flex" } }}>
    <Grid
      container
      sx={{
        display: { xs: "none", md: "flex" },
        position: "fixed",
        width: "100%",
        bottom: 0,
        p: 2,
        backgroundColor: "#FBFCFD;",
        justifyContent: "flex-start",
      }}
    >
      <Typography sx={{ padding: "0 56px" }}>Blog</Typography>
      <Typography sx={{ padding: "0 56px" }}>About us</Typography>
      <Typography sx={{ padding: "0 56px" }}>T&C</Typography>
      <Typography sx={{ padding: "0 56px" }}>Privacy Policy</Typography>

      <Typography sx={{ marginLeft: "auto" }}>
        Viasat Internet is a service provided by Viasat Europe Sarl.
      </Typography>
    </Grid>
    // </Box>
  );
}
