import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HelpIcon from "@mui/icons-material/Help";
import { Box, Container, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function BillingHeader() {
  const theme = useTheme();
  const isBelowThreshold = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      item
      container
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        height: "5rem",
        padding: "32px 32px 16px 32px",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
        color: "white",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {isBelowThreshold ? <ArrowBackIcon /> : ""}
        <Typography
          sx={{
            fontSize: isBelowThreshold ? "24px" : "32px",
            fontWeight: isBelowThreshold ? "normal" : "bold",
          }}
        >
          Billing
        </Typography>
      </Box>
      {isBelowThreshold ? <HelpIcon /> : ""}
    </Grid>
  );
}
