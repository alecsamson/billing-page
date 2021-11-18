import InvoiceCard from "./InvoiceCard";
import { Container, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Invoices(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      sx={{
        background: "#f2f5f8",
      }}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        item
        sx={{
          "&>*+*": { marginTop: "16px" },
          p: 3,
          width: matches ? "100%" : "70%",
        }}
      >
        <Typography
          variant="body1"
          align="left"
          gutterBottom
          sx={{ marginLeft: matches ? "2rem" : "5rem" }}
        >
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
    </Grid>
  );
}
