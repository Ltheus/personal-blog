import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";
import { FETCH_POKEMON_DATA } from "./PokeAPIFunctions";
import { Shuffle } from "@mui/icons-material";

const useStyles = makeStyles((theme) => {
  return {
    card: {
      display: "flex",
      flexDirection: "column",
    },
    cardHeader: {
      borderBottom: `solid 1px ${theme.palette.text.primary}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
    cardContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "20rem",
      maxHeight: "20rem",
      width: "100%",
      padding: ".5rem 0",
    },
    cardNoContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "20rem",
      maxHeight: "20rem",
    },
    cardContentContainer: {
      flexGrow: 1,
      padding: "0 1rem",
    },
    spriteContainer: {
      padding: 0,
      display: "flex",
      justifyContent: "center",
    },
  };
});

export const PokeAPICard = () => {
  const [pokeName, setPokeName] = useState("");
  const [pokeID, setPokeID] = useState(0);
  const [pokedex, setPokedex] = useState("");
  const [pokeSprite, setPokeSprite] = useState("");
  const [pokeTypes, setPokeTypes] = useState("");

  const classes = useStyles();

  const getPokemon = async () => {
    const pokeID = Math.floor(Math.random() * 1009);
    FETCH_POKEMON_DATA(
      pokeID,
      setPokeName,
      setPokeID,
      setPokedex,
      setPokeSprite,
      setPokeTypes
    );
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        title="Random Pokémon Generator"
        subheader="Comes with sprites, types and Pokedex entries!"
        action={
          <Button
            variant="contained"
            color="primary"
            onClick={getPokemon}
            style={{ marginTop: "1rem" }}
            startIcon={<Shuffle />}
          >
            <Typography>Search random Pokémon</Typography>
          </Button>
        }
      />

      {pokeID !== 0 ? (
        <Container className={classes.cardContent}>
          <CardContent className={classes.cardContent}>
            <Container className={classes.cardContentContainer}>
              <Typography variant="body1">
                You got #{pokeID}: {pokeName} !
              </Typography>
              <Typography>
                {pokeName} is a <span> {pokeTypes} </span> type Pokémon.
              </Typography>
              <Typography variant="body2">
                <span>{pokeName}'s most recent Pokedex entry:</span> {pokedex}
              </Typography>
            </Container>
            <Container className={classes.spriteContainer}>
              <img style={{width: "12rem"}} src={pokeSprite} alt={`${pokeName}'s sprite.`} />
            </Container>
          </CardContent>
        </Container>
      ) : (
        <Container className={classes.cardNoContent}>
          <Typography variant="body1">
            You haven't found any Pokémon yet!
          </Typography>
        </Container>
      )}
    </Card>
  );
};
