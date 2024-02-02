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
      padding: "16px 0",
    },
    avatar: {
      width: "80px",
      height: "80px",
      border: `solid 1px ${theme?.palette?.primary?.main}`,
    },
    contactTitle: {
      margin: "0 16px",
      padding: 0,
    },
  };
});
