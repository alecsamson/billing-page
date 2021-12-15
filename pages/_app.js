import App from "next/app";
import Head from "next/head";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/globals.css";
import axios from "axios";
const theme = createTheme();

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
function BillingApp({ Component, pageProps }) {
  React.useEffect(() => {
    axios.get("/api").then((response) => {
      setState(response.data);
      console.log("State updated to" + state);
    });

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [state, setState] = React.useState(0);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component state={state ? state : 0} {...pageProps} />
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
