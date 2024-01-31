import {
  Avatar,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import {
  Person,
  Instagram,
  GitHub,
  LinkedIn,
  Settings,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import picture from "../../assets/images/avatar_picture.jpg";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      height: "100%",
    },
    page: {
      padding: "1rem",
    },
    drawer: {
      width: drawerWidth,
      height: "100%",
    },
    drawerPaper: {
      width: drawerWidth,
      height: "100%",
      overflowX: "hidden",

      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
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
      filter: `drop-shadow(2px 2px 2px ${theme.palette.text.primary})`,
    },
    contactTitle: {
      margin: "0 1rem",
      padding: 0,
    },
  };
});

export const Layout = ({ children }: any) => {
  const classes = useStyles();
  const history = useHistory();

  const menuItems = [
    {
      text: "About me",
      icon: <Person color="primary" />,
      path: "/",
    },
    {
      text: "API",
      icon: <Settings color="primary"/>,
      path: "/api",
    },
  ];

  const contactItems = [
    {
      text: "Instagram",
      icon: <Instagram />,
      path: "https://www.instagram.com/gltheus?igsh=MXUwd2QzMDNlajY0eA==",
    },
    {
      text: "GitHub",
      icon: <GitHub />,
      path: "https://github.com/Ltheus",
    },
    {
      text: "LinkedIn",
      icon: <LinkedIn />,
      path: "https://www.linkedin.com/in/matheus-lopes-74b172265",
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
        <div>
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
        </div>
        <div>
          <List>
            <ListItem component="p" className={classes.contactTitle}>
              <ListItemText
                primary="Contact"
                primaryTypographyProps={{ variant: "h5" }}
              />
            </ListItem>
            {contactItems.map((item) => (
              <ListItem
                button
                component="a"
                href={item.path}
                target="_blank"
                divider={item.text !== "LinkedIn" && true}
                key={item.text}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  );
};
