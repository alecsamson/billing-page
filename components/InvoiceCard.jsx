import { Grid, Typography, Container, Box } from "@mui/material";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function InvoiceCard(props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { push } = useRouter();
  const theme = useTheme();

  const statusColor = {
    issued: "#63cefb",
    overdue: "#cf4520",
    paid: "#7DBE00",
  };

  const today = new Date();
  const splitDate = props.date.split("/");
  const invoiceDate = new Date(
    `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`
  );
  const invoiceStatus =
    props.status === "paid"
      ? "paid"
      : today < invoiceDate
      ? "issued"
      : today > invoiceDate
      ? "overdue"
      : null;

  const isBelowThreshold = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      onClick={isBelowThreshold ? () => push(props.href) : props.onClick}
    >
      <Grid
        item
        container
        sx={{
          p: 2,
          width: "100%",
          margin: "auto",
          boxShadow: 1,
          position: "relative",
          background: "#ffffff",
        }}
        justifyContent="space-between"
      >
        <Grid item>
          <Typography gutterBottom variant="subtitle1">
            Invoice {props.id}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>{months[Number(splitDate[1] - 1)]}</strong>
          </Typography>
          <Typography variant="body2">
            {invoiceStatus == "paid" ? "Paid" : "Due"} on{" "}
            <strong>{props.date}</strong>
          </Typography>
        </Grid>

        <Typography
          variant="subtitle1"
          sx={{
            position: "absolute",
            color: "white",
            textTransform: "uppercase",
            fontWeight: "bold",
            right: 0,
            backgroundColor: statusColor[invoiceStatus],
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            padding: "0 8px",
          }}
        >
          {invoiceStatus}
        </Typography>
        <Grid item sx={{ alignSelf: "flex-end" }}>
          <Typography variant="subtitle1">
            {props.price}
            {"\u20AC"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
