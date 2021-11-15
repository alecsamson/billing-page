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
      <Typography component="div" align="center" sx={{ color: "white" }}>
        <CheckIcon />
        <Typography variant="body1" sx={{ color: "white" }}>
          Overdue Balance
        </Typography>
        <Typography>0{"\u20AC"}</Typography>
      </Typography>

      <Divider
        orientation="vertical"
        textAlign="center"
        light
        flexItem
        sx={{ borderColor: "white" }}
      />

      <Typography component="div" align="center" sx={{ color: "white" }}>
        <CalendarTodayIcon />
        <Typography variant="body1">Due on 21/10/2020</Typography>
        <Typography variant="body2">49,99{"\u20AC"}</Typography>
      </Typography>
    </Grid>
  );
}
