import { Grid, Typography, Container } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function DesktopInvoiceCard(props) {
  const splitDate = props.date.split("/");
  const initialDate = `${splitDate[0]}/0${splitDate[1] - 1}/${splitDate[2]}`;

  return (
    <Grid
      container
      sx={{
        position: "sticky",
        zIndex: 100,
        right: 0,
        top: 336.5,
        maxWidth: "22rem",
        backgroundColor: " #FFFFFF",
        marginTop: "4.2rem",
      }}
      justifyContent="space-around"
    >
      <Grid container sx={{ p: 2.5 }} justifyContent="space-between">
        <Typography
          sx={{
            display: "flex",
            padding: "16px 0",
            width: "100%",
            color: "#08a5ab",
            fontWeight: "bold",
            justifyContent: "space-between",
          }}
        >
          View invoice as PDF
          <CloseIcon sx={{ color: "black" }} onClick={props.onClick} />
        </Typography>

        <Typography component="div">
          <Typography variant="body1" sx={{ color: "#707b83" }}>
            Invoice number
          </Typography>
          <Typography variant="body2" sx={{ color: "#32424e" }}>
            {props.id}
          </Typography>
        </Typography>

        <Typography component="div" align="center">
          <Typography variant="body1" sx={{ color: "#707b83" }}>
            Due date
          </Typography>
          <Typography variant="body2" sx={{ color: "#32424e" }}>
            {props.date}
          </Typography>
        </Typography>
      </Grid>

      <Grid
        item
        container
        justifyContent="space-between"
        sx={{ padding: "0 24px ", fontWeight: "bold" }}
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
            {initialDate} - {props.date}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">{props.price}&euro;</Typography>
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
        <Typography variant="h8">{props.price}&euro;</Typography>
      </Grid>
    </Grid>
  );
}
