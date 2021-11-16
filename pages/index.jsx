import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Billing from "../components/Billing";
import MyInvoices from "../components/MyInvoices";
import DesktopSidebar from "../components/DesktopSidebar";
import DesktopFooter from "../components/DesktopFooter";
import { Container, Typography, Grid, Box } from "@mui/material";

const invoiceNumbers = [
  {
    id: 123455123455,
    price: 49.99,
    status: "ISSUED",
    statusColor: "#63cefb",
    date: "21/10/2020",
  },
  {
    id: 234567234567,
    price: 79.99,
    status: "overdue",
    statusColor: "#cf4520",
    date: "21/09/2020",
  },
  {
    id: 345678345678,
    price: 49.99,
    status: "overdue",
    statusColor: "#cf4520",
    date: "21/08/2020",
  },
  {
    id: 456789456789,
    price: 49.99,
    status: "paid",
    statusColor: "#7DBE00",
    date: "21/07/2020",
  },
  {
    id: 567890567890,
    price: 49.99,
    status: "paid",
    statusColor: "#7DBE00",
    date: "21/06/2020",
  },
];

export default function Home() {
  return (
    <Grid
      container
      sx={{ height: "100%", width: "100%", position: "relative" }}
    >
      <DesktopSidebar />
      <Grid item sx={{ width: "85%" }}>
        <Billing />
        <MyInvoices invoiceIds={invoiceNumbers} />
      </Grid>

      <DesktopFooter />
    </Grid>
  );
}
