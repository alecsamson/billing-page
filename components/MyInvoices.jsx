import InvoiceCard from "./InvoiceCard";
import DesktopInvoiceCard from "./DesktopInvoiceCard";
import { Box, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function MyInvoices(props) {
  const theme = useTheme();
  const isBelowThreshold = useMediaQuery(theme.breakpoints.down("lg"));

  let [isToggled, setIsToggled] = useState({
    status: false,
    invoice: props.invoiceIds[0],
    border: "none",
  });

  return (
    <Grid
      item
      container
      lg={12}
      sx={{
        justifyContent: isToggled.status ? "center" : "space-between",
        background: "#f2f5f8",
        height: props.invoiceIds.length < 0 ? "100vh" : "auto",
      }}
    >
      <Grid
        item
        container
        direction="column"
        lg={isToggled.status ? 7 : 8}
        sx={{
          padding: "0 24px 0 24px",
          alignItems: "center",
          maxWidth: isToggled.status ? "661px" : "100%",

          background: "#f2f5f8",
          paddingBottom: isBelowThreshold ? "32px" : "64px",
          "&>*+*": { marginTop: "16px" },
        }}
      >
        <Typography
          align="left"
          sx={{
            padding: "1rem 0 0 1rem",
            alignSelf: "flex-start",
          }}
        >
          <strong>My invoices</strong>
        </Typography>

        {props.invoiceIds.length < 0 ? (
          <Typography
            sx={{
              padding: "0 0 0 1rem",
              color: "#6c7881",
              textAlign: "left",
              paddingLeft: isBelowThreshold ? "10%" : "18%",
            }}
          >
            There are no invoices available!
          </Typography>
        ) : (
          props.invoiceIds.map((number) => {
            return (
              <InvoiceCard
                selectedInvoice={isToggled.invoice.id}
                selectedBorder={isToggled.border}
                onClick={() =>
                  setIsToggled(
                    !isToggled.status
                      ? {
                          status: isToggled.status,
                          invoice: number,
                          border: "2px solid rgba(10, 165, 171, 0.4)",
                        }
                      : {
                          status: !isToggled.status,
                          invoice: isToggled.invoice,
                          border: "2px solid rgba(10, 165, 171, 0.4)",
                        }
                  )
                }
                key={number.id}
                id={number.id}
                price={number.price}
                status={number.status}
                date={number.date}
                href={`/invoices/${number.id}`}
              />
            );
          })
        )}
      </Grid>

      {!isToggled.status && !isBelowThreshold && (
        <Grid item lg={4} sx={{ paddingRight: "1.5rem", maxWidth: "345px" }}>
          <DesktopInvoiceCard
            onClick={() => {
              setIsToggled({
                status: !isToggled.status,
                invoice: isToggled.invoice,
                border: "none",
              });
            }}
            key={isToggled.invoice.id}
            id={isToggled.invoice.id}
            price={isToggled.invoice.price}
            status={isToggled.invoice.status}
            date={isToggled.invoice.date}
          />
        </Grid>
      )}
    </Grid>
  );
}
