import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import style from './style.module.scss';

function Calendar() {
    return <Grid xs={8}>
        <Card className={style.main} variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>Calendário</Typography>
                <div className={style['iframe']}>
                    <iframe
                        title='Calendário'
                        src="https://calendar.google.com/calendar/embed?height=500&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&showTitle=0&showNav=1&showDate=1&showTz=1&showCalendars=0&title=Base&mode=WEEK&src=eXVyaWdvZGtlQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=MzliMzY3MzI2NjU0NTAyZDlmYzhkMDQ0Nzk5NzY2N2NkOWQ0ZjY4MmQ4NzVmMTdlOTNjYWM2M2ZiYTAxZTAyOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NTJzbGlqbGExNm5hb3RvM2xlb2cycmNzbGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZmFtaWx5MTc4MDUxNzIyNTA3OTIzMzE4NzJAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cHQuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2IuaXRhbGlhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bmZsXzIzXyU1MGl0dHNidXJnaCslNTN0ZWVsZXJzI3Nwb3J0c0Bncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23bebebe&color=%23D81B60&color=%23A79B8E&color=%234285F4&color=%23A79B8E&color=%23039BE5&color=%23616161&color=%23F09300"
                        frameBorder="0"
                        height="500"
                    ></iframe>
                </div>
            </CardContent>
        </Card>
    </Grid>
}

export default Calendar;