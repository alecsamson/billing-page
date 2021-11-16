import { Box, Grid, Typography } from "@mui/material";

export default function DesktopFooter() {
  return (
    <Grid
      container
      sx={{
        position: "absolute",
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

      <Typography
        sx={{ alignSelf: "flex - end ", position: "absolute", right: 24 }}
      >
        Viasat Internet is a service provided by Viasat Europe Sarl.
      </Typography>
    </Grid>
  );
}
