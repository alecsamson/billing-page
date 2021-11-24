import InvoiceCard from "./InvoiceCard";
import DesktopInvoiceCard from "./DesktopInvoiceCard";
import { Box, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function MyInvoices(props) {
  const theme = useTheme();
  const isBelowThreshold = useMediaQuery(theme.breakpoints.down("lg"));

  let [toggleSwitch, setIsToggled] = useState({
    status: true,
    invoice: props.invoiceIds[0],
    border: "none",
  });

  return (
    <Grid
      item
      container
      lg={12}
      sx={{
        justifyContent: !toggleSwitch.status ? "space-between" : "center",
        background: "#f2f5f8",
        height: !props.invoiceIds.length > 0 ? "100vh" : "auto",
      }}
    >
      <Grid
        item
        container
        direction="column"
        lg={toggleSwitch.status ? 7 : 8}
        sx={{
          padding: "0 24px 0 24px",
          alignItems: "center",
          maxWidth: toggleSwitch.status ? "100%" : "661px",

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

        {!props.invoiceIds.length > 0 ? (
          <Typography
            sx={{
              display: "flex",
              padding: "0 0 0 1rem",
              color: "#6c7881",
              // textAlign: "left",
              // paddingLeft: isBelowThreshold ? "10%" : "18%",
            }}
          >
            There are no invoices available!
          </Typography>
        ) : (
          props.invoiceIds.map((number) => {
            return (
              <InvoiceCard
                selectedInvoice={toggleSwitch.invoice.id}
                selectedBorder={toggleSwitch.border}
                onClick={() =>
                  setIsToggled(
                    !toggleSwitch.status
                      ? {
                          status: toggleSwitch.status,
                          invoice: number,
                          border: "2px solid rgba(10, 165, 171, 0.4)",
                        }
                      : {
                          status: !toggleSwitch.status,
                          invoice: number,
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

      {!toggleSwitch.status && !isBelowThreshold && (
        <Grid item lg={4} sx={{ paddingRight: "1.5rem", maxWidth: "345px" }}>
          <DesktopInvoiceCard
            onClick={() => {
              setIsToggled({
                status: !toggleSwitch.status,
                invoice: toggleSwitch.invoice,
                border: "none",
              });
            }}
            key={toggleSwitch.invoice.id}
            id={toggleSwitch.invoice.id}
            price={toggleSwitch.invoice.price}
            status={toggleSwitch.invoice.status}
            date={toggleSwitch.invoice.date}
          />
        </Grid>
      )}
    </Grid>
  );
}
