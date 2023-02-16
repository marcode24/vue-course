import { shallowMount } from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions'
import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonOptions component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons
      }
    })
  });

  test('Debe hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Debe de mostrar la lista de pokemons', () => {
    const li = wrapper.findAll('li');
    expect(li.length).toBe(pokemons.length);
    expect(li[0].text()).toBe(pokemons[0].name);
    expect(li[1].text()).toBe(pokemons[1].name);
    expect(li[2].text()).toBe(pokemons[2].name);
    expect(li[3].text()).toBe(pokemons[3].name);
  });

  test('debe de emitir "selection" con sus respectivos argumentos al hacer click', () => {
    const li = wrapper.findAll('li').at(0);
    li.trigger('click');
    expect(wrapper.emitted('selection').length).toBe(1);
    expect(wrapper.emitted('selection')[0]).toEqual([1]);
  });
});