import axios from "axios";

const FETCH_POKEMON_SPRITE = (pokeID, setPokeSprite) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}`).then((res) => {
    setPokeSprite(res?.data?.sprites?.front_default);
  });
};

export const FETCH_POKEMON_DATA = (
  pokeID,
  setPokeName,
  setPokeID,
  setPokeSprite,
) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${pokeID}`)
    .then((res) => {
      const pokeInfo = res?.data;
      setPokeName(pokeInfo.name.toUpperCase());
      setPokeID(pokeInfo.id.toString());
      FETCH_POKEMON_SPRITE(pokeID, setPokeSprite);
    });
};
