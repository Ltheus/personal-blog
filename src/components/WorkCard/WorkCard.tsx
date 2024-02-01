import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { work } from "./WorkList";

const useStyles = makeStyles(() => {
  return {
    cardHeader: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: "1rem",
    },
    workList: {
      padding: "0 .8rem",
    },
    workCard: {
      margin: ".25rem 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});

export const WorkCard = () => {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.workList} square>
      <CardHeader
        className={classes.cardHeader}
        title="Work and other knowledges"
        subheader="Graduation, past experiences, and other abilities"
      />
      {work.map((item) => (
        <Card square elevation={0} key={item.name} className={classes.workCard}>
          <Grid item xs={6}>
            <CardHeader
              className={classes.cardHeader}
              title={item.name}
              subheader={item.title}
            />
            <CardContent>
              <Typography variant="body1" gutterBottom>
                {item.description}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={6}>
            <CardMedia>
              <ImageList rowHeight={250} cols={12}>
                <ImageListItem cols={12}>
                  <img src={item.image} alt="A picture of me" />
                </ImageListItem>
              </ImageList>
            </CardMedia>
          </Grid>
        </Card>
      ))}
    </Paper>
  );
};
