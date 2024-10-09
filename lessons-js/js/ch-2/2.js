// let age = 0; //можна не оголошувати змінну

// function checkAge(age) {
//     if (age >= 18) {
//         return "You an adult";
//     } else {
//         return "U aren't adult"
//     }
// }

// // checkAge(20);
// // checkAge(27);
// // checkAge(17);

// console.log(checkAge(20))


/* 
оголосити функцію
if age >= 18, то функція повертає рядок: "You are an adolt" */


// function checkAge(age) {
//     if (age >= 18) {
//         return "You are an adult";
//     } else {
//         return "You are not an adult";
//     }
// }

// console.log(checkAge(20)); // "You are an adult"
// console.log(checkAge(27)); // "You are an adult"
// console.log(checkAge(17)); // "You are not an adult"


// =========================

/*

Що не так з цим кодом?
let age = 0;

function checkAge(age) {
    if (age >= 18) {
        return "You an adult";
    }
}

checkAge(20);
checkAge(27);
checkAge(17);

console.log(checkAge)
Програма ChatGPT сказала:
ChatGPT
У коді є кілька проблем і непорозумінь:

Функція checkAge не повертає значення, якщо вік менший за 18: Якщо значення age менше за 18, то функція нічого не повертає (відсутня гілка для цього випадку). Функція повинна мати явне повернення результату для всіх можливих умов.

Консольний лог відображає саме визначення функції, а не результат: У рядку console.log(checkAge) викликається не результат функції, а виводиться сама функція як об'єкт, оскільки вона передається без виклику. Потрібно викликати функцію, щоб вивести її результат.

Покращений варіант коду:

function checkAge(age) {
    if (age >= 18) {
        return "You are an adult";
    } else {
        return "You are not an adult";
    }
}

console.log(checkAge(20)); // "You are an adult"
console.log(checkAge(27)); // "You are an adult"
console.log(checkAge(17)); // "You are not an adult"
Виправлення:
Додана гілка else — функція тепер повертає результат для будь-якого значення віку.
Виклик функції в console.log — тепер результати функції виводяться правильно.
Ось що змінено:
Для віку меншого за 18 повертається інший рядок: "You are not an adult".
Тепер console.log(checkAge(20)); правильно викликає функцію і виводить її результат.

*/

//======================

/*
У наступному прикладі умова перетворюється до true, тому виконується код у тілі (фігурних дужках) блоку if, а тіло блоку else ігнорується.
*/

// const grade = 85;

// if (grade >= 70) {
//     console.log("Satisfactorily");
// } else {
//     console.log("Unsatisfactorily");
// }

/*
Якщо умова перетворюється до false, код із тіла блоку if буде пропущений, і виконається код із тіла блоку else.
*/

// const gGrade = 40;

// if (gGrade >= 70) {
//     console.log("Satisfactorily");
// } else {
//     console.log("Unsatisfactorily");
// }


//==========================

// function checkStorage(available, ordered) {
//     if (ordered > available) {
//         return "Not enough goods in stock!";
//     } else {
//         return "Order is processed, our manager will contact you";
//     }
// }

// console.log(checkStorage(14, 50));
// console.log(checkStorage(150, 32));


//==============================

/* Створити функцію checkStorage і параметри (available, ordered)
перше if якщо ordered замовлено дорівнює 0, то виводиться рядок "There are no products in the order!" і якщо умова виконується, якщо це так, то далі код ігнорується, однак
Якщо замовлено більше наявної кількості товарів, то функція повертає рядок: "Your order is too large, there are not enough items in stock!" else is
Друге else if, якщо не виконується і друга умова. Результатом виконання третього if є виведення рядка: "The order is accepted, our manager will contact you"
*/

// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//         return "There are no products in the order!";
//     } else if (ordered > available) {
//         return "Your order is too large, there are not enough items in stock!";
//     } else if (ordered <= available) {
//         return "The order is accepted, our manager will contact you";
//     }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(80, 80));


/* */

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     return password = correctPassword === password ? "Access granted" : "Access denied, wrong password!";
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));


