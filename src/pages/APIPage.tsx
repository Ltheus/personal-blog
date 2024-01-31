import { Container, Grid, makeStyles } from "@material-ui/core";
import { PokeAPICard } from "../components/PokeAPICard/PokeAPICard";

const useStyles = makeStyles((theme) => {
  return {
    page: {
      color: theme.palette.text.primary,
      width: "100%",
    },
    fontHollowEffect: {
      fontStyle: "italic",
      WebkitTextStrokeWidth: "2px",
      WebkitTextStrokeColor: `${theme.palette.text.primary}`,
      color: `${theme.palette.background.default}`,
    },
  };
});

export default function APIPage() {
  const classes = useStyles();
  return (
    <Container className={classes.page}>
      <Grid container>
        <Grid item xs={12} alignItems="center">
          <PokeAPICard />
        </Grid>
      </Grid>
    </Container>
  );
}
