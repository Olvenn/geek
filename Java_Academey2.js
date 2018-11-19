number.toString()
var string = '123';
var number = 123;
string === number.toString()
parseInt(string, 10) === number

var string = '1';
console.log(string);// выведет строку: "1" (string)
console.log(parseInt(string, 10));// выведет число: 1 (number)

Если true и false остаются собой, то числа и строки приводятся по-особому. Например, все числа кроме 0 — true, при этом 0 — false.
Все строки, кроме пустой строки — true, пустая строка '' — false.
Можно сказать, что значения, которые как бы ничего в себе не содержат (как 0 или пустая строка ''),
приводятся к false, а все остальные приводятся к true.

var enoughDevelopers = true;
var techAvailable = true;
var onVacation = false;
var onSickLeave = false;
if (enoughDevelopers && techAvailable) {
  console.log ('Можно начинать проект'); //result
} if (onVacation || onSickLeave) {
  console.log ('Лучше подождать');
}

var enoughDevelopers = true;
var techAvailable = false;
var onVacation = false;
var onSickLeave = true;
if (enoughDevelopers && techAvailable) {
  console.log ('Можно начинать проект');
} if (onVacation || onSickLeave) {
  console.log ('Лучше подождать');
}

var enoughDevelopers = true;
var techAvailable = true;
var onVacation = true;
var onSickLeave = false;
if (enoughDevelopers && techAvailable) {
  console.log('Можно начинать проект');
}
if (onVacation || onSickLeave) {
  console.log('Лучше подождать');
}
//будут работать оба условия

var condition = false;
if (!condition) {
  // код выполнится
}

var conditionOne = true;
var conditionTwo = true;
var conditionThree = false;
if (conditionOne && conditionTwo && !conditionThree) {
  // код выполнится
}

var enoughDevelopers = true;
var techAvailable = true;
var onVacation = true;
var onSickLeave = false;
if (enoughDevelopers && techAvailable && !onVacation && !onSickLeave) {
  console.log('Можно начинать проект');
} else {
  console.log('Нельзя начинать проект');//нельзя
}


for (var i = 0; i < count; i = i + 1) {
  // повторяющиеся команды
}

for (var page = 1; page <= totalPages; page = page + 1) {
  keks.print(page);
}