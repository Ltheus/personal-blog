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
import { Instagram, GitHub, LinkedIn } from "@material-ui/icons";
import picture from "../../assets/images/avatar_picture.jpg";
import { PokeAPICard } from "../PokeAPICard/PokeAPICard";
import { drawerWidth } from "../../assets/theme/Theme";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      height: "100%",
    },
    drawer: {
      width: drawerWidth,
      height: "100%",
    },
    drawerPaper: {
      width: drawerWidth,
      overflowX: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
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
      border: `solid 1px ${theme.palette.primary.main}`,
    },
    contactTitle: {
      margin: "0 1rem",
      padding: 0,
    },
  };
});

export const Layout = ({ children }: any) => {
  const classes = useStyles();
  const contactItems = [
    {
      text: "Instagram",
      icon: <Instagram color="primary" fontSize="small" />,
      path: "https://www.instagram.com/gltheus?igsh=MXUwd2QzMDNlajY0eA==",
    },
    {
      text: "GitHub",
      icon: <GitHub color="primary" fontSize="small" />,
      path: "https://github.com/Ltheus",
    },
    {
      text: "LinkedIn",
      icon: <LinkedIn color="primary" fontSize="small" />,
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
        <Container className={classes.avatarContainer}>
          <Avatar alt="" src={picture} className={classes.avatar} />
        </Container>
        <div>
          <List>
            <ListItem component="p" className={classes.contactTitle} divider>
              <ListItemText
                primary="Socials"
                primaryTypographyProps={{ variant: "h6" }}
              />
            </ListItem>
            {contactItems.map((item) => (
              <ListItem
                button
                component="a"
                href={item.path}
                target="_blank"
                key={item.text}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText secondary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
        <PokeAPICard />
      </Drawer>
      <div>{children}</div>
    </div>
  );
};
