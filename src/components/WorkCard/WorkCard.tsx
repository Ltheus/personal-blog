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
} from "@material-ui/core";
import { work } from "./WorkList";
import { useWorkStyles } from "./WorkCardStyles";



export const WorkCard = () => {
  const classes = useWorkStyles();

  return (
    <Paper variant="outlined" className={classes?.workList} square>
      <CardHeader
        className={classes?.cardHeader}
        title="Work and other knowledge"
        subheader="Graduation, past experiences, and other abilities"
        subheaderTypographyProps={{ variant: "body2" }}
      />
      {work.map((item) => (
        <Card square elevation={0} key={item?.name} className={classes?.workCard}>
          <Grid item xs={6}>
            <CardHeader
              className={classes?.cardHeader}
              title={item?.name}
              subheader={item?.title}
              subheaderTypographyProps={{ variant: "body2" }}
            />
            <CardContent>
              <Typography variant="body2" gutterBottom>
                {item?.description}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={6}>
            <CardMedia>
              <ImageList rowHeight={200} cols={12}>
                <ImageListItem cols={12}>
                  <img src={item?.image} alt={item?.name} />
                </ImageListItem>
              </ImageList>
            </CardMedia>
          </Grid>
        </Card>
      ))}
    </Paper>
  );
};
