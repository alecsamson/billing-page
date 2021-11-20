import { Grid, Typography, Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HistoryIcon from "@mui/icons-material/History";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function BillingCard(props = null) {
  const overdue = props.invoice.length
    ? props.invoice
        .map((obj) => (obj.status == "overdue" ? obj.price : 0))
        .reduce((prev, curr) => Number(prev) + Number(curr))
    : 0;
  const areBillsOverdue = overdue > 0;
  const theme = useTheme();
  const isBelowThreshold = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      sx={{
        background: "#419ec1",
        padding: isBelowThreshold ? "8px" : "52px 64px",
        flexWrap: isBelowThreshold ? "nowrap" : "wrap",
        margin: "auto",
        justifyContent: isBelowThreshold ? "center" : "space-around",
      }}
    >
      <Typography
        component="div"
        align="center"
        sx={{ color: "white", padding: "0 24px" }}
      >
        {areBillsOverdue ? <HistoryIcon /> : <CheckIcon />}
        <Typography variant="body1" sx={{ color: "white" }}>
          Overdue Balance
        </Typography>
        <Typography>
          {overdue}
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
        <Typography variant="body1">
          Due on {props.invoice.length ? props.invoice[0].date : 0}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "1rem" }}>
          {props.invoice.length ? props.invoice[0].price : 0}
          {"\u20AC"}
        </Typography>
      </Typography>
    </Grid>
  );
}
