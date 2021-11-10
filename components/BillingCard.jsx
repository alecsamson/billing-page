import { Container, Grid, Typography, Divider } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";

export default function BillingCard() {
  return (
    <Grid
      item
      container
      sx={{
        background: "#419ec1",
        p: 1,
        margin: "auto",
      }}
      justifyContent="space-evenly"
    >
      <Grid item>
        <Typography gutterBottom variant="subtitle1">
          Check Icon
        </Typography>
        <Typography variant="body1" gutterBottom>
          Overdue Balance
        </Typography>
        <Typography sx={{ cursor: "pointer" }} variant="body2">
          0<EuroIcon fontSize="small" />
        </Typography>
      </Grid>
      <Grid item>
        <Divider variant="middle" orientation="vertical" />
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="subtitle1">
          Calendar Icon
        </Typography>
        <Typography variant="body1" gutterBottom>
          Due on 21/10/2020
        </Typography>
        <Typography sx={{ cursor: "pointer" }} variant="body2">
          49,99
          <EuroIcon fontSize="small" />
        </Typography>
      </Grid>
    </Grid>
  );
}
