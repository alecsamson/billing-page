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
        <Typography gutterBottom variant="subtitle1" sx={{ color: "white" }}>
          Check Icon
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: "white" }}>
          Overdue Balance
        </Typography>
        <Typography sx={{ color: "white" }}>
          0<EuroIcon fontSize="small" />
        </Typography>
      </Grid>

      <Grid item>
        <Divider
          orientation="vertical"
          textAlign="center"
          light="true"
          sx={{ color: "white", light: "true" }}
        />
      </Grid>

      <Grid item>
        <Typography gutterBottom variant="subtitle1" sx={{ color: "white" }}>
          Calendar Icon
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: "white" }}>
          Due on 21/10/2020
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          49,99
          <EuroIcon fontSize="small" />
        </Typography>
      </Grid>
    </Grid>
  );
}
