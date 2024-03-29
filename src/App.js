import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Unstable_Grid2';

import Title from './widget/title';
import Targets from './widget/targets';
import Calendar from './widget/calendar';
import Links from './widget/links';
import Timeline from './widget/timeline';

import style from './App.module.scss';

function App() {
  return (
    <div className={style.main}>
      <CssBaseline />
      <Grid container spacing={2} alignItems="flex-start">
        <Title value={'Personal Dashboard'} />
        <Links />
        <Targets />
        <Calendar />
        <Timeline />
      </Grid>
    </div>
  );
}

export default App;
