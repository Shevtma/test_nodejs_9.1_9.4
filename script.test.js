const calculateBonus = require("./script.js");

describe("Набор тестов для функции calculateBonus", () => {
  it("Тест на то, что значения определены", () => {
    expect(calculateBonus(10, 40)).toBeDefined();
  });
  it("Тест на то, что значения не определены", () => {
    expect(calculateBonus()).toBeNaN();
  });
  it("Тест на корректность рассчета бонуса при сумме меньше 50", () => {
    expect(calculateBonus(10, 20)).toEqual(30);
    expect(calculateBonus(10, 20)).toBeLessThanOrEqual(50);
  });
  it("Тест на корректность рассчета бонуса при сумме равной 50", () => {
    expect(calculateBonus(15, 35)).toBe(50);
    expect(calculateBonus(40, 60)).toEqual(50);
  });
  it("Тест на корректность рассчета бонуса при сумме больше 50", () => {
    expect(calculateBonus(40, 60)).toBe(50);
    expect(calculateBonus(40, 60)).toEqual(50);
  });
  it("Тест на нулевые значения аргументов", () => {
    expect(calculateBonus(0, 0)).toEqual(0);
    expect(calculateBonus(0, 0)).toBeGreaterThanOrEqual(0);
  });
});

