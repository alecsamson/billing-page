import BillingCard from "./BillingCard";
import { Box, Container, Grid, Typography } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HelpIcon from "@mui/icons-material/Help";

export default function Billing(props) {
  return (
    <Grid
      container
      sx={{
        p: 4,
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
      }}
    >
      <Grid
        item
        container
        sx={{
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

      <Grid
        container
        item
        sx={{ color: "white", justifyContent: "center", p: 1 }}
      >
        <Typography variant="h6">Account Balance</Typography>
        <Grid
          container
          item
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Typography variant="h4">174,97</Typography>
          <EuroIcon fontSize="large" />
        </Grid>
      </Grid>

      <BillingCard invoice={props.invoiceIds} />

      <Grid item sx={{ color: "white", paddingTop: "10px" }}>
        <Typography>
          Next invoice will be issued on {props.invoiceIds[0].date}.
        </Typography>
      </Grid>
    </Grid>
  );
}
