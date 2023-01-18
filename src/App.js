import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Unstable_Grid2';

import Title from './components/title';

import style from './App.module.scss';

function App() {
  return (
    <div class={style.main}>
      <CssBaseline />
      <Grid container spacing={2}>
        <Title value={'Personal Dashboard'} />
      </Grid>
    </div>
  );
}

export default App;
