import InvoiceCard from "./InvoiceCard";
import { Container, Grid, Typography } from "@mui/material";

export default function Invoices(props) {
  return (
    <Grid
      container
      sx={{
        "&>*+*": { marginTop: "16px" },
        background: "#f2f5f8",
        p: "2rem 12rem",
        maxHeight: "100%",
      }}
      rowSpacing={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="body1" gutterBottom sx={{ alignSelf: "flex-start" }}>
        <strong>My invoices</strong>
      </Typography>
      {props.invoiceIds.map((number) => {
        return (
          <InvoiceCard
            key={number.id}
            id={number.id}
            href="/invoices/[invoice]"
          />
        );
      })}
    </Grid>
  );
}
