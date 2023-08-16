import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import style from './style.module.scss';

const links = {
    'PR\'s': {
        href: 'https://github.com/pulls/assigned',
        icon: 'https://github.githubassets.com/favicons/favicon.svg'
    },
    'Issues': {
        href: 'https://github.com/issues/assigned',
        icon: 'https://github.githubassets.com/favicons/favicon.svg'
    },
    'Circle CI': {
        href: 'https://app.circleci.com/pipelines/github/iubenda/iub_cookie_solution?filter=mine',
        icon: 'https://app.circleci.com/pipelines/favicons/safari-pinned-tab.svg'
    },
    'Asana': {
        href: 'https://app.asana.com/0/1200896321422485/board',
        icon: 'https://d3ki9tyy5l5ruj.cloudfront.net/obj/df5bcec7e9873dddebdd1328901c287f0f069750/asana-logo-favicon@3x.png'
    },
}

function Links() {
    const linksList = Object.keys(links).map(linkItemLabel => {
        const linkItemHref = links[linkItemLabel].href;
        const linkItemIcon = links[linkItemLabel].icon;
        return <a key={linkItemLabel} className={style['links__item']} href={linkItemHref}>
            <Avatar sx={{ width: 60, height: 60 }} src={linkItemIcon}>{linkItemLabel.charAt(0)}</Avatar>
            <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>{linkItemLabel}</Typography>
        </a>
    })
    return <Grid xs={12}>
        <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>Links</Typography>
                <div className={style['links']}>{linksList}</div>
            </CardContent>
        </Card>
    </Grid>
}

export default Links;