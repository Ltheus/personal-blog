import {
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { cardHeight } from "../../assets/theme/Theme";
import { interests } from "./InterestList";

const useStyles = makeStyles(() => {
  return {
    card: {
      height: cardHeight,
    },
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
    <Card variant="outlined" square className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        title="Interests"
        subheader="Likes, Dislikes, Hobbies and Favorite Media"
        subheaderTypographyProps={{variant:"body2"}}
      />
      {interests.map((thing) => (
        <List key={thing.title} className={classes.interestList}>
          <ListItem>
            <ListItemIcon>{thing.icon}</ListItemIcon>
            <ListItemText
              primary={thing.title}
              primaryTypographyProps={{ variant: "h5" }}
            />
          </ListItem>
          {thing.content.map((item) => (
            <ListItem>
              <ListItemText
                secondary={item}
                secondaryTypographyProps={{ variant: "body2" }}
              />
            </ListItem>
          ))}
        </List>
      ))}
    </Card>
  );
};
