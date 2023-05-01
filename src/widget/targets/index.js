import { PureComponent } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Bars from '../../components/bars'

import style from './style.modules.scss';

class Targets extends PureComponent {
    render() {
        return <Grid xs={4}>
            <Card className={style.main} variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>Objetivos</Typography>
                    <Bars
                        title="Renda"
                        targetItem={{
                            label: 'R$ 55.000,00',
                            value: 55000
                        }}
                        completeItem={{
                            label: 'R$ 18.000,00',
                            value: 18000
                        }}
                        color="#00cec9"
                    />
                    <Bars
                        title="Gordura Corporal"
                        targetItem={{
                            label: '14%',
                            value: 14
                        }}
                        completeItem={{
                            label: '22,6%',
                            value: 22.6
                        }}
                        color="#e17055"
                    />
                    <Bars
                        title="Refoma da casa"
                        targetItem={{
                            label: '100%',
                            value: 100
                        }}
                        completeItem={{
                            label: '12,5%',
                            value: 12.5
                        }}
                        color="#fdcb6e"
                    />
                </CardContent>
            </Card>
        </Grid>
    }
}

export default Targets;