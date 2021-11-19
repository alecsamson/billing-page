import InvoiceCard from "./InvoiceCard";
import DesktopInvoiceCard from "./DesktopInvoiceCard";
import { Box, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function Invoices(props) {
  const theme = useTheme();
  const isBelowThreshold = useMediaQuery(theme.breakpoints.down("md"));

  let [isToggled, setIsToggled] = useState([true, props.invoiceIds[0]]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Grid
        item
        container
        direction="column"
        sx={{
          background: "#f2f5f8",
          paddingBottom: isBelowThreshold ? "32px" : "64px",
        }}
      >
        <Grid
          item
          xs={8}
          sx={{
            "&>*+*": { marginTop: "16px" },
            p: 1,
            width: isBelowThreshold ? "100%" : isToggled[0] ? "100%" : "70%",
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
          })}
        </Grid>
        {!isToggled[0] && (
          <Grid item xs={4}>
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
    </Box>
  );
}
