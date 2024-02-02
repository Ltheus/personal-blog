import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { FETCH_POKEMON_DATA } from "./PokeAPIFunctions";
import { Shuffle } from "@mui/icons-material";
import { usePokeCardStyles } from "./PokeAPICardStyles";


export const PokeAPICard = () => {
  const [pokeName, setPokeName] = useState("");
  const [pokeID, setPokeID] = useState(0);
  const [pokeSprite, setPokeSprite] = useState("");

  const classes = usePokeCardStyles();

  const getPokemon = async () => {
    const pokeID = Math.floor(Math.random() * 1009);
    FETCH_POKEMON_DATA(pokeID, setPokeName, setPokeID, setPokeSprite);
  };

  return (
    <Card className={classes?.card} square elevation={0}>
      <CardHeader
        className={classes?.cardHeader}
        title="Random Pokémon Generator"
        titleTypographyProps={{variant: "body1", }}
      />
      <Button
        className={classes?.button}
        variant="contained"
        color="secondary"
        onClick={getPokemon}
        startIcon={<Shuffle fontSize="large"/>}
        disableElevation
      >
        <Typography >Find a Pokémon!</Typography>
      </Button>
      {pokeID !== 0 ? (
        <Container className={classes?.cardContent}>
          <CardContent className={classes?.cardContent}>
            <Container className={classes?.cardContentContainer}>
              <Typography variant="body2">
                #{pokeID}: {pokeName}
              </Typography>
            </Container>
            <Container className={classes?.spriteContainer}>
              <img
                className={classes?.sprite}
                src={pokeSprite}
                alt={`${pokeName}.`}
              />
            </Container>
          </CardContent>
        </Container>
      ) : (
        <Container className={classes?.cardNoContent}>
          <Typography variant="body2">
            You haven't found any Pokémon yet!
          </Typography>
        </Container>
      )}
    </Card>
  );
};
