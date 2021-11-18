import { Grid, Typography, Container } from "@mui/material";
import Link from "next/link";

export default function InvoiceCard(props) {
  return (
    <Link href={props.href} as={`/invoices/${props.id}`} passHref>
      <Container>
        <Grid
          container
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: "100%",
            flexGrow: 1,
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
              <strong>October</strong>
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
    </Link>
  );
}
