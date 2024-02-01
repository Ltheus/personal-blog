import { makeStyles } from "@material-ui/core";
import { cardHeight } from "../../assets/theme/Theme";

export const useWorkStyles = makeStyles(() => {
  return {
    workList: {
      padding: "0 .8rem",
      height: cardHeight,
    },
    cardHeader: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: "1rem",
    },
    workCard: {
      margin: ".25rem 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});
