let button = document.getElementById("aButton")

button.addEventListener("click", buttonListener)

function buttonListner() {
    let greeting
    let randomNumber = Math.random()
    let isLucky = randomNumber > 0.5
    console.log(randomNumber)
    console.log("is your luck good? answer: " + toString(isLucky))

    if (isLucky) {
        greeting = "You did well"
    } else {
        greeting = "You did poorly"
    }

    alert(greeting)
}