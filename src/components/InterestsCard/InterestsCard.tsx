import {
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { interests } from "./InterestList";

const useStyles = makeStyles((theme) => {
  return {
    cardHeader: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: "1rem",
    },
    interestList: {
      padding: "0 1.5rem 1rem",
    },
  };
});

export const InterestsCard = () => {
  const classes = useStyles();

  return (
    <Card variant="outlined" square>
      <CardHeader
        className={classes.cardHeader}
        title="Interests"
        subheader="Likes, Dislikes, Hobbies and Favorite Media"
      />
      {interests.map((thing) => (
        <List key={thing.title} className={classes.interestList}>
          <ListItem>
            <ListItemText
              primary={thing.title}
              primaryTypographyProps={{ variant: "h5" }}
            />
          </ListItem>
          {thing.content.map((item) => (
            <ListItem>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
        </List>
      ))}
    </Card>
  );
};
