import { Container, Grid, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";

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

      <Typography
        sx={{
          padding: "16px",

          display: "flex",
          alignItems: "center",
        }}
      >
        <HomeOutlinedIcon />
        HOME
      </Typography>
      <Typography
        sx={{
          padding: "16px",
          display: "flex",
          alignItems: "center",
          background: "#F2F5F8",
          boxShadow:
            "inset 0px -1px 0px rgba(0, 0, 0, 0.15), inset 3px 0px 0px #04819E",
        }}
      >
        <AccountBalanceWalletOutlinedIcon />
        BILLING
      </Typography>
      <Typography
        sx={{ padding: "16px", display: "flex", alignItems: "center" }}
      >
        <AccountCircleOutlinedIcon />
        ACCOUNT SETTINGS
      </Typography>
      <Typography
        sx={{
          padding: "16px",
          display: "flex",
          alignItems: "center",
          boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.15) ",
        }}
      >
        <ContactSupportOutlinedIcon />
        HELP & FAQ
      </Typography>
      <Typography
        sx={{ padding: "16px", display: "flex", alignItems: "center" }}
      >
        <PowerSettingsNewOutlinedIcon />
        LOG OUT
      </Typography>
    </Grid>
  );
}
