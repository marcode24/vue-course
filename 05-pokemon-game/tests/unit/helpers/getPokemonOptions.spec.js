import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions';

describe('GetPokemonOptions helper', () => {
  test('should return an array tpye', () => {
    const pokemons = getPokemons();
    expect(Array.isArray(pokemons)).toBe(true);
    expect(pokemons.length).toBe(650);
  });

  test('should return an array with 4 elements', async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4]);
    expect(pokemons).toStrictEqual([
      { name: 'bulbasaur', id: 1 },
      { name: 'ivysaur', id: 2 },
      { name: 'venusaur', id: 3 },
      { name: 'charmander', id: 4 },
    ]);
  });

  test('should return an array mixed', async () => {
    const pokemons = await getPokemonOptions();
    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      {
        id: expect.any(Number),
        name: expect.any(String)
      },
      {
        id: expect.any(Number),
        name: expect.any(String)
      },
      {
        id: expect.any(Number),
        name: expect.any(String)
      },
      {
        id: expect.any(Number),
        name: expect.any(String)
      },
    ]);
  });
});