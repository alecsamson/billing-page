import BillingCard from "./BillingCard";
import { Box, Container, Grid, Typography } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Billing(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      sx={{
        position: matches ? "static" : "sticky",
        top: matches ? "auto" : "72px",
        p: 4,
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
        zIndex: 10,
      }}
    >
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
