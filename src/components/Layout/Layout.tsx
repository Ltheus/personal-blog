import {
  Avatar,
  Container,
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
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      height: "100%",
      background: theme.palette.background.default,
    },
    page: {
      width: `100%`,
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    avatarContainer: {
      width: drawerWidth,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem 0",
    },
    avatar: {
      width: "5rem",
      height: "5rem",
      border: "dashed 1px",
      borderColor: "black",
    },
  };
});

export const Layout = ({ children }: any) => {
  const classes = useStyles();
  const history = useHistory();

  const menuItems = [
    {
      text: "Home",
      icon: <Home />,
      path: "/",
    },
    {
      text: "About me",
      icon: <Person />,
      path: "/about",
    },
    {
      text: "Work",
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
        <Container className={classes.avatarContainer}>
          <Avatar alt="" src={picture} className={classes.avatar} />
        </Container>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              divider
              key={item.text}
              onClick={() => {
                history.push(item.path);
              }}
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
