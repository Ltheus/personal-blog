import { Grid, Typography } from "@material-ui/core";

export default function About() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography>Olá Mundo!</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Olá Mundo!!</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Olá Mundo!!</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>Olá Mundo!</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