//====================
// function getSubscriptionPrice(type) {
//     switch(type) {
//         case `starter`:
//             return 0;
//             break;
//         case `professional`:
//             return 20;
//             break;
//         case `organization`:
//             return 50;
//             break;
//         default:
//             return "Invalid subscription type!";
//     }
// }

// console.log(getSubscriptionPrice("professional")); // 20
// console.log(getSubscriptionPrice("organization")); // 50
// console.log(getSubscriptionPrice("starter")); // 0
// console.log(getSubscriptionPrice("random")); // "Invalid subscription type!"
// console.log(getSubscriptionPrice("premium")); // "Invalid subscription type!"


//===========================

// function isNumberInRange(start, end, number) {
//     return number >= start && number <= end;
// }

// console.log(isNumberInRange(12, 74, 55));

// console.log(isNumberInRange(10, 30, 17)) //повертає true
// console.log(isNumberInRange(10, 30, 5)) //повертає false
// console.log(isNumberInRange(20, 50, 24)) //повертає true
// console.log(isNumberInRange(20, 50, 76)) //повертає false


//=============================

// function checkAccess(subtype) {
//     return subtype === "pro" || subtype === "vip";
// }

// console.log(checkAccess("pro")) //повертає true
// console.log(checkAccess("starter")) //повертає false
// console.log(checkAccess("vip")) //повертає true
// console.log(checkAccess("free")) //повертає false


//========================

// function toggleModalVisibility(isVisible) {
//     return !isVisible;
// }

// console.log(toggleModalVisibility(true)); //щоб дізнатись значення, результат виконання функції - потрібно ввести будь-яке булеве значення
// console.log(toggleModalVisibility(false));

//====================

//Рефакторинг

// const deadline= 1;

// switch(deadline) {
//     case 0:
//         console.log("today");
//         break;
//     case 1:
//         console.log("Tomorrow");
//         break;
//     case 2:
//         console.log("overtomorrow");
//         break;
//     default:
//         console.log("Date in the future");
// }


///Методи рядків

// const messagee = "JavaScript is awesome!";
// console.log(messagee.length);

//
// const message = "JavaScript is awesome!";
// console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"

// const fullName = "Jacob Mercer";
// console.log(fullName);
// console.log(fullName.slice(0, 5));
// console.log(fullName.slice());


// //
// function getSubstring(string, length)  {
//     return string.slice(0, length);
// }

// // Приклади виклику функції:
// console.log(getSubstring("Hello world", 3)); // "Hel"
// console.log(getSubstring("Hello world", 5)); // "Hello"
// console.log(getSubstring("Hello world", 8)); // "Hello wo"
// console.log(getSubstring("Hello world", 11)); // "Hello world"
// console.log(getSubstring("Hello world", 0)); // ""

// //
// function normalizeInput(input, to) {
//     if (to === "upper") {
//         return input.toUpperCase();
//     } else {
//         return input.toLowerCase();
//     }
// }
// // Приклади виклику функції
// console.log(normalizeInput("This ISN'T SpaM", "lower"));  // "this isn't spam"
// console.log(normalizeInput("This ISN'T SpaM", "upper"));  // "THIS ISN'T SPAM"
// console.log(normalizeInput("Big SALE", "lower"));         // "big sale"
// console.log(normalizeInput("Big SALE", "upper"));         // "BIG SALE"
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));  // "stay awhile and listen"
// console.log(normalizeInput("Stay Awhile and Listen", "upper"));  // "STAY AWHILE AND LISTEN"

// //includes()

// const mmessage = 'Please, buy our stuff!';
// const hasSpam = mmessage.includes('buy');

// if (hasSpam) {
//     console.log("Warning: This message contains forbidden words.");
// } else {
//     console.log("You can safely open this message.");
// }

// //прирівняти фулнейм і фьорстнейм до ловер кейс, а потім чи includes fullname firstname

// function checkForName(fullName, firstName) {
//     const lowerFullName = fullName.toLowerCase();
//     const lowerFirstName = firstName.toLowerCase();

//     return lowerFullName.includes(lowerFirstName);
// }

// // Приклади виклику функції
// console.log(checkForName("Jason Neis", "Jason")); // true
// console.log(checkForName("Jason Neis", "jAsOn")); // true
// console.log(checkForName("Jason Neis", "Jacob")); // false
// console.log(checkForName("Caty Stars", "Caty")); // true
// console.log(checkForName("Caty Stars", "cAtY")); // true
// console.log(checkForName("Caty Stars", "Andromeda")); // false


