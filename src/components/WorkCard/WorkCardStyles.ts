import { makeStyles } from "@material-ui/core";
import { cardHeight } from "../../assets/theme/Theme";

export const useWorkStyles = makeStyles(() => {
  return {
    workList: {
      padding: "0 13px",
      height: cardHeight,
    },
    cardHeader: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: "16px",
    },
    workCard: {
      margin: "4px 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});
