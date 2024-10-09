console.log("hello world!");

let apples = 10;

console.log(apples);

apples = 15;

console.log(apples);

// * -  dfsdf

console.log(Math.floor(1.3)); // 1
console.log(Math.floor(1.7)); // 1



// Оголошення функції multiply
function doStuff() {
    // Тіло функції
    console.log('Log inside multiply function');
  }
  
  // Виклики функції multiply
  doStuff(); // 'Log inside multiply function'
  doStuff(); // 'Log inside multiply function'
  doStuff(); // 'Log inside multiply function'
  


// Оголошення функції multiply
function sayHi() {
    // Тіло функції
    console.log('Hello, this is my first function!');
  }
  
  sayHi();


  // Оголошення функції
function greet(name) {
    //return 'Hello, ' + name + '!';
    return `Hello, ${name}!`
  }
  
  // Виклик функції
  console.log(greet('Alice')); // Виведе 'Hello, Alice!'
  



// Оголошення функції
function add(a, b) {
    // Використання console.log для налагодження
    console.log('Parameters:', a, b);
    return a + b;
  }
  
  // Виклик функції
  var result = add(5, 3); // Parameters: 5, 3 буде виведено в консоль
  console.log('Result:', result); // Виведе 'Result: 8' в консоль
  




  function multiply(x, y, z) {
    console.log(`Result: ${x * y * z}`);
  }
  
  console.log("Log before multiply execution");
  multiply(2, 3, 5); // "Result: 30"
  console.log("Log after multiply execution");
  




function calculateTotalPrice (orderedQuantity, pricePerItem) {
    return orderedQuantity * pricePerItem;
}
//console.log(calculateTotalPrice); //Цей фрагмент виводить в консоль саму функцію calculateTotalPrice, а не результат її виконання. Це означає, що у консолі ви побачите вихідний код функції. Коли ви передаєте ім'я функції як аргумент до console.log, ви передаєте саму функцію, а не викликаєте її. Щоб викликати функцію і вивести її результат, вам потрібно надати значення параметрів і викликати функцію безпосередньо:

console.log(calculateTotalPrice(5, 10)); // Виведе 50  Цей фрагмент викликає функцію calculateTotalPrice з аргументами 5 і 10, що дає результат 50, який і буде виведено в консоль.

console.log(calculateTotalPrice(8, 60)) //повертає 480
console.log(calculateTotalPrice(3, 400)) //повертає 1200
console.log(calculateTotalPrice(5, 100)) //повертає 500
console.log(calculateTotalPrice(1, 3500)) //повертає 3500
console.log(calculateTotalPrice(12, 70)) //повертає 840



function checkAge(age) {
    if (age >= 18) {
        return "You are an adult";
    }    
}

console.log(checkAge(13)); //undefined
console.log(checkAge(72)); //"You are an adult"


function checkYourAge(yourAge) {
    if (yourAge >= 21) {
        return "Ok, I'll sell you alkohol"
    } else {
        return "F*ck you little p..."
    }
}

console.log(checkYourAge(52));
console.log(checkYourAge(12));



//HW 1. Task 1 (task-1.js)
function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;

    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"



//Блок else...if (ТЕОРІЯ)

//Конструкція else...if розширює конструкцію if...else і дозволяє перевірити та зреагувати на виконання або невиконання кількох умов. Це корисно, коли ми маємо більше однієї умови.

//            if (condition_1) {
//                // код, який виконується, якщо умова (condition_1) істинна
//            } else if (condition_2) {
//                // код, який виконується, якщо умова (condition_2) істинна
//            } else if (condition_3) {
//                // код, який виконується, якщо умова (condition_3) істинна
//            } else {
//                // код, який виконується, якщо всі умови хибні
//            }


  //У цьому прикладі спочатку перевіряється умова grade >= 90.
  const grade = 85;

  if (grade >= 90) {
    console.log("Perfectly");
  } else if (grade >= 80) {
    console.log("Good");
  } else if (grade >= 70) {
    console.log("Satisfactorily");
  } else {
    console.log("Unsatisfactorily");
  }
  
//Оскільки перша умова (grade >= 90) помилкова, то тіло if не виконується і перевіряється наступна умова (grade >= 80). Ця умова є істинною, тому виконується тіло else if, тобто console.log("Good"). Подальші умови вже перевірятись не будуть.



//Задача з конспекту

//умова
// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, функція повертає рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".
// Оголошена функція checkStorage(available, ordered)
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"

function checkStorage(available, ordered) {
    if(ordered === 0) { //ДУЖЕ ВАЖЛИВО встановити строгу рівність, бо інакше код не працює
        return "There are no products in the order!";
    } else if (ordered > available) {
        return "Your order is too large, there are not enough items in stock!";
    } else if (ordered <= available) {
        return "The order is accepted, our manager will contact you";
    }
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));
console.log(checkStorage(80, 80));

