import axios from "axios";

const FILTER_FORMAT_FLAVOR_TEXT = (pokeInfo, setPokedex) => {
  const filteredFlavorTexts = pokeInfo.flavor_text_entries.filter(
    (item) => item.language.name === "en"
  );

  const numberOfTexts = filteredFlavorTexts.length;
  const flavorTextEntry =
    numberOfTexts > 0 ? filteredFlavorTexts[numberOfTexts - 1] : "";

  const rawText = flavorTextEntry.flavor_text;

  const formatedText = rawText
    .replace(/\f/g, "\n")
    .replace(/\u00ad\n/g, "")
    .replace(/\u00ad/g, "")
    .replace(/ -\n/g, " - ")
    .replace(/-\n/g, "-")
    .replace(/\n/g, " ");
  setPokedex(formatedText);
};

const FETCH_POKEMON_SPRITE_AND_TYPE = (pokeID, setPokeSprite, setPokeTypes) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}`).then((res) => {
    setPokeSprite(res.data.sprites.front_default);
    const pokeTypesInfo = res.data.types;
    pokeTypesInfo[1]
      ? setPokeTypes(
          `${pokeTypesInfo[0].type.name.toUpperCase()} and ${pokeTypesInfo[1].type.name.toUpperCase()}`
        )
      : setPokeTypes(`${pokeTypesInfo[0].type.name.toUpperCase()}`);
  });
};

export const FETCH_POKEMON_DATA = (
  pokeID,
  setPokeName,
  setPokeID,
  setPokedex,
  setPokeSprite,
  setPokeTypes
) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${pokeID}`)
    .then((res) => {
      const pokeInfo = res.data;
      setPokeName(pokeInfo.name.toUpperCase());
      setPokeID(pokeInfo.id.toString());
      FILTER_FORMAT_FLAVOR_TEXT(pokeInfo, setPokedex);
      FETCH_POKEMON_SPRITE_AND_TYPE(pokeID, setPokeSprite, setPokeTypes);
    });
};
