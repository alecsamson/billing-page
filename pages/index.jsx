import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Billing from "../components/Billing";
import MyInvoices from "../components/MyInvoices";
import DesktopSidebar from "../components/DesktopSidebar";
import { Container, Typography, Grid } from "@mui/material";

const invoiceNumbers = [
  { id: 123455 },
  { id: 234567 },
  { id: 345678 },
  { id: 456789 },
  { id: 567890 },
];

export default function Home() {
  return (
    <>
      <Grid container sx={{ height: "100%" }}>
        <DesktopSidebar sx={{ display: { xs: "none", md: "flex" } }} />
        <Grid container sx={{ width: "80%" }}>
          <Billing />
          <MyInvoices invoiceIds={invoiceNumbers} />
        </Grid>
      </Grid>
    </>
  );
}
