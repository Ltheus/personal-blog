import { Button, Card, Container, Typography } from "@material-ui/core";
import { useState } from "react";
import { FETCH_POKEMON_DATA } from "./PokeAPIFunctions";

export const PokeAPICard = () => {
  const [pokeName, setPokeName] = useState("");
  const [pokeID, setPokeID] = useState(0);
  const [pokedex, setPokedex] = useState("");
  const [pokeSprite, setPokeSprite] = useState("");
  const [pokeTypes, setPokeTypes] = useState("");

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
    <Card>
      <Button variant="outlined" onClick={getPokemon}>
        <Typography>Search random Pokémon</Typography>
      </Button>
      {pokeID !== 0 && (
        <Card>
          <Typography variant="body1">
            You got #{pokeID}: {pokeName} !
          </Typography>
          <img src={pokeSprite} alt={`${pokeName}'s sprite.`} />
          <Typography>
            {pokeName} is a <span> {pokeTypes} </span> type Pokémon.
          </Typography>
          <Typography variant="body2">
            <span>{pokeName}'s most recent Pokedex entry:</span> {pokedex}
          </Typography>
        </Card>
      )}
    </Card>
  );
};
