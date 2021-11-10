import InvoiceCard from "./InvoiceCard";
import { Container, Grid, Typography } from "@mui/material";

export default function Invoices() {
  return (
    <Container maxWidth="md">
      <Grid
        container
        sx={{
          "&>*+*": { marginTop: "16px" },
          p: 3,
          background: "#f2f5f8",
        }}
        rowSpacing={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="body1"
          gutterBottom
          sx={{ alignSelf: "flex-start" }}
        >
          <strong>My invoices</strong>
        </Typography>
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
      </Grid>
    </Container>
  );
}
