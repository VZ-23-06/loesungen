
// Verwende den Befehl toUpperCase(), um aus der Variable const text = "Sam is going to codingschool" die veränderte Zeichenkette zu erhalten: SAM IS GOING TO SCHOOL.
// Neben toUpperCase() gibt es auch noch den Befehl toLowerCase(). Schaue, was passiert, wenn du dies auf die Variable text anwendest.
// Erzeuge mit den beiden Befehlen folgende Zeichenketten und gib sie in deinem HTML aus:
// SAM is going to SCHOOL
// sam IS GOING TO school
// Sam Is Going To School


const text = "Sam is going to codingschool"

let samIsGoingTo = text.slice(0, 15)
console.log(samIsGoingTo);
let school = text.slice(22, 28)
console.log(school);

let newSentence = samIsGoingTo + " " + school
console.log(newSentence);

let upper = newSentence.toLocaleUpperCase()
let lower = newSentence.toLowerCase()

let firstLetter = "Sam Is Going To Codingschool"

let samUp = upper.slice(0,4)
console.log(samUp);

let samDown = text.substring(0,4)
console.log(samDown);

let withoutCodingUp = upper.substring(22)
console.log(withoutCodingUp);

let schoolDown = text.substring(22)
console.log(schoolDown);

let schoolUp = upper.substring(16)
console.log(schoolUp);

let isGoUp = upper.substring(4, 16)
console.log(isGoUp);

let isGoDown = text.substring(4, 16)
console.log(isGoDown);



let ergebnis1 = samUp + isGoDown + schoolUp;
let ergebnis3 = samDown + isGoUp + schoolDown



const text2 = "Sam is going to codingschool";
let textSchool = text2.replace("coding", "");
let exampleThree =
textSchool.charAt(0).toUpperCase() +
textSchool.slice(1, 4) +
textSchool.charAt(4).toUpperCase() +
textSchool.slice(5, 7) +
textSchool.charAt(7).toUpperCase() +
textSchool.slice(8, 13) +
textSchool.charAt(13).toUpperCase() +
textSchool.slice(14, 16) +
textSchool.charAt(16).toUpperCase() +
textSchool.slice(17, 22);

console.log(exampleThree);


document.write(upper + "<br>" + lower + "<br>" + ergebnis1 + "<br>" + ergebnis3 + "<br>" + exampleThree + ".")