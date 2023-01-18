import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Unstable_Grid2';

import Title from './widget/title';
import Targets from './widget/targets';

import style from './App.module.scss';

function App() {
  return (
    <div class={style.main}>
      <CssBaseline />
      <Grid container spacing={2}>
        <Title value={'Personal Dashboard'} />
        <Targets />
      </Grid>
    </div>
  );
}

export default App;
