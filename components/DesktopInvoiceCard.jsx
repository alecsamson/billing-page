import { Grid, Typography, Container } from "@mui/material";

export default function DesktopInvoiceCard() {
  return (
    <Grid
      container
      justifyContent="space-around"
      sx={{
        maxWidth: "22rem",
        backgroundColor: " #FFFFFF",
        marginTop: "4.2rem",
      }}
    >
      <Grid container sx={{ p: 2.5 }} justifyContent="space-between">
        <Typography
          sx={{
            display: "flex",
            margin: "0 24px",
            padding: 2,
            width: "100%",
            color: "#08a5ab",
            fontWeight: "bold",
          }}
        >
          View invoice as PDF
        </Typography>
        <Typography component="div">
          <Typography variant="body1" sx={{ color: "#707b83" }}>
            Invoice number
          </Typography>
          <Typography variant="body2" sx={{ color: "#32424e" }}>
            123455
          </Typography>
        </Typography>

        <Typography component="div" align="center">
          <Typography variant="body1" sx={{ color: "#707b83" }}>
            Due date{" "}
          </Typography>
          <Typography variant="body2" sx={{ color: "#32424e" }}>
            21/10/2020
          </Typography>
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
          <Typography variant="body2">21/09/2020 - 21/10/2020</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">$49.00</Typography>
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
        <Typography variant="h8">49,99&euro;</Typography>
      </Grid>
    </Grid>
  );
}
