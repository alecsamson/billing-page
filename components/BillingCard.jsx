import { Container, Grid, Typography, Divider } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import CheckIcon from "@mui/icons-material/Check";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function BillingCard() {
  return (
    <Grid
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
          <CheckIcon />
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: "white" }}>
          Overdue Balance
        </Typography>
        <Typography sx={{ color: "white" }}>
          0
          <EuroIcon fontSize="small" />
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

      <Grid
        item
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography gutterBottom variant="subtitle1" sx={{ color: "white" }}>
          <CalendarTodayIcon />
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: "white" }}>
          Due on 21/10/2020
        </Typography>
        <Grid container item sx={{ alignItems: "baseline" }}>
          <Typography variant="body2" sx={{ color: "white" }}>
            49,99
            <EuroIcon fontSize="small" />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}