const calculateBonus = require("./script.js");

describe("Набор тестов для функции calculateBonus", () => {
  it("Тест на то, что значения определены", () => {
    expect(calculateBonus(10, 40)).toBeDefined();
  });
  it("Тест на то, что значения не определены", () => {
    expect(calculateBonus()).toBeNaN();
  });
  it("Тест на корректность рассчета бонуса при сумме меньше 50", () => {
    expect(calculateBonus(10.3, 20.9)).toEqual(31.2);
    expect(calculateBonus(0, 49)).toEqual(49);
    expect(calculateBonus(1, 48)).toEqual(49);
    expect(calculateBonus(1, 0)).toEqual(1);
    expect(calculateBonus(10, 20)).toBeLessThanOrEqual(50);
    expect(calculateBonus(-27, -12)).toEqual(-39);
  });
  it("Тест на корректность рассчета бонуса при сумме равной 50", () => {
    expect(calculateBonus(14.5, 35.5)).toBe(50);
    expect(calculateBonus(0, 50)).toEqual(50);
    expect(calculateBonus(1, 49)).toEqual(50);
    expect(calculateBonus(53, -3)).toEqual(50);
  });
  it("Тест на корректность рассчета бонуса при сумме больше 50", () => {
    expect(calculateBonus(40.6, 60.8)).toBe(50);
    expect(calculateBonus(40, 60)).toEqual(50);
    expect(calculateBonus(50, 1)).toEqual(50);
    expect(calculateBonus(51, 0)).toEqual(50);
    expect(calculateBonus(-9, 60)).toEqual(50);
  });
  it("Тест на нулевые значения аргументов", () => {
    expect(calculateBonus(0, 0)).toEqual(0);
    expect(calculateBonus(0, 0)).toBeGreaterThanOrEqual(0);
  });
  it("Тест на то, что функция возвращает число (позитивный)", () => {
    expect(typeof calculateBonus(1, 2)).toBe("number");
  });
  it("Тест на то, что функция возвращает число (негативный, со строками)", () => {
    expect(typeof calculateBonus("1", "2")).toBe("number");
    expect(typeof calculateBonus("a", "b")).toBe("number");
  });
  it("Тест на то, что функция возвращает число (негативный, с массивами)", () => {
    expect(typeof calculateBonus(["30", "20"], ["15"])).toBe("number");
    expect(typeof calculateBonus(["d"], ["g"])).toBe("number");
  });
});

