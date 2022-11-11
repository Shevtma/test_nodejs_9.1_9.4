const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  //debugger;
  // выполняется подсчет суммы двух значений а и b, переданных при вызове функции
  sum > 50 ? (bonus = 50) : (bonus = sum);
  // если сумма больше 50, то бонусу присваивается значение 50, иначе бонусу присваивается значение sum
  //debugger;
  return bonus;
};
module.exports = calculateBonus;
//console.log(calculateBonus(30, 90));

