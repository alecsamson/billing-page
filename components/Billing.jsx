import BillingCard from "./BillingCard";
import { Grid, Typography } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Billing(props) {
  const splitDate = props.invoiceIds.length
    ? props.invoiceIds[0].date.split("/")
    : 0;
  const nextInvoiceDate =
    props.invoiceIds && splitDate[1] <= 12
      ? `${splitDate[0]}/${Number(splitDate[1]) + 1}/${splitDate[2]}`
      : 0;
  const accountBalance =
    props.invoiceIds.length > 0
      ? props.invoiceIds
          .map((obj) => (obj.status == "due" ? obj.price : 0))
          .reduce((prev, curr) => Number(prev) + Number(curr))
      : 0;
  const theme = useTheme();
  const isBelowThreshold = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <Grid
        container
        sx={{
          position: isBelowThreshold ? "static" : "sticky",
          top: isBelowThreshold ? "auto" : "5rem",
          padding: isBelowThreshold
            ? "8px 32px 18px 32px"
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
              <Typography variant="h4">
                {props.invoiceIds.length > 0 ? accountBalance : 0}
              </Typography>
              <EuroIcon fontSize="large" />
            </Grid>
          </Grid>

          {isBelowThreshold && props.invoiceIds.length > 0 ? (
            <BillingCard invoice={props.invoiceIds} />
          ) : null}

          <Grid
            item
            container
            sx={{
              color: "white",
              paddingTop: "10px",
              justifyContent: "center",
            }}
          >
            <Typography align="center">
              Next invoice will be issued on{" "}
              {props.invoiceIds.length && splitDate[1] == 12
                ? `${splitDate[0]}/${"01"}/${Number(splitDate[2]) + 1}`
                : props.invoiceIds.length
                ? nextInvoiceDate
                : "21/10/2021"}
              .
            </Typography>
          </Grid>
        </Grid>

        {!isBelowThreshold && props.invoiceIds.length > 0 ? (
          <Grid item>
            <BillingCard invoice={props.invoiceIds} />
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}
