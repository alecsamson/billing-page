import { Container, Grid, Typography, Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function BillingCard(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      sx={{
        background: "#419ec1",
        padding: matches ? "8px" : "52px 64px",
        flexWrap: matches ? "nowrap" : "wrap",
        margin: "auto",
        justifyContent: matches ? "center" : "space-around",
      }}
    >
      <Typography
        component="div"
        align="center"
        sx={{ color: "white", padding: "0 24px" }}
      >
        <CheckIcon />
        <Typography variant="body1" sx={{ color: "white" }}>
          Overdue Balance
        </Typography>
        <Typography>
          {props.invoice
            .map((obj) => (obj.status == "overdue" ? obj.price : ""))
            .reduce((prev, curr) => Number(prev) + Number(curr))}
          {"\u20AC"}
        </Typography>
      </Typography>

      <Divider
        orientation="vertical"
        textAlign="center"
        light
        flexItem
        sx={{ borderColor: "white" }}
      />

      <Typography
        component="div"
        align="center"
        sx={{ color: "white", padding: "0 24px" }}
      >
        <CalendarTodayIcon />
        <Typography variant="body1">Due on {props.invoice[0].date}</Typography>
        <Typography variant="body2">
          {props.invoice[0].price}
          {"\u20AC"}
        </Typography>
      </Typography>
    </Grid>
  );
}
