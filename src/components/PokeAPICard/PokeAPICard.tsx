import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
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
    <Card style={{ border: "solid 1px rgb(0, 0, 0, 0.45)", maxWidth: "40%" }}>
      <CardHeader
        title="Random Pokémon Generator"
        subheader="Comes with sprites, types and Pokedex entries!"
        action={
          <Button
            variant="outlined"
            onClick={getPokemon}
            style={{ marginTop: "1rem" }}
          >
            <Typography>Search random Pokémon</Typography>
          </Button>
        }
        style={{
          borderBottom: "solid 1px black",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      />

      {pokeID !== 0 && (
        <Container>
          <CardContent>
            <Typography variant="body1">
              You got #{pokeID}: {pokeName} !
            </Typography>
            <Typography>
              {pokeName} is a <span> {pokeTypes} </span> type Pokémon.
            </Typography>
            <Container style={{margin: "1rem"}}>
              <img src={pokeSprite} alt={`${pokeName}'s sprite.`} />
            </Container>
            <Typography variant="body2">
              <span>{pokeName}'s most recent Pokedex entry:</span> {pokedex}
            </Typography>
          </CardContent>
        </Container>
      )}
    </Card>
  );
};
