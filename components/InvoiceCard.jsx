import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InvoiceCard() {
return (
<Card sx={{ width: 300, height: 300,  margin: 1, padding: 1}}>
    <CardContent>

      <Typography sx={{ fontSize: 14 }} color="text.secondary" >
      Invoice 00584758868 
      </Typography>

      <Typography sx={{ fontSize: 14, textAlign: 'right', m: 1  }} color="text.secondary" >
      Paid 
      </Typography>

      <Typography variant="h5" component="div">
        October
      </Typography>

      <Typography variant="body2">
      Due on 21/10/2020
      </Typography>

      <Typography sx={{ textAlign: 'right', m: 1 }}>
      49,99€
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
)
}