import styles from "../styles/Home.module.css";
import Billing from "../components/Billing";
import MyInvoices from "../components/MyInvoices";
import DesktopSidebar from "../components/DesktopSidebar";
import DesktopFooter from "../components/DesktopFooter";
import BillingHeader from "../components/BillingHeader";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Home(props) {
  const theme = useTheme();

  const isBelowThreshold = useMediaQuery(theme.breakpoints.down("md"));

  // const statusColor = {
  //   issued: "#63cefb",
  //   overdue: "#cf4520",
  //   paid: "#7DBE00",
  // };

  // const today = new Date();
  // const splitDate = props.state.date.split("/");
  // const invoiceDate = new Date(
  //   `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`
  // );
  // const invoiceStatus =
  //   props.status === "paid"
  //     ? "paid"
  //     : today < invoiceDate
  //     ? "issued"
  //     : today > invoiceDate
  //     ? "overdue"
  //     : null;

  return (
    <Grid container sx={{ height: "100%", width: "100%" }}>
      <DesktopSidebar sx={{ background: "#fff" }} />
      <Grid
        item
        sx={{
          width: isBelowThreshold ? "100vw" : "calc(100vw - 15rem)",
          marginLeft: isBelowThreshold ? 0 : "auto",
        }}
      >
        <BillingHeader />
        <Billing invoiceIds={props.state} />

        <MyInvoices
          invoiceIds={props.state}
          // color={statusColor}
          // invoiceStatus={invoiceStatus}
        />
      </Grid>

      <DesktopFooter />
    </Grid>
  );
}
