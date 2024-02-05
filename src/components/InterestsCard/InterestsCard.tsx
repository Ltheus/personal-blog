import {
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { interests } from "./InterestList";
import { useInterestStyles } from "./InterestsCardStyles";


export const InterestsCard = () => {
  const classes = useInterestStyles();

  return (
    <Card variant="outlined" square className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        title="Interests"
        subheader="Likes, Dislikes, Hobbies and Favorite Media"
        subheaderTypographyProps={{variant:"body2"}}
      />
      {interests.map((item) => (
        <List key={item?.title} className={classes.interestList}>
          <ListItem>
            <ListItemIcon>{item?.icon}</ListItemIcon>
            <ListItemText
              primary={item?.title}
              primaryTypographyProps={{ variant: "h5" }}
            />
          </ListItem>
          {item?.content?.map((item) => (
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
