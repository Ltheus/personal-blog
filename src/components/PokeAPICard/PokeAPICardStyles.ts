import { makeStyles } from "@material-ui/core";
import { drawerWidth } from "../../assets/theme/Theme";

export 
const usePokeCardStyles = makeStyles(() => {
  return {
    card: {
      display: "flex",
      flexDirection: "column",
      width: drawerWidth,
    },
    cardHeader: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      width: drawerWidth,
      padding: "0 .5rem",
      margin: 0,
    },
    button: {
      margin: "1rem",
      marginBottom: 0,
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: ".5rem 0",
      width: drawerWidth,
    },
    cardContentContainer: {
      flexGrow: 1,
      padding: "0 1rem",
    },
    cardNoContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "2rem",
      padding: "0 1rem",
      width: drawerWidth,
    },
    spriteContainer: {
      padding: 0,
      display: "flex",
      justifyContent: "center",
    },
    sprite: {
      width: drawerWidth - 40,
    },
  };
});