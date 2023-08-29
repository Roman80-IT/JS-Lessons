//* Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

// const genres = ["Jazz", "Blues"];
// genres.push("Рок-н-рол");

// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// console.log(genres.unshift("Country", "Reggae"));

//! ========================================================================

//* Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = "8 11";
// const arr = values.split(" ");
// const a = Number(arr[0]);
// const b = Number(arr[1]);
// console.log(a * b);

//! ========================================================================

//* Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// for (const i in fruits) {
//   console.log(`${Number(i) + 1}: ${fruits[i]}`);
// }

// for (let i in fruits) {
//   i = Number(i);
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

//! ========================================================================

//* Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// console.log(namesArr);
// console.log(phonesArr);

// for (const i in namesArr) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

//! ========================================================================

//* Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = "   Welcome to the future   ";

// const wordsArr = string.trim().split(" ");
// wordsArr.splice(0, 1);
// wordsArr.splice(-1, 1);

// console.log(wordsArr.join(" "));

//! =
// wordsArr.pop();
// wordsArr.shift();
// console.log(wordsArr.join(" "));

//! ========================================================================

//* Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = "Welcome to the future";

// const reversedString = string.split("").reverse().join("");

// console.log(reversedString);

//! ========================================================================

//* Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, -10, 94, 1, 23, 37, 0];
// let min = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }

// console.log(min);

//! ========================================================================

//* Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

// console.log("Sort: ", langs.sort());

// for (let i = 0; i < langs.length; i += 1) {
//   for (let k = i + 1; k < langs.length; k += 1) {
//     if (langs[i] > langs[k]) {
//       const temp = langs[i];
//       langs[i] = langs[k];
//       langs[k] = temp;
//     }
//   }
// }

// console.log("Our: ", langs);

/*
1. i = 0
  1.1 k = 1
     if (langs[0] > langs[1]) { python > javascript true
      const temp = langs[0];
      langs[0] = langs[1];
      langs[1] = temp;
     }
      ["javascript", "python", "c++", "haskel", "php", "ruby"];
    1.2 k = 2
     if (langs[0] > langs[2]) { javascript > python false
     ----
    1.3 k = 3
    if (langs[0] > langs[3]) { javascript > haskel true
      const temp = langs[0];
      langs[0] = langs[3];
      langs[3] = temp;
     }
      ["haskel", "python", "c++", "javascript", "php", "ruby"];

*/

//! ========================================================================

// const a = [1, 2, 3];
// const b = Array.from(a);

// console.log(a === b);

// b[0] = 10;

// console.log(a);

//! ========================================================================
