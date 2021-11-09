import InvoiceCard from "./InvoiceCard";
import { Grid, Typography } from "@mui/material";

export default function Invoices() {
  return (
    <>
      <Typography variant="body1" gutterBottom>
        <strong>My invoices</strong>
      </Typography>
      <Grid
        container
        sx={{ "&>*+*": { marginTop: "16px" }, p: 5, background: "#f2f5f8" }}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
      </Grid>
    </>
  );
}
