let trennen = () => {
    const text = document.getElementById("text")
    const word = document.getElementById("word")
    const davor = document.getElementById("davor")
    const before = document.getElementById("vorTeil")
    const after = document.getElementById("nachTeil")
    let index = text.value.indexOf(word.value)

    if (davor.checked) {
        before.innerHTML = text.value.slice(0, index + word.value.length)
        after.innerHTML = text.value.slice(index)
    } else {
        before.innerHTML = text.value.slice(0, index + word.value.length)
        after.innerHTML = text.value.slice(index + word.value.length)
    }
}