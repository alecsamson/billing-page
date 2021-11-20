import App from "next/app";
import Head from "next/head";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/globals.css";
const theme = createTheme();

const invoiceNumbers = [
  {
    id: 123455123455,
    price: 49.99,
    status: "issued",
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
    id: 341678345678,
    price: 49.99,
    status: "overdue",
    statusColor: "#cf4520",
    date: "21/08/2020",
  },
  {
    id: 456589456789,
    price: 49.99,
    status: "paid",
    statusColor: "#7DBE00",
    date: "21/07/2020",
  },
  {
    id: 547890567890,
    price: 49.99,
    status: "paid",
    statusColor: "#7DBE00",
    date: "21/06/2020",
  },
  {
    id: 356789456789,
    price: 49.99,
    status: "paid",
    statusColor: "#7DBE00",
    date: "21/07/2020",
  },
  {
    id: 267890567890,
    price: 49.99,
    status: "paid",
    statusColor: "#7DBE00",
    date: "21/06/2020",
  },
  {
    id: 156789456789,
    price: 49.99,
    status: "paid",
    statusColor: "#7DBE00",
    date: "21/07/2020",
  },
];

function BillingApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [state, setState] = React.useState(invoiceNumbers);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component state={state} {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default BillingApp;

export async function getInitialProps(appContext) {
  return {
    ...(await App.getInitialProps(appContext)),
  };
}
