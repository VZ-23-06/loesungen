const colorArr = [];

console.log("colorArr", colorArr);

const randomCol = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`


console.log(randomCol());


for (let i = 0; i < 5; i++) {
    colorArr.push(randomCol())
}

console.log("colorArr", colorArr);

const output = colorArr[Math.floor(Math.random() * colorArr.length)]


console.log({output});

let buttons = () => {
    document.querySelector("#question").innerHTML = output;

    let mycolor1 = document.getElementById("bt1").style.background = colorArr.pop()
    console.log("mycolor1", mycolor1);

    let mycolor2 = document.getElementById("bt2").style.backgroundColor = colorArr.pop()
    console.log("mycolor2", mycolor2);

    let mycolor3 = document.getElementById("bt3").style.background = colorArr.pop()
    console.log("mycolor3", mycolor3);
    let mycolor4 = document.getElementById("bt4").style.background = colorArr.pop()
    console.log("mycolor4", mycolor4);


    let mycolor5 = document.getElementById("bt5").style.background = colorArr.pop()
    console.log("mycolor5", mycolor5);
}


let checkCol = (id) => {
    console.log(id);
    let res = document.getElementById("res")
    console.log(document.getElementById(id).style.background);
    res.innerHTML = document.getElementById(id).style.background == output 
    ? "Das Stimmt" 
    : "leider ist falsch";
    console.log("outputInderFunc",output);

}


let resetMe = () => location.reload()


buttons()