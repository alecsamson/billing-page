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
        alignItems: "center",
        background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
      }}
    >
      <Grid item sx={{ color: "white" }}>
        <ArrowBackIcon color="inherit" />
        <Typography>Billing</Typography>
        <HelpIcon color="inherit" />
      </Grid>

      <Grid item>
        <Typography>Account Balance</Typography>

        <Grid container item sx={{ alignItems: "center" }}>
          <Typography>49,99</Typography>
          <EuroIcon fontSize="small" />
        </Grid>
      </Grid>

      <BillingCard />
      <Grid item>
        <Typography>Next invoice will be issued on 21/11/2020.</Typography>
      </Grid>
    </Container>
  );
}
