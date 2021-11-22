import { Box, Container, Grid, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function DesktopSidebar() {
  const theme = useTheme();
  const isBelowThreshold = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid
      container
      sx={{
        display: { xs: "none", lg: "flex" },
        width: isBelowThreshold ? 0 : "15rem",
        position: "fixed",
        flexDirection: "column",
      }}
    >
      <Grid
        item
        container
        sx={{
          background: "#014656",
          alignItems: "column",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Grid
          item
          sx={{
            height: "5rem",
            alignSelf: "flex-end",
            margin: "0.5rem 0 0.5rem 0",
          }}
        >
          <Typography
            sx={{
              marginTop: "2rem",
              marginRight: "1rem",
              fontWeight: "bold",
            }}
          >
            Alex Garcia
          </Typography>
          <Typography sx={{ color: "#ccdadd" }}>
            alex.garcia@gmail.com
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
          marginBottom: "0.3rem",
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
          marginBottom: "0.3rem",
          boxShadow:
            "inset 0px -1px 0px rgba(0, 0, 0, 0.15), inset 3px 0px 0px #04819E",
        }}
      >
        <AccountBalanceWalletOutlinedIcon />
        BILLING
      </Typography>
      <Typography
        sx={{
          padding: "16px 16px 18px 16px",
          display: "flex",
          marginBottom: "0.3rem",
          alignItems: "center",
        }}
      >
        <AccountCircleOutlinedIcon />
        ACCOUNT SETTINGS
      </Typography>
      <Typography
        sx={{
          padding: "16px 16px 18px 16px",
          display: "flex",
          alignItems: "center",
          boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.15) ",
          marginBottom: "0.3rem",
        }}
      >
        <ContactSupportOutlinedIcon />
        HELP & FAQ
      </Typography>
      <Typography
        sx={{
          padding: "16px",
          display: "flex",
          marginBottom: "0.3rem",
          alignItems: "center",
        }}
      >
        <PowerSettingsNewOutlinedIcon />
        LOG OUT
      </Typography>
    </Grid>
  );
}
