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
        flexFlow: "column nowarp",
        margin: "auto",
      }}
      justifyContent="space-evenly"
    >
      <Grid item>
        <CheckIcon sx={{ color: "white" }} />
        <Typography variant="body1" sx={{ color: "white" }}>
          Overdue Balance
        </Typography>
        <Typography sx={{ color: "white" }}>0&euro;</Typography>
      </Grid>

      <Grid item>
        <Divider orientation="vertical" textAlign="center" light sx={{}} />
      </Grid>

      <Grid
        item
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CalendarTodayIcon sx={{ color: "white" }} />

        <Typography variant="body1" sx={{ color: "white" }}>
          Due on 21/10/2020
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          49,99&euro;
        </Typography>
      </Grid>
    </Grid>
  );
}
