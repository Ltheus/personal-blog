import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    page: {
      color: theme?.palette?.text?.primary,
      margin: "1rem 4rem",
      overflowY: "visible",
    },
    personalImageContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    fontGradientEffect: {
      background: `linear-gradient(120deg, ${theme?.palette?.text?.primary}, ${theme?.palette?.text?.secondary})`,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    titleContainer: {
      padding: "1rem 1rem",
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
    },
    infoText: {
      padding: 0,
      paddingBottom: "1rem",
      margin: 0,
    },
  };
});
