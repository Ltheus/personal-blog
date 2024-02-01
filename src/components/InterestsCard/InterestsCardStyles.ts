import { makeStyles } from "@material-ui/core";
import { cardHeight } from "../../assets/theme/Theme";

export const useInterestStyles = makeStyles(() => {
  return {
    card: {
      height: cardHeight,
    },
    cardHeader: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      gap: "1rem",
    },
    interestList: {
      padding: "0 1.5rem 1rem",
    },
  };
});
