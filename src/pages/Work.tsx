import { Grid, Typography } from '@material-ui/core';

export default function Work() {
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
          <Typography variant="h1">Hello World</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Hello World</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
