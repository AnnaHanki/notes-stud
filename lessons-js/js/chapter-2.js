// В якій ситуації краще використовувати тернанрний оператор?
// Питання в тому, які ситуації виникають, коли нам треба написати ТО. ТО ми пишемо, коли якійсь змінній потрібно присвоїти значення, залежно від умови.  

const hours =14;
const minutes = 0;
// let timestring;

//!variant 1

// if (minutes === 0) {
//     timestring = `${hours} h.`;
// } else {
//     timestring = `${hours} h. ${minutes} m.`;
// }
//!variant 1.2
// if (minutes !== 0) {
//     timestring = `${hours} h. ${minutes} m.`;
// } else {
//     timestring = `${hours} h.`;
// }

//!variant 2 by 1.2
// const timestring = minutes !== 0 ? `${hours} h. ${minutes} m.` : `${hours} h.`;
// console.log(timestring);

// task about deadline
//* with if, else if

const daysUntilDeadline = 1;

console.log(getTimeUntilDeadline(daysUntilDeadline));

function getTimeUntilDeadline(daysUntilDeadline) {
    if (daysUntilDeadline === 0) {
        return "Today";
    } else if (daysUntilDeadline === 1) {
        return "Tomorrow";
    } else if (daysUntilDeadline === 2) {
        return "Overtomorrow";
    } else {
        return "Date in the future";
    }
}
//* with switch case

function getTimeUntilDeadline(daysUntilDeadline) {
    switch (daysUntilDeadline) {
        case 0:
            return "Today";
        case 1:
            return "Tomorrow";
        case 2:
            return "Overtomorrow";
        default:
            return "Date in the future";
    }
}
