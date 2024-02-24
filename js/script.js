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
// const userName = prompt("введіть своє імя");
// console.log(userName);
// const userMaile = prompt("введіть свою пошту");
// const userPhone = prompt("введіть свій телефон");
// const massege = `КОРИСТУВАЧ ${userName} ВИКОРИСТОВУЄ ${userMaile} ПОЧТУ І ${userPhone} ТЕЛЕФОН`;
// console.log(massege);

// ЗАДАЧА 3
// ПОТРІБНО ЗАПИТАТИ У МАГАЗИНІ ЦІНУ ЗА КОЖЕН ОКРЕМИЙ ТОВАР,
// ТА ВИВЕСТИ ПОВІДОМЛЕННЯМ  ЗАГАЛЬНУ ЦІНУ ТОВАРУ

// const priceDes = Number(prompt("введіть ціну компютера"));
// const pricePhone = +prompt("введіть ціну телефону");
// const priceLeptop = +prompt("введіть ціну ноутбука");
// const totalPrice = priceDes + pricePhone + priceLeptop;

// const massage = `Загальна ціна товару ${totalPrice}`;
// console.log(massage);

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const months = Number(prompt("скільки місяців має рік?"));
// if (months === 12) {
//     console.log("Вірно");
// } else {
//     console.log("Не знаєте");
// }


// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ВИЗНАЧАТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.

// const amount = Number(prompt("парне число?"));
// if (amount % 2 === 0 ) {
//     console.log("парне");
// } else {
//     console.log("не парне");
// }


// ЗАДАЧА 10
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!" , ЯКЩО МЕНШЕ 7
// "Your name isn't very long"

// const userName = prompt("enter your name");

// if (userName.length > 7) {
//     console.log("Wow, you  have a REALLY long name!");
// }
// else {
//     console.log("Your name isn't very long");
// }