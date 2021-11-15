import { Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function InvoiceCard(props) {
  return (
    <Link href={props.href} as={`/invoices/${props.id}`} passHref>
      <Grid
        item
        container
        sx={{
          p: 3,
          margin: "auto",
          maxWidth: 500,
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
            Due on <strong>21/10/2020</strong>
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
            backgroundColor: "#63cefb",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            padding: "0 8px",
          }}
        >
          Issued
        </Typography>
        <Grid item sx={{ alignSelf: "flex-end" }}>
          <Typography variant="subtitle1">19.00{"\u20AC"}</Typography>
        </Grid>
      </Grid>
    </Link>
  );
}
