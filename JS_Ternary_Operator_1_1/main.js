function checkAge(){
    const ageInput = document.querySelector("#alter").value
    const output = document.querySelector("#ageOutput")

    ageInput >= 18 ? output.textContent = "volljährig" : output.textContent = "minderjährig"

}