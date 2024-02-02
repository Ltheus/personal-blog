import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    page: {
      color: theme?.palette?.text?.primary,
      margin: "16px 64px",
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
      padding: "16px",
      display: "flex",
      justifyContent: "center",
      gap: "24px",
    },
    infoText: {
      padding: 0,
      paddingBottom: "16px",
      margin: 0,
    },
  };
});
