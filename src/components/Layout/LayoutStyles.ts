import { makeStyles } from "@material-ui/core";
import { drawerWidth } from "../../assets/theme/Theme";

export const useLayoutStyles = makeStyles((theme) => {
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
      border: `solid 1px ${theme?.palette?.primary?.main}`,
    },
    contactTitle: {
      margin: "0 1rem",
      padding: 0,
    },
  };
});
