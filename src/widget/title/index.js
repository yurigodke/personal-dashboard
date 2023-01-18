import Grid from '@mui/material/Unstable_Grid2';

import style from './style.module.scss';

function Title({value}) {
    return <Grid xs={12}>
        <h2 className={style.title}>{value}</h2>
    </Grid>
}

export default Title;