//endsWith, startWith
// function checkFileExtension(fileName, ext) {
//     if(fileName.endsWith(ext)) {
//         return "File extention matches";
//     } else {
//         return "File extention does not match"
//     }
// }

// Приклади викликів функції:
// console.log(checkFileExtension("styles.css", ".css")); // "File extension matches"
// console.log(checkFileExtension("styles.css", ".js")); // "File extension does not match"
// console.log(checkFileExtension("app.js", ".js")); // "File extension matches"
// console.log(checkFileExtension("app.js", ".html")); // "File extension does not match"
// console.log(checkFileExtension("index.html", ".html")); // "File extension matches"
// console.log(checkFileExtension("index.html", ".css")); // "File extension does not match"
// console.log(checkFileExtension("index.html", ".js")); // "File extension does not match"


//indexOf()

// function getFileName(file) {
//     //створити змінну, яка зберігатиме значення індексу крапки у назві файлу
//     const pointIndex = file.lastIndexOf(".");

//     //Вияснить через if, якщо pointIndex містить крапку і вона не є першим символом, то
//     if(pointIndex !== -1 && pointIndex !== 0) {
//         return file.slice(0,  pointIndex);
//     } else { //Якщо крапку не знайдено, поверни початковий рядок
//         return file;
//     }
// }

// // Приклади викликів функції
// console.log(getFileName("styles.css")); // "styles"
// console.log(getFileName("app.js")); // "app"
// console.log(getFileName("app")); // "app"
// console.log(getFileName("index.js")); // "index"
// console.log(getFileName("index.html")); // "index"
// console.log(getFileName("index.css")); // "index"
// console.log(getFileName("index")); // "index"


//Метод trim()

// function createFileName(name, ext) {
//     return `${name.trim()}.${ext}`;
// }

// // Приклади викликів функції:
// console.log(createFileName(" order ", "txt"));      // повертає "order.txt"
// console.log(createFileName("report ", "csv"));      // повертає "report.csv"
// console.log(createFileName(" presentation", "xml"));// повертає "presentation.xml"


//цикли
//while

// let count = 0;

// while (count < 10) {
//     console.log(`Count: ${count}`);
//     count += 1;
// }



//робота циклу +1 збільшення числа на одиницю
// console.log("before");

// for (let i = 0; i < 10; i += 1) {
//     console.log(i);    
// }

// console.log("after");




//зворотній цикл НЕ РОБИИИИИ ТАААК!!!! ВСЕ ЗАВИСНЕ ДО ДІДЬКА!!

// console.log("before");

// for (let i = 10; i >= 0; i -= 1) {
//     console.log(i);    
// }

// console.log("after");



//

// const maxClients = 25;
// let clientCounter = 18;

// while (clientCounter <= maxClients) {
//     console.log(clientCounter);
//     clientCounter += 1;
// }


// function calculateTotal (number) {
//     let total = 0;
//     for (let i = 1; i <= number; i++) { //і = будь-яке число, допоки і менше або = number, то збільшувати і на одиницю
//         total += i;  //до значення змінної total додавати значення і
//     }
//     return total;
// }

// // Приклади викликів функції:
// console.log(calculateTotal(1));  // повертає 1
// console.log(calculateTotal(3));  // повертає 6
// console.log(calculateTotal(0));  // повертає 0
// console.log(calculateTotal(18)); // повертає 171
// console.log(calculateTotal(24)); // повертає 300

//do while

//Цикли while і do...while працюють схожим чином, але мають одну ключову відмінність. Під час використання циклу do...while код у тілі циклу виконується принаймні один раз, навіть якщо умова не виконується з самого початку.
//do {
//     statement // код, який буде виконуватися
// } while (condition);


// let count = 0;

// do {
//     console.log(`Count: ${count}`);
//     count += 1;    
// } while (count < 5);



// Цикл for

