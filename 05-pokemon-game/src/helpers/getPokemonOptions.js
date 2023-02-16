import pokemonApi from "@/api/pokemonApi";

export const getPokemons = () => {
  const pokemons = Array.from(Array(650));
  return pokemons.map((_, index) => index + 1);
}

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokmemons = await getPokemonNames(mixedPokemons.slice(0, 4));
  return pokmemons;
}

export const getPokemonNames = async ([a, b, c, d] = []) => {
  const promises = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];
  const [ p1, p2, p3, p4 ] = await Promise.all(promises);
  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ]
}

export default getPokemonOptions
