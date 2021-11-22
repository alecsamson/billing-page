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

  const isBelowThreshold = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid container sx={{ height: "100%", width: "100%" }}>
      <DesktopSidebar sx={{ background: "#fff" }} />
      <Grid
        item
        sx={{
          width: isBelowThreshold ? "100vw" : "calc(100vw - 15rem)",
          marginLeft: isBelowThreshold ? 0 : "auto",
          background: "#f2f5f8",
        }}
      >
        <BillingHeader />
        <Billing invoiceIds={props.state} />

        <MyInvoices invoiceIds={props.state} />
      </Grid>

      <DesktopFooter />
    </Grid>
  );
}
