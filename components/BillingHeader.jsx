import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HelpIcon from "@mui/icons-material/Help";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function BillingHeader() {
  return (
    <Grid
      item
      container
      sx={{
        position: "sticky",
        top: "0",
        padding: "32px 32px 16px 32px",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
        color: "white",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ArrowBackIcon />
        <Typography>Billing</Typography>
      </Box>
      <HelpIcon />
    </Grid>
  );
}
