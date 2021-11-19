import { Grid, Typography, Container } from "@mui/material";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function InvoiceCard(props) {
  const splitDate = props.date.split("/");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { push } = useRouter();
  const theme = useTheme();

  const isBelowThreshold = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container
      onClick={isBelowThreshold ? () => push(props.href) : props.onClick}
    >
      <Grid
        container
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: "100%",
          boxShadow: 1,
          position: "relative",
          background: "#ffffff",
        }}
        justifyContent="space-between"
      >
        <Grid item>
          <Typography gutterBottom variant="subtitle1">
            Invoice {props.id}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>{months[Number(splitDate[1] - 1)]}</strong>
          </Typography>
          <Typography variant="body2">
            Due on <strong>{props.date}</strong>
          </Typography>
        </Grid>

        <Typography
          variant="subtitle1"
          sx={{
            position: "absolute",
            color: "white",
            textTransform: "uppercase",
            fontWeight: "bold",
            right: 0,
            backgroundColor: props.color,
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            padding: "0 8px",
          }}
        >
          {props.status}
        </Typography>
        <Grid item sx={{ alignSelf: "flex-end" }}>
          <Typography variant="subtitle1">
            {props.price}
            {"\u20AC"}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
