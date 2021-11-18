import InvoiceCard from "./InvoiceCard";
import DesktopInvoiceCard from "./DesktopInvoiceCard";
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
      direction="row"
    >
      <Grid
        item
        container
        direction="column"
        sx={{
          "&>*+*": { marginTop: "16px" },
          p: 1,
          width: matches ? "100%" : "70%",
        }}
      >
        <Typography
          variant="body1"
          align="left"
          gutterBottom
          sx={{ marginLeft: matches ? "1rem" : "2rem", paddingTop: "1rem" }}
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
      {matches ? (
        ""
      ) : (
        <Grid item sx={{ right: 0 }}>
          <DesktopInvoiceCard />
        </Grid>
      )}
    </Grid>
  );
}
