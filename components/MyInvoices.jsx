import InvoiceCard from "./InvoiceCard";
import { Container, Grid, Typography } from "@mui/material";

export default function Invoices(props) {
  return (
    <Grid
      container
      sx={{
        "&>*+*": { marginTop: "16px" },
        background: "#f2f5f8",
        p: 3,
      }}
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
            price={number.price}
            status={number.status}
            date={number.date}
            color={number.statusColor}
            href="/invoices/[invoice]"
          />
        );
      })}
    </Grid>
  );
}
