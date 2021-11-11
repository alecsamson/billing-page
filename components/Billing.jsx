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
        p: 5,
        alignItems: "center",
        background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
      }}
    >
      <Grid container>
        <Grid
          container
          spacing={2}
          sx={{
            color: "white",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <ArrowBackIcon color="inherit" />
          <Typography>Billing</Typography>
          <HelpIcon color="inherit" sx={{ alignSelf: "flex-end" }} />
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
            <Typography variant="h4">49,99</Typography>
            <EuroIcon fontSize="large" />
          </Grid>
        </Grid>

        <BillingCard />
        <Grid item sx={{ color: "white", p: 1 }}>
          <Typography>Next invoice will be issued on 21/11/2020.</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
