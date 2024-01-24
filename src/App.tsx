import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { Grid, Typography, makeStyles } from "@material-ui/core";
// import { PokeAPICard } from "./components/PokeAPICard/PokeAPICard";

//!rafc -> const component snippet

const useStyles = makeStyles({
  text : {
    background: "red"
  }
})

function App() {
  const classes = useStyles();

  return (
    <div>
      {/* <PokeAPICard/> */}
      <Layout>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography className={classes.text}>Hello World</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>Hello World</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>Hello World</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>Hello World</Typography>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}

export default App;
