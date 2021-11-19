import InvoiceCard from "./InvoiceCard";
import DesktopInvoiceCard from "./DesktopInvoiceCard";
import { Container, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Invoices(props) {
  const theme = useTheme();
  const isBelowThreshold = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      sx={{
        maxWidth: "calc()",
        background: "#f2f5f8",
        paddingBottom: isBelowThreshold ? "32px" : "64px",
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
          width: isBelowThreshold ? "100%" : "70%",
        }}
      >
        <Typography
          variant="body1"
          align="left"
          gutterBottom
          sx={{
            marginLeft: isBelowThreshold ? "1rem" : "2rem",
            paddingTop: "1rem",
          }}
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
              href="/invoices/${props.id}"
            />
          );
        })}
      </Grid>
      {!isBelowThreshold && (
        <Grid item sx={{ right: 0 }}>
          <DesktopInvoiceCard />
        </Grid>
      )}
    </Grid>
  );
}
