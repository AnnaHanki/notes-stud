const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];

localStorage.setItem(LS_KEY, JSON.stringify(names))

const namesFromLS = localStorage.getItem("smth")); //якщо ми хочемо зчитати дані по неіснуючому ключу - ми отримаємо null
console.log(namesFromLS);
console.log(JSON.parse(namesFromLS));

console.log("Починаємо парсинг не валідного ДЖСОН");

try{
    console.log(JSON.parse("kjkhhj"));
}catch(err){
//блок кетч, його завдання - зловити помилку, яка виникла в блоці трай та обробити її
console.log("ERROR", err)
}

