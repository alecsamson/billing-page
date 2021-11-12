import { useRouter } from "next/router";
import { Box, Divider, Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Invoice({ href, name }) {
  const router = useRouter();
  return (
    <Grid container>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ArrowBackIcon />
        <Typography>October</Typography>
      </Box>
      <Grid
        container
        sx={{ background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)" }}
      >
        <Typography component="div" align="center" sx={{ color: "white" }}>
          <Typography variant="body1">Invoice number</Typography>
          <Typography variant="body2">{router.query.invoice}</Typography>
        </Typography>

        <Typography component="div" align="center" sx={{ color: "white" }}>
          <Typography variant="body1">Due date </Typography>
          <Typography variant="body2">21/10/2020</Typography>
        </Typography>
      </Grid>

      <Grid item sx={{ flexDirection: "column" }}>
        <Typography gutterBottom variant="h8">
          Plan details
        </Typography>
        <Typography variant="body1" gutterBottom>
          ILIMITADA 30
        </Typography>
        <Typography variant="body2">21/09/2020 - 21/10/2020</Typography>
      </Grid>

      <Grid item sx={{}}>
        <Typography variant="h8"> Amount </Typography>
        <Typography variant="subtitle1">$19.00</Typography>
      </Grid>

      <Grid item container sx={{ borderTop: "1px solid black" }}>
        <Typography variant="h7">Sub Total</Typography>
        <Typography variant="h7">49,99&euro;</Typography>
      </Grid>

      <Typography sx={{ border: "1px solid black", borderRadius: "10px" }}>
        VIEW INVOICE AS PDF
      </Typography>
    </Grid>
  );
}