//HW 1. Task 2 (task-2.js)

function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return formatMessage;
    } else {
        return (Math.float)
    }
}



//РОЗГАЛУЖЕННЯ

//МІЙ НЕПРАВИЛЬНИЙ КОД
function getSubscriptionPrice(type) {
    switch (type) {
    case 'professional':
      console.log('20');
      break;
    case 'organization':
      console.log('50');
      break;
    case 'starter':
      console.log('0');
      break;
    case 'random':
      console.log('Invalid subscription type!');
      break;
    case 'premium':
      console.log('Invalid subscription type!');
      break;
    default:
      console.log('The fruit is unknown');
  }
  }
  

//   ПРАВИЛЬНИЙ КОД

function getSubscriptionPrice(type) {
    switch (type) {
    case 'professional':
      console.log('20');
      break;
    case 'organization':
      console.log('50');
      break;
    case 'starter':
      console.log('0');
      break;
    case 'random':
      console.log('Invalid subscription type!');
      break;
    case 'premium':
      console.log('Invalid subscription type!');
      break;
    default:
      console.log('The fruit is unknown');
  }
  }
  

function checkStorage(available, ordered) {
if(ordered > available) {
    return "Not enough goods in stock!";
} else {
    return "Order is processed, our manager will contact you";
}
}

console.log(checkStorage(10, 50));


//HOMEWORK 2
// https://github.com/AnnaHanki/goit-js-hw-02/blob/main/js/task-2.js
// formatMessage(message, maxLength) {
//     if (message.lengthength <= maxLength) {
//         return message;
//     } else {
//         return `${message.slise(0, maxLength)}...")`;
//     }
// }



// TASK
// Функція normalizeInput(input, to) оголошує два параметри:

// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:

// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі
// Оголошена функція normalizeInput(input, to)
// Виклик функції normalizeInput("This ISN'T SpaM", "lower") повертає "this isn't spam"
// Виклик функції normalizeInput("This ISN'T SpaM", "upper") повертає "THIS ISN'T SPAM"
// Виклик функції normalizeInput("Big SALE", "lower") повертає "big sale"
// Виклик функції normalizeInput("Big SALE", "upper") повертає "BIG SALE"
// Виклик функції normalizeInput("Stay Awhile and Listen", "lower") повертає "stay awhile and listen"
// Виклик функції normalizeInput("Stay Awhile and Listen", "upper") повертає "STAY AWHILE AND LISTEN"

function normalizeInput(input, to) {
    if (to === "upper") {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}

// Приклади виклику функції
// console.log(normalizeInput("This ISN'T SpaM", "lower"));  // "this isn't spam"
// console.log(normalizeInput("This ISN'T SpaM", "upper"));  // "THIS ISN'T SPAM"
// console.log(normalizeInput("Big SALE", "lower"));         // "big sale"
// console.log(normalizeInput("Big SALE", "upper"));         // "BIG SALE"
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));  // "stay awhile and listen"
// console.log(normalizeInput("Stay Awhile and Listen", "upper"));  // "STAY AWHILE AND LISTEN"

// TASK

// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка firstName у рядок fullName.

// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою входження не забудь прирівняти їх до однакового регістру.

// Оголошена функція checkForName(fullname, firstName)
// Виклик функції checkForName("Jason Neis", "Jason") повертає true
// Виклик функції checkForName("Jason Neis", "jAsOn") повертає true
// Виклик функції checkForName("Jason Neis", "Jacob") повертає false
// Виклик функції checkForName("Caty Stars", "Caty") повертає true
// Виклик функції checkForName("Caty Stars", "cAtY") повертає true
// Виклик функції checkForName("Caty Stars", "Andromeda") повертає false

// function checkForName(fullName, firstName) {
//     // Перетворюємо обидва рядки до нижнього регістру
//     const fullNameLower = fullName.toLowerCase();
//     const firstNameLower = firstName.toLowerCase();
  
//     // Перевіряємо входження підрядка
//     return fullNameLower.includes(firstNameLower);
//   }
  
//   // Приклади виклику функції
//   console.log(checkForName("Jason Neis", "Jason")); // true
//   console.log(checkForName("Jason Neis", "jAsOn")); // true
//   console.log(checkForName("Jason Neis", "Jacob")); // false
//   console.log(checkForName("Caty Stars", "Caty")); // true
//   console.log(checkForName("Caty Stars", "cAtY")); // true
//   console.log(checkForName("Caty Stars", "Andromeda")); // false
  