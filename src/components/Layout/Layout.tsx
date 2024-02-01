import {
  Avatar,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Instagram, GitHub, LinkedIn } from "@material-ui/icons";
import picture from "../../assets/images/avatar_picture.jpg";
import { useLayoutStyles } from "./LayoutStyles";
import { PokeAPICard } from "../PokeAPICard/PokeAPICard";


export const Layout = ({ children }: any) => {
  const classes = useLayoutStyles();
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
    <div className={classes?.root}>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes?.drawer}
        classes={{ paper: classes?.drawerPaper }}
      >
        <Container className={classes?.avatarContainer}>
          <Avatar alt="" src={picture} className={classes?.avatar} />
        </Container>
        <div>
          <List>
            <ListItem component="p" className={classes?.contactTitle} divider>
              <ListItemText
                primary="Socials"
                primaryTypographyProps={{ variant: "h6" }}
              />
            </ListItem>
            {contactItems.map((item) => (
              <ListItem
                button
                component="a"
                href={item?.path}
                target="_blank"
                key={item?.text}
              >
                <ListItemIcon>{item?.icon}</ListItemIcon>
                <ListItemText secondary={item?.text} />
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
