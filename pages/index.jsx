import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Billing from "../components/Billing";
import Invoices from "../components/Invoices";
import { Container } from "@mui/material";

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
      <Billing />
      {/* {invoiceNumbers.map((number) => {
    return <div key={invoiceNumbers.id}>
      <Link as={`/invoices/${number.id}`} href="/invoices/[invoice]">
      <a>{number.id}</a>
      </Link>
      </div>
  })} */}
      <Invoices key={invoiceNumbers.id} />
    </>
  );
}
