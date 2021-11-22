import InvoiceCard from "./InvoiceCard";
import DesktopInvoiceCard from "./DesktopInvoiceCard";
import { Box, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function MyInvoices(props) {
  const theme = useTheme();
  const isBelowThreshold = useMediaQuery(theme.breakpoints.down("md"));

  let [isToggled, setIsToggled] = useState([true, props.invoiceIds[0]]);

  return (
    <Grid
      container
      sx={{
        flexDirection: "row",
        justifyContent: isToggled[0] ? "space-between" : "center",
        background: "#f2f5f8",
        height: props.invoiceIds > 0 ? "100vh" : "auto",
      }}
    >
      <Grid
        item
        direction="column"
        md={isToggled[0] ? 12 : 8}
        sx={{
          flexGrow: isToggled[0] ? 4 : 0,
          padding: "0 24px 0 24px",
          maxWidth: "661px",
          background: "#f2f5f8",
          paddingBottom: isBelowThreshold ? "32px" : "64px",
          "&>*+*": { marginTop: "16px" },
        }}
      >
        <Typography
          align="left"
          gutterBottom
          sx={{
            paddingTop: "1rem",
            alignSelf: "flex-start",
          }}
        >
          <strong>My invoices</strong>
        </Typography>

        {props.invoiceIds.length > 0 == 0 ? (
          <Typography
            sx={{
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
                onClick={() => setIsToggled([!isToggled[0], number])}
                key={number.id}
                id={number.id}
                price={number.price}
                status={number.status}
                date={number.date}
                color={number.statusColor}
                href={`/invoices/${number.id}`}
              />
            );
          })
        )}
      </Grid>

      {!isToggled[0] && !isBelowThreshold && (
        <Grid item md={4} sx={{ paddingRight: "1.5rem", maxWidth: "345px" }}>
          <DesktopInvoiceCard
            onClick={() => setIsToggled([!isToggled[0]])}
            key={isToggled[1].id}
            id={isToggled[1].id}
            price={isToggled[1].price}
            status={isToggled[1].status}
            date={isToggled[1].date}
          />
        </Grid>
      )}
    </Grid>
  );
}
