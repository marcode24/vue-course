import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonPage Component', () => {
  let wrapper;
  let mixPokemonsArraySpy;

  beforeEach(() => {
    mixPokemonsArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonsArray');
    wrapper = shallowMount(PokemonPage);
  });

  test('Debe hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Debe de llamar al mixin de "getPokemons" al montar el componente', () => {
    expect(mixPokemonsArraySpy).toHaveBeenCalled();
  });

  test('Debe de hacer match con el snapshot cuando se cargan los pokemons', () => {
    const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonOptions: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        };
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonOptions: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        };
      }
    });
    const picture = wrapper.find('pokemon-picture-stub');
    const options = wrapper.find('pokemon-options-stub');

    expect(picture.exists()).toBeTruthy();
    expect(options.exists()).toBeTruthy();

    expect(picture.attributes('pokemonid')).toBe('1');
    expect(options.attributes('pokemons')).toBeTruthy();
  });

  test('Prueba con checkAnswer', async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonOptions: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        };
      }
    });

    await wrapper.vm.checkAnswer(5);
    expect(wrapper.find('h2').exists()).toBeTruthy();
    expect(wrapper.vm.showPokemon).toBeTruthy();
  });
})