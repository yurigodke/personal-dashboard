import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import style from './style.module.scss';

function Timeline() {
    const milestones = {
        '01/07/2023': <>Começar no novo emprego<br /><strong>Samantha</strong>: Emprego na área comercial<br /><strong>Yuri</strong>: Salário de €4500</>,
        '01/12/2023': 'Lançamento livro Samantha',
        '31/12/2023': 'Finalizar obras casa',
        '02/05/2024': 'Viagem para Disney',
        '01/01/2025': 'Abrir empresa'
    };
    
    const reduct = 10000000;
    const padding = 100;


    function getAllDates() {
        let dates = {
            today: new Date().getTime(),
        }

        const milestonesDates = Object.keys(milestones)
        
        milestonesDates.forEach(milestonesDateItem => {
            const dateString = milestonesDateItem.replace(/^([0-9]{2})\/([0-9]{2})\//i, '$2-$1-');
            dates[milestonesDateItem] = new Date(dateString).getTime();
        })

        const sortedDates = Object.keys(dates).sort(function(a,b){return dates[a]-dates[b]})

        return {
            dates,
            sortedDates,
        }
    }

    function getDistance(dateInfo) {
        const min = dateInfo.dates[dateInfo.sortedDates[0]];
        const max = dateInfo.dates[dateInfo.sortedDates[dateInfo.sortedDates.length - 1]];

        const distance = padding + Math.round((max - min) / reduct) + padding;

        return distance
    }

    function getTodayElement(distance) {
        const mainElm = document.createElement('div');
        mainElm.className = 'timeline__today';
        mainElm.style.left = `${distance}px`;

        return mainElm;
    }

    function getDateElement(distance, text, date) {
        const mainElm = document.createElement('div');
        mainElm.className = 'timeline__item';
        mainElm.style.left = `${distance}px`;

        const textElm = document.createElement('div');
        textElm.className = 'timeline__item__text';
        textElm.innerHTML = text;
        
        mainElm.appendChild(textElm);
        
        const pointElm = document.createElement('div');
        pointElm.className = 'timeline__item__point';

        mainElm.appendChild(pointElm);

        const dateElm = document.createElement('div');
        dateElm.className = 'timeline__item__date';
        dateElm.innerHTML = date;
        
        mainElm.appendChild(dateElm);

        return mainElm;
    }

    function insertDates(dateInfo) {
        const {sortedDates, dates} = dateInfo;

        const timelineElm = document.querySelector('.timeline__line');
        const min = dates[sortedDates[0]];
        timelineElm.innerHTML = '';
        sortedDates.forEach(dateItem => {
            const dateDistance = padding + Math.round((dates[dateItem] - min) / reduct);
            let element = null;

            if (dateItem === 'today') {
                element = getTodayElement(dateDistance);
            } else {
                element = getDateElement(dateDistance, milestones[dateItem], dateItem);
            }
            
            timelineElm.appendChild(element);
        })
    }

    const dateInfo = getAllDates();

    const distance = getDistance(dateInfo);

    const {sortedDates, dates} = dateInfo;

    const min = dates[sortedDates[0]];
    const timelineItemsElms = sortedDates.map(dateItem => {
        const dateDistance = padding + Math.round((dates[dateItem] - min) / reduct);
        let element = null;

        if (dateItem === 'today') {
            element = <div key={dateItem} className={style['timeline__today']} style={{left: `${dateDistance}px`}}></div>
        } else {
            element = (
                <div key={dateItem} className={style['timeline__item']} style={{left: `${dateDistance}px`}}>
                    <div className={style['timeline__item__text']}>{milestones[dateItem]}</div>
                    <div className={style['timeline__item__point']}></div>
                    <div className={style['timeline__item__date']}>{dateItem}</div>
                </div>
            );
        }

        return element;
    });

    setTimeout(function() {
        document.querySelector('.timeline__today').scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }, 1000);

    return <Grid xs={12}>
        <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>Timeline</Typography>
                <div className={style['timeline']}>
                    <div className={style['timeline__line']} style={{width: `${distance}px`}}>
                        {timelineItemsElms}
                    </div>
                </div>
            </CardContent>
        </Card>
    </Grid>
}

export default Timeline;