import React from 'react'
import { Grid, Typography } from '@material-ui/core';
// import { PokeAPICard } from '../components/PokeAPICard/PokeAPICard';

export default function Home() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography>Hello World</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Hello World</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Hello World</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Hello World</Typography>
        </Grid>
      </Grid>
    </div>
  );
}