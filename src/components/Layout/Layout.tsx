import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Home, Person, Work } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import picture from "../../assets/images/avatar_picture.jpg"

const drawerWidth = 240;
const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  page: {
    background: "lightgray",
    width: `100%`,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  avatar: {
    width: "5rem",
    height: "5rem"
  }
});

export const Layout = ({ children }: any) => {
  const classes = useStyles();
  const history = useHistory();

  const menuItems = [
    {
      text: "início",
      icon: <Home />,
      path: "/",
    },
    {
      text: "mais sobre mim",
      icon: <Person />,
      path: "/about-me",
    },
    {
      text: "trabalho",
      icon: <Work />,
      path: "/work",
    },
  ];

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <Avatar alt="" src={picture} className={classes.avatar}/>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              divider
              key={item.text}
              onClick={() => history.push(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  );
};
