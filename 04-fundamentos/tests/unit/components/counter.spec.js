import { shallowMount, mount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });
  // test('debe de hacer match con el snapshot', () => {
  //   const wrapper = shallowMount(Counter);
  //   expect(wrapper.html()).toMatchSnapshot()
  // });
  test('h2 debe de tener el valor por defecto "Counter"', () => {
    // const wrapper = shallowMount(Counter);
    expect(wrapper.find("h2").exists()).toBeTruthy();
    const h2Value = wrapper.find("h2").text();
    expect(h2Value).toBe("Counter");
  });

  test("el valor por defecto debe ser 100 en el p", () => {
    // const wrapper = shallowMount(Counter);
    const value = wrapper.find("[data-testid='counter']").text();
    expect(value).toBe("100");
  });

  test("Debe de incrementar en 1 el valor del contador", async () => {
    // const wrapper = shallowMount(Counter);
    const [increaseBtn, decreaseBtn] = wrapper.findAll("button");
    // const increaseBtn = wrapper.find("button");
    await increaseBtn.trigger("click"); // hace click en el button / hay que esperar que el dom vuelva a renderizar
    await decreaseBtn.trigger("click");
    await decreaseBtn.trigger("click");
    const value = wrapper.find("[data-testid='counter']").text();
    expect(value).toBe("101");
    // expect(value).toBe("99");

    // const decreaseBtn = wrapper.findAll("button")[1];
  });

  test("debe de establecer el valor por defecto", () => {
    const { start } = wrapper.props();
    const value = wrapper.find("[data-testid='counter']").text();
    expect(Number(value)).toBe(start);
  });

  test("debe de mostrar la prop title", () => {
    const title = "Hola Mundo!";
    const wrapper = shallowMount(Counter, {
      props: {
        title,
      },
    });
    expect(wrapper.find("h2").text()).toBe(title);
  });
});
