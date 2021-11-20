import BillingCard from "./BillingCard";
import { Grid, Typography } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Billing(props) {
  const splitDate = props.invoiceIds[0].date.split("/");
  const initialDate = `${splitDate[0]}/${Number(splitDate[1]) + 1}/${
    splitDate[2]
  }`;
  const theme = useTheme();
  const isBelowThreshold = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid
        container
        sx={{
          position: isBelowThreshold ? "static" : "sticky",
          top: isBelowThreshold ? "auto" : "5rem",
          padding: isBelowThreshold
            ? "8px 32px 32px 32px"
            : "16px 32px 58px 32px",
          alignItems: "center",
          justifyContent: isBelowThreshold ? "center" : "space-evenly",
          background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
          zIndex: 10,
        }}
      >
        <Grid item>
          <Grid
            item
            container
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

          {isBelowThreshold ? <BillingCard invoice={props.invoiceIds} /> : ""}

          <Grid
            item
            container
            sx={{
              color: "white",
              paddingTop: "10px",
              justifyContent: "center",
            }}
          >
            <Typography>
              Next invoice will be issued on {initialDate}.
            </Typography>
          </Grid>
        </Grid>

        {isBelowThreshold ? (
          ""
        ) : (
          <Grid item>
            <BillingCard invoice={props.invoiceIds} />
          </Grid>
        )}
      </Grid>
    </>
  );
}
