describe("Example component", () => {
  test("Debe de ser mayor a 10", () => {
    let value = 5;
    value += 6;
    expect(value).toBeGreaterThan(10);
  });
});
