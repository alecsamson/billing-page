import { Container, Grid, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export default function DesktopSidebar() {
  return (
    <Grid
      container
      sx={{
        width: "20%",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Grid
        item
        container
        sx={{
          position: "relative",
          p: 2,
          background: "#014656",
          alignItems: "column",
          color: "white",
        }}
      >
        <Grid item>
          <Typography>
            Alex Garcia
            <br /> alex.garcia@gmail.com
          </Typography>
        </Grid>
        <Grid item sx={{ position: "absolute", right: 64, top: 8 }}>
          <Typography sx={{ fontWeight: "bold" }}>Viasat</Typography>
        </Grid>
      </Grid>

      <Typography sx={{ display: "flex", alignItems: "center" }}>
        <HomeOutlinedIcon />
        HOME
      </Typography>
      <Typography sx={{ display: "flex", alignItems: "center" }}>
        BILLING
      </Typography>
      <Typography>ACCOUNT SETTINGS</Typography>
      <Typography>HELP & FAQ</Typography>
      <Typography>LOG OUT</Typography>
    </Grid>
  );
}
