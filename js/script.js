// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,
//МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// const name = "ГАЛИНА";
// const age = 35;
// const language = "JAVASCRIPT";

// console.log(
//   `ДОБРОГО ДНЯ, МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ JAVASCRIPT`
// );
// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , 
// ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"
const userName = prompt("введіть своє імя");
console.log(userName)
const userMaile = prompt("введіть свою пошту");
const userPhone = prompt("введіть свій телефон");
const massege = `КОРИСТУВАЧ ${ userName } ВИКОРИСТОВУЄ ${ userMaile } ПОЧТУ І ${ userPhone } ТЕЛЕФОН`;
console.log(massege)
