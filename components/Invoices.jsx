import InvoiceCard from './InvoiceCard';
import {Grid, Typography} from '@mui/material'

export default function Invoices() {
    return (<>
        <Typography variant="body1" gutterBottom>
                <strong>My invoices</strong>
        </Typography>
        <Grid container sx={{'&>*+*':{marginTop: '16px'}}}>
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard/>
        </Grid>
        </>
    )
}