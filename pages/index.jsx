import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Billing from "../components/Billing";
import MyInvoices from "../components/MyInvoices";
import DesktopSidebar from "../components/DesktopSidebar";
import DesktopFooter from "../components/DesktopFooter";
import { Container, Typography, Grid } from "@mui/material";

const invoiceNumbers = [
  { id: 123455123455 },
  { id: 234567234567 },
  { id: 345678345678 },
  { id: 456789456789 },
  { id: 567890567890 },
];

export default function Home() {
  return (
    <Grid
      container
      sx={{ height: "100%", width: "100%", position: "relative" }}
    >
      <DesktopSidebar
        sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
      />
      <Grid item sx={{ width: "85%" }}>
        <Billing />
        <MyInvoices invoiceIds={invoiceNumbers} />
      </Grid>
      <DesktopFooter />
    </Grid>
  );
}