// Цикл for також дозволяє виконувати код, що повторюється, багато разів. На відміну від циклів while і do…while, цикл for має змінну-лічильник. Змінна-лічильник оголошується за допомогою ключового слова let (оголошення через const видасть помилку). На кожній ітерації після виконання коду з тіла циклу вона змінює своє значення від заданого початкового до кінцевого з певним кроком.


// Синтаксис циклу for:


// for (initialization; condition; afterthought) {
//   statement // Тіло циклу
// }

// Ініціалізація — виконується один раз перед початком циклу. Тут оголошується змінна-лічильник і вказується її початкове значення.
// Умова — це вираз, який оцінюється перед кожною ітерацією (повторенням) циклу. Якщо умова перетворюється на**true**, то виконується тіло циклу. Якщо умова перетворюється на false, то цикл завершується.
// Пост-вираз — це вираз, який виконується в кінці кожної ітерації циклу, перед перевіркою умови. Використовується для оновлення значення змінної-лічильника.
// Тіло циклу — це блок коду, який буде виконуватися на кожній ітерації циклу, якщо умова перетворюється на true.


// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
//   }

// //reverse
// for (let i = 20; i >= 0; i -= 5) {
//     console.log(i);
//   }


// function calculateTotal(number) {
//     let total = 0;
//     for (let i = 0; i <= number; i++) {
//         total += i;
//     }
//     return total;
// }

// // Приклади викликів функції:
// console.log(calculateTotal(1));  // повертає 1
// console.log(calculateTotal(0));  // повертає 0
// console.log(calculateTotal(7));  // повертає 28
// console.log(calculateTotal(18)); // повертає 171
// console.log(calculateTotal(24)); // повертає 300


// Інкремент і декремент

// Інкремент (++) і декремент (--) — це операції, які відповідно збільшують або зменшують значення числової змінної на одиницю і одразу ж зберігають оновлене значення у цій змінній. Існують два види інкременту та декременту: префіксний і постфіксний.


// function calculateEvenTotal(number) {
//     let total = 0;
//     let i = 1;
    
//     while (i <= number) {
//         if (i % 2 === 0) {
//             total += i;
//         }
//         i++; // Інкремент
//     }
    
//     return total;
// }

// // Приклади викликів функції:
// console.log(calculateEvenTotal(1));  // повертає 0
// console.log(calculateEvenTotal(3));  // повертає 2
// console.log(calculateEvenTotal(7));  // повертає 12
// console.log(calculateEvenTotal(18)); // повертає 90
// console.log(calculateEvenTotal(27)); // повертає 182

// for (let i = 0; i < 10; i+=1) {
//     console.log(i);

//     if (i === 5) {
//       console.log('Met the number 5, interrupt the execution of the cycle');
//       break;
//     }
//   }
  
// console.log('Log after cycle');


// У цьому прикладі цикл for мав би виконуватися, доки значення змінної i менше 10. Але в тілі циклу є умова if (i === 5), яка перевіряє, чи дорівнює значення i числу 5. Коли ця умова стає істинною, тіло if виконується і застосовується оператор break, і виконання циклу припиняється. Таким чином, у консоль будуть виведені числа від 0 до 5 (включно), а цикл завершиться.




// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i <= end; i++) {
//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
// }
// console.log(number); // для start = 6, end = 17 повертає 10

// // Для перевірки інших прикладів:
// const start1 = 17;
// const end1 = 25;
// let number1;

// for (let i = start1; i <= end1; i++) {
//     if (i % 5 === 0) {
//         number1 = i;
//         break;
//     }
// }
// console.log(number1); // для start = 17, end = 25 повертає 20

// const start2 = 2;
// const end2 = 11;
// let number2;

// for (let i = start2; i <= end2; i++) {
//     if (i % 5 === 0) {
//         number2 = i;
//         break
//     }    
// }

// console.log(number2); // для start = 2, end = 11 повертає 5


function findNumber (start, end, divisor) {
    for (let i = start; i < end; i++) {
        if (i % divisor === 0) {
            return i;
        }
        
    }
}

// Приклади викликів функції:
console.log(findNumber(2, 6, 5));  // повертає 5
console.log(findNumber(8, 17, 3)); // повертає 9
console.log(findNumber(6, 9, 4));  // повертає 8
console.log(findNumber(16, 35, 7));// повертає 21