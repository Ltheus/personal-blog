import {
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@material-ui/core";
import { InterestsCard } from "../components/InterestsCard/InterestsCard";
import { WorkCard } from "../components/WorkCard/WorkCard";
import personalPicture from "../assets/images/me_skyone.jpg";
import { useStyles } from "./HomeStyles";

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper square variant="outlined" className={classes.titleContainer}>
            <Grid item xs={6}>
              <Typography variant="h1">
                <span className={classes.fontGradientEffect}>About me</span>
              </Typography>
              <Typography variant="body2" className={classes.infoText}>
                I'm Matheus (Theus for short) - he/him - a 19-year-old beginner
                Web Developer who's always been passionate about technology,
                arts, crafting, and video games. When I was younger, my dad was
                a car mechanic, and my older brother was an electronic engineer.
                With that, I always had the presence of this kind of
                professionals in my life, which is why I chose the job I do.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <ImageList cols={1} rowHeight={200}>
                <ImageListItem cols={1}>
                  <img src={personalPicture} alt="Matheus" />
                </ImageListItem>
              </ImageList>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <InterestsCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <WorkCard />
        </Grid>
      </Grid>
    </div>
  );
}
