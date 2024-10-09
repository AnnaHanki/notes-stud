const max = 100;
const min = 50;

// знайти суму усіх цілих чисел від min до max включно

function getSumOfRange(min, max) {
    /*
    1. Оголосити змінну-накопичувач, куди ми будемо додавати усі числа
    2. Запустити цикл від мін до макс з кроком 1, додаючи кожне значення до накопичувача
    */

    let sum = 0;

    for(let i = min; i >= max; i += 1) {
        sum +=i;
    }

    return sum; 
}

console.log(
    `Сума цілих чисел в діапазоні [${min}, ${max}] рівна ${getSumOfRange(
        min,
        max
    )}`
);

const values = [25,17, 94, 5, 23, 3, 37];

function findMinInArr(numbers) {
    let min = numbers[0];

    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(findMinInArr(values));

//об'єкти

/*const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
};

console.log(book.title); // "The Last Kingdom" 
console.log(book["title"]); // "The Last Kingdom" 

console.log(book.genres); // ["historical prose", "adventure"]
console.log(book["genres"]); // ["historical prose", "adventure"]

const propKey = "author";
console.log(book.propKey); // undefined
console.log(book[propKey]); // "Bernard Cornwell"*/


//ддддддддддд

/*
const apartment = {
    imgUrl - рядок, що містить шлях до зображення, значення "https://via.placeholder.com/640x480";
    descr - рядок, що містить опис, значення "Spacious apartment in the city center";
    rating - число, що містить рейтинг, значення 4;
    price - число, що містить ціну, значення 2153;
    tags - масив рядків, що містить метаінформацію, значення ["premium", "promoted", "top"].
}*/


const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    public: true,
    rating: 8.38,
};



/*Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

Оголошена змінна apartment.
Значення змінної apartment - це об'єкт.
Оголошена змінна keys.
Значення змінної keys - це масив ["descr", "rating", "price"].
Значення змінної keys отримане за допомогою методу Object.keys().
Оголошена змінна values.
Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
Значення змінної values отримане за допомогою циклу for...of.*/

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// // Отримуємо масив ключів об'єкта apartment
// const keys = Object.keys(apartment);

// // Ініціалізуємо масив для значень властивостей
// const values = [];

// Перебираємо масив ключів за допомогою циклу for...of
for (const key of keys) {
  // Додаємо значення властивостей у масив values
    values.push(apartment[key]);
}

// Виводимо результат
console.log(keys);   // ["descr", "rating", "price"]
console.log(values); // ["Spacious apartment in the city center", 4, 2153]



//============
const arr = ["track-1", "track-2", "track-3"];

const playlist = {
    name: "My amazing playlist",
    rating: 5,
    tracks: ["track-1", "track-2", "track-3"],
    isFavourite: true,
}

console.log(arr);
console.log(playlist);

playlist.newProp = 100; //створення нової властивості
playlist.rating = 4; //зміна значення існуючої властивості

playlist.object = { //створення (додавання) нового (вкладеного) об'єкту (object) з властивостями в об'єкті playlist
    smth: 5,
}

console.log(playlist.name);
console.log(playlist.tracks);

/** 
 * ------------------------------
*/
const propertyName = "tracks";
//динамічні властивості - наприклад, коли назви ключа Ви не знаєте. Вона десь зберігається, але Ви не можете її прочитати, Ви її не знаєте. Вона, наприклад, у якійсь зи=мінній, або в циклі перебирається. Наприклад, ми її не занємо, бо об'єкт ми не бачимо. Тут, наприклад, назва ключа - tracks у  propertyName. Як до неї звернутися?
console.log(playlist.propertyName); //видасть Undefined тому що у плейліста немає властивості propertyName

//натомість ставимо квадратні дужки і такиим чином ми звертаємось до того, що зберігається у цій константі (const propertyName = "tracks";). Тобто tracks підставляється у квадратні дужки.

console.log(playlist[propertyName]);


//АБО
//до властивості можна звернутись двома способами: через крапку (назваОб'єкту.ключ, playlist.tracks, playlist.propertyName) або через квадратні дужки (playlist[propertyName]).

console.log(playlist.name); //тоді, коли назва ключа нам невідома
console.log(playlist["name"]); //використовуєте тоді, коли назва ключа невідома та зберігається в сторонній змінній, але обов'язково назву взяти в лапки - ["name"]. Найчастіше цей спосіб використовується в циклах. 


//===========
/*
const book = {
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
  };
  const keys = Object.keys(book);
  
  for (const key of keys)
    console.log(key); // Ключ
    console.log(book[key]); // Значення властивості
  }
*/
/*iooiooioioioiioiiio*/

