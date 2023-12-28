const colorArr = [];

console.log("colorArr", colorArr);

const randomCol = () => `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)} )`


console.log(randomCol());


for (let i = 0; i < 5; i++) {
    colorArr.push(randomCol())
}

console.log("colorArr", colorArr);

const output = colorArr[Math.floor(Math.random() * colorArr.length)]

document.querySelector("#question").innerHTML = output;

// console.log(output);

let buttons = () => {
    document.getElementById("bt1").style.backgroundColor = colorArr.pop()
    let mycolor2 = document.getElementById("bt2").style.backgroundColor = colorArr.pop()
    console.log(mycolor2);
    document.getElementById("bt3").style.backgroundColor = colorArr.pop()
    document.getElementById("bt4").style.backgroundColor = colorArr.pop()
    document.getElementById("bt5").style.backgroundColor = colorArr.pop()
}


let checkCol = (id) => {
    console.log(id);
    let res = document.querySelector("#res")
    res.innerHTML = document.getElementById(id).style.backgroundColor == output ? "Das Stimmt" : "leider ist falsch"

}


let resetMe = () => location.reload()


buttons()