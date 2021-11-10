import BillingCard from "./BillingCard";
import { Container, Grid, Typography } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HelpIcon from "@mui/icons-material/Help";

export default function Billing() {
  return (
    <Container
      maxWidth="md"
      sx={{
        p: 2,
        alignItems: "center",
        background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
      }}
    >
      <Grid item container sx={{ color: "white" }} justifyContent="flex-start">
        <ArrowBackIcon color="inherit" />
        <Typography>Billing</Typography>
      </Grid>
      <Grid item sx={{ color: "white", alignSelf: "flex-end" }}>
        <HelpIcon color="inherit" />
      </Grid>

      <Grid container item sx={{ color: "white", justifyContent: "center" }}>
        <Typography variant="h6">Account Balance</Typography>
        <Grid
          container
          item
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Typography variant="h4">49,99</Typography>
          <EuroIcon fontSize="small" />
        </Grid>
      </Grid>

      <BillingCard />
      <Grid item sx={{ color: "white" }}>
        <Typography>Next invoice will be issued on 21/11/2020.</Typography>
      </Grid>
    </Container>
  );
}
