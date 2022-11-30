// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let a = 'hello';
console.log(a);

let b ='owu';
console.log(b);

let c = 'com';
console.log(c);

let d = 'ua';
console.log(d);

let e = 1;
console.log(e);

let f = 10;
console.log(f);

let j = -999;
console.log(j);

let h = 123;
console.log(h);

let i = 3.14;
console.log(i);

let n = 2.7;
console.log(n);

let z = 16;
console.log(z);

let x = true;
console.log(x);

let y = false;
console.log(y);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Tarasov';
let middleName = 'Taras';
let lastName = 'Tarasovich';
let final = firstName + ' ' + middleName + ' ' + lastName;
console.log(final);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a1 = 100;
console.log(typeof a1);
let b2 = '100';
console.log(typeof b2);
let c3 = true;
console.log(typeof c3);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let yName = prompt('Your name');
let yMiddleName = prompt('Your middleName');
let yAge = +prompt('Your age');
let final1 = (yName + ' ' + yMiddleName + ' ' + yAge);
console.log(final1);