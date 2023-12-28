const colorArr = [];

// console.log("colorArr", colorArr);

const randomCol = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`


// console.log(randomCol());


for (let i = 0; i < 5; i++) {
    colorArr.push(randomCol())
}

// console.log("colorArr", colorArr);

const output = colorArr[Math.floor(Math.random() * colorArr.length)]


// console.log({ output });

let buttons = () => {
    document.querySelector("#question").innerHTML = output;
    document.getElementById("bt1").style.background = colorArr.pop()
    document.getElementById("bt2").style.backgroundColor = colorArr.pop()
    document.getElementById("bt3").style.background = colorArr.pop()
    document.getElementById("bt4").style.background = colorArr.pop()
    document.getElementById("bt5").style.background = colorArr.pop()
}


let checkCol = (id) => {
    console.log(id);
    let res = document.getElementById("res")
    console.log(document.getElementById(id).style.background);
    res.innerHTML = document.getElementById(id).style.background == output
        ? "Das Stimmt"
        : "leider ist falsch";
    console.log("outputInderFunc", output);

}


let resetMe = () => location.reload()


buttons()