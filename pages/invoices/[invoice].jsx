import { useRouter } from "next/router";
import { Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Invoice(props = null) {
  const router = useRouter();
  const { query } = router;

  const myInvoice = props.state.find((item) => item.id == query.invoice);
  const splitDate = myInvoice.date.split("/");
  const initialDate = `${splitDate[0]}/0${splitDate[1] - 1}/${splitDate[2]}`;

  return (
    <Grid container justifyContent="space-around">
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          p: 3,
        }}
      >
        <ArrowBackIcon type="button" onClick={() => router.back()} />
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", paddingLeft: "16px" }}
        >
          October
        </Typography>
      </Grid>
      <Grid
        container
        sx={{
          background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
          p: 2.5,
        }}
        justifyContent="space-between"
      >
        <Typography component="div" sx={{ color: "white" }}>
          <Typography variant="body1">Invoice number</Typography>
          <Typography variant="body2">{myInvoice.id}</Typography>
        </Typography>

        <Typography component="div" align="center" sx={{ color: "white" }}>
          <Typography variant="body1">Due date </Typography>
          <Typography variant="body2">{myInvoice.date}</Typography>
        </Typography>
      </Grid>

      <Grid
        item
        container
        justifyContent="space-between"
        sx={{ padding: "24px 24px 0 24px", fontWeight: "bold" }}
      >
        <Typography gutterBottom variant="h8">
          Plan details
        </Typography>
        <Typography variant="h8"> Amount </Typography>
      </Grid>

      <Grid container justifyContent="space-between" sx={{ p: "8px 24px" }}>
        <Grid item>
          <Typography variant="body1" gutterBottom>
            ILIMITADA 30
          </Typography>
          <Typography variant="body2">
            {initialDate} - {myInvoice.date}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            {myInvoice.price}
            {"\u20AC"}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        sx={{
          borderTop: "2px solid #e7e7e7",
          margin: "0 24px",
          fontWeight: "bold",
          paddingTop: "25px",
          fontSize: "20px",
          p: 2,
        }}
        justifyContent="space-between"
      >
        <Typography variant="h8">Sub Total</Typography>
        <Typography variant="h8">{myInvoice.price}&euro;</Typography>
      </Grid>

      <Typography
        align="center"
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "0 24px",
          padding: 2,
          width: "100%",
          border: "1px solid black",
          borderRadius: "30px",
          fontWeight: "bold",
        }}
      >
        VIEW INVOICE AS PDF
      </Typography>
    </Grid>
  );
}